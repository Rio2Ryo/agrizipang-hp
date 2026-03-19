# TESTING_WORKFLOW.md — 自律型QAパイプライン

> このドキュメントは、「テストして」と指示された際にアオ（Claude）が実行するワークフローを定義する。
> 制定: 2026-03-18

---

## 1. トリガー

以下のいずれかで本ワークフローが起動する：
- Ryo が「テストして」「テストやって」「テスト」と指示
- コード変更後の自動検証フロー
- デプロイ後の本番検証

---

## 2. テスト実行フロー全体図

```
「テストして」
    │
    ├─ PHASE 1: テスト計画策定
    │   └─ 変更差分を分析 → P0/P1/P2 テスト項目を列挙
    │
    ├─ PHASE 2: Unit / Integration テスト
    │   └─ pnpm test / vitest / jest を実行
    │
    ├─ PHASE 3: Web E2E テスト（Playwright MCP）
    │   └─ ブラウザを直接操作して UI フロー検証
    │
    ├─ PHASE 4: モバイル E2E テスト（Appium MCP）*
    │   └─ シミュレータ上でモバイル UI 検証
    │   └─ * 環境が利用可能な場合のみ
    │
    └─ PHASE 5: 結果報告
        └─ Pass/Fail サマリー + スクリーンショット + 修正提案
```

---

## 3. PHASE 1: テスト計画策定

### 3.1 変更差分の分析
```bash
git diff --name-only HEAD~1   # 直近の変更ファイル
git diff --stat HEAD~1        # 変更量の把握
```

### 3.2 テスト優先度の分類

| 優先度 | 対象 | 例 |
|--------|------|----|
| **P0 (必須)** | 認証・決済・データ整合性・CRUDコア操作 | ログイン、作成→表示→更新→削除 |
| **P1 (重要)** | 主要ユーザーフロー・検索・フィルタ・ページ遷移 | 一覧→詳細、検索結果表示 |
| **P2 (推奨)** | レスポンシブ・アクセシビリティ・エッジケース | モバイル表示、空データ状態、大量データ |

### 3.3 セレクタ抽出手順
1. 変更されたコンポーネントのソースを読む
2. `data-testid`、`role`、`aria-label` 属性を抽出
3. 上記がない場合は CSS セレクタ or テキストコンテンツで特定
4. E2E テスト時は Playwright MCP の `browser_snapshot` でアクセシビリティツリーを取得し、`ref` 値を使う

---

## 4. PHASE 2: Unit / Integration テスト

### 実行手順
1. プロジェクトのテストランナーを特定（`package.json` の `scripts.test` を確認）
2. テスト実行:
   ```bash
   pnpm test          # or npm test / vitest / jest
   pnpm run typecheck # 型チェック
   pnpm run lint      # リント
   ```
3. 失敗時: エラーメッセージを解析 → 自動修正を試行（最大3回）

### 判定基準
- 全テスト Pass → PHASE 3 へ
- 失敗あり → 修正試行 → 3回失敗で Ryo に報告

---

## 5. PHASE 3: Web E2E テスト（Playwright MCP）

### 5.1 使用ツール
- **Playwright MCP** (`@playwright/mcp`): Claude がブラウザを直接操作
- 設定: `~/.claude/mcp.json` → `playwright` サーバー

### 5.2 テスト実行手順

#### 方法A: MCP 直接操作（推奨 — トークン効率が良い）
```
1. browser_navigate({ url: "対象URL" })
2. browser_snapshot()  → DOM/アクセシビリティツリー取得
3. 要素操作: browser_click / browser_type / browser_select_option
4. 検証: snapshot のツリーで期待要素を確認
5. browser_take_screenshot()  → エビデンス保存
```

#### 方法B: Playwright テストスクリプト実行
```bash
npx playwright test tests/e2e-web/ --config=tests/playwright.config.ts
```

### 5.3 標準テストシナリオ

#### P0: トップページ表示
1. トップページに遷移
2. メインコンテンツが表示されることを確認
3. コンソールエラーがないことを確認
4. スクリーンショット保存

#### P0: CRUD 操作フロー
1. **Create**: フォーム入力 → 送信 → 成功メッセージ確認 → 一覧に新規データが表示
2. **Read**: 一覧から詳細遷移 → データ内容が正しい
3. **Update**: 編集ボタン → フォーム変更 → 保存 → 変更が反映
4. **Delete**: 削除 → 確認ダイアログ → 一覧から消失

#### P1: 検索・フィルタ
1. 検索キーワード入力 → 結果が絞り込まれる
2. フィルタ変更 → 結果が変わる
3. 空の検索結果 → 適切なメッセージ表示

#### P2: レスポンシブ
1. `browser_resize({ width: 375, height: 812 })` → モバイル表示
2. ナビゲーション（ハンバーガーメニュー等）が機能する
3. コンテンツが収まっている

### 5.4 セルフヒーリング（自動修復）

テスト失敗時、以下の手順で最大5回リトライ:

```
リトライ 1: 待機時間を追加（ネットワーク遅延対策）
  → browser_wait({ time: 3000 }) 後に再試行

リトライ 2: セレクタの再探索
  → browser_snapshot() でアクセシビリティツリーを再取得
  → 期待要素に近いテキスト/role で代替セレクタを特定

リトライ 3: ページリロード
  → browser_navigate({ url: 現在のURL }) で再読み込み

リトライ 4: 前のステップからやり直し
  → テストフロー全体を最初から再実行

リトライ 5: アプローチ変更
  → 別のセレクタ戦略、別のユーザーフローで検証

5回失敗 → 失敗レポート（スクリーンショット + DOMスナップショット + エラー詳細）を Ryo に報告
```

---

## 6. PHASE 4: モバイル E2E テスト（Appium MCP）

### 6.1 前提条件チェック
```bash
# Android エミュレータ
adb devices  # デバイスが表示されるか

# iOS シミュレータ (macOS のみ)
xcrun simctl list devices booted

# Appium サーバー
curl http://127.0.0.1:4723/status
```

**環境が利用不可の場合**: 「モバイルテスト環境未構築のためスキップ」と明記し、PHASE 5 へ進む。

### 6.2 テスト実行手順（MCP 経由）
```
1. appium_create_session({ capabilities: {...} })
2. appium_navigate({ url: "対象URL" })
3. appium_find_element / appium_click / appium_type
4. appium_screenshot() → エビデンス保存
5. appium_delete_session()
```

### 6.3 セットアップ詳細
`tests/e2e-mobile/SETUP.md` を参照。

---

## 7. PHASE 5: 結果報告

### 報告フォーマット
```markdown
## テスト結果サマリー

### 環境
- 対象URL: https://...
- 日時: YYYY-MM-DD HH:MM JST
- ブランチ: feature/xxx

### Unit / Integration
- 結果: ✅ XX passed / ❌ XX failed / ⏭ XX skipped
- 失敗詳細: （あれば）

### Web E2E (Playwright MCP)
- 結果: ✅ XX passed / ❌ XX failed
- テストシナリオ:
  - [P0] トップページ表示: ✅
  - [P0] CRUD操作: ✅ / ❌（詳細）
  - [P1] 検索: ✅
  - [P2] レスポンシブ: ✅
- スクリーンショット: [添付]

### モバイル E2E (Appium MCP)
- 結果: ✅ / スキップ（環境未構築）

### 検出した問題
1. [P0] 〇〇ページで△△が表示されない → 修正済み / 要対応
2. [P1] 〇〇のレスポンス遅延（3秒以上）→ 要調査

### 自動修正の実施
- セレクタ変更: X件
- 待機時間調整: X件
- リトライで解決: X件
```

---

## 8. 代替ツール・拡張オプション

### トークン消費を抑えたい場合
| ツール | 特徴 | 用途 |
|--------|------|------|
| **Playwright MCP** | 標準。アクセシビリティツリーベースで効率的 | メインのWeb E2E |
| **browser-use** | LLM最適化されたブラウザ操作。Vision不要モードあり | トークン節約が最優先の場合 |
| **PinchTab** | 軽量ブラウザ操作MCP | 簡易的なページ確認 |

### 統合テストプラットフォーム
| ツール | 特徴 | 用途 |
|--------|------|------|
| **TestSprite MCP** | AI駆動のテスト自動生成・実行プラットフォーム | テストケース自動生成が必要な場合 |

導入検討時は Ryo に相談。

---

## 9. ファイル構成

```
tests/
├── playwright.config.ts          # Playwright 設定
├── e2e-web/
│   ├── example-toppage.spec.ts   # Web E2E サンプル
│   ├── screenshots/              # Web スクリーンショット
│   └── report/                   # Playwright HTMLレポート
├── e2e-mobile/
│   ├── SETUP.md                  # モバイル環境セットアップガイド
│   ├── example-android-web.spec.ts # Android E2E サンプル
│   └── screenshots/              # モバイル スクリーンショット
└── scripts/
    └── mcp-web-e2e-example.md    # MCP直接操作の手順書

~/.claude/mcp.json                # MCP サーバー設定（playwright + appium）
```

---

## 10. 運用ルール

1. **「テストして」= このワークフロー全体を実行**。Unit だけで終わらない
2. **E2E はモック禁止**。実 API・実データで検証
3. **デプロイ後は必ず本番 URL でもE2E実行**
4. **テスト結果は必ずスクリーンショット付きで報告**
5. **失敗時は自動修復を試み、5回で駄目なら Ryo に報告**
6. **新しいプロジェクトでも同じワークフローを適用**
