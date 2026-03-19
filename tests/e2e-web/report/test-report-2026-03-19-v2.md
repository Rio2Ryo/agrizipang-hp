# アグリ・ジパング HP E2E テストレポート v2

**実施日:** 2026-03-19 JST
**対象 URL:** https://agrizipang-hp.vercel.app
**テスト環境:** Playwright 1.58.2 (Chromium + Mobile Chrome)
**実行者:** Claude Code

---

## 結果サマリー

| 項目 | 結果 | 詳細 |
|------|------|------|
| **テスト総数** | 36 件 | Desktop 18 + Mobile 18 |
| **合格** | 36 件 | 100% |
| **不合格** | 0 件 | 0% |
| **所要時間** | 約 78 秒 | |

### v1 → v2 変更点

| 項目 | v1 判定 | v2 判定 | 対応内容 |
|------|---------|---------|----------|
| alt 属性の存在確認 | △ | ○ | 全 13 img 要素の alt 属性を自動検証 |
| キーボードナビゲーション | △ | ○ | Tab キーフォーカス移動を自動検証 |
| ARIA 属性の検証 | △ | ○ | aria-label, aria-expanded, label[for] を自動検証 |
| フォーム送信機能 | △ | ○ | バリデーション・送信・エラーの 3 パターンを自動検証 |
| 外部リンク切れ | △ | ○ | Mother Vegetable リンク (HTTP 200) を自動検証 |
| SNS リンク存在確認 | △ | ○ | mailto/tel/フッターリンクを自動検証 |
| 文字の視認性 | △ | ○ | WCAG AA コントラスト比を自動計算・検証 |
| ボタンタップ領域 | △ | ○ | 主要ボタン・入力の 44px 以上を自動検証 |
| 配色のブランド整合性 | △ | ○ | #2D5016 (124要素) × #4A90E2 (9要素) の使用を自動検証 |
| Hero 画像の解像度 | △ | ○ | 画像読み込み・解像度を自動検証 |

---

## テストファイル一覧

| ファイル | テスト数 | 内容 |
|---------|---------|------|
| `example-toppage.spec.ts` | 5 | トップページ表示・セクション・カラー・ナビ・フォーム |
| `example-accessibility.spec.ts` | 3 | alt 属性・キーボード操作・ARIA 属性 |
| `example-form-submit.spec.ts` | 3 | バリデーション・送信成功・API エラー |
| `example-link-check.spec.ts` | 3 | 外部リンク・連絡先リンク・アンカーナビ |
| `example-visual.spec.ts` | 4 | コントラスト比・タップ領域・ブランド配色・Hero 画像 |

---

## 詳細テスト結果

### 1. トップページ表示テスト（既存）

| サブ項目 | 判定 | 期待値 | 実測値 | 証拠 |
|---------|------|--------|--------|------|
| ページタイトル | ○ | 存在する | 「アグリ・ジパング \| 営農型太陽光発電・CO2削減ソリューション」 | `toppage.png` |
| body 表示 | ○ | 表示される | 表示される | `toppage.png` |

### 2. 6 つの主要セクション存在テスト（既存）

| サブ項目 | 判定 |
|---------|------|
| Hero セクション | ○ |
| About セクション | ○ |
| Business セクション | ○ |
| Sustainability セクション | ○ |
| Collaboration セクション | ○ |
| Contact セクション | ○ |

### 3. デザインカラーテスト（既存）

| サブ項目 | 判定 | 実測値 |
|---------|------|--------|
| About 背景色 | ○ | rgb(246, 242, 234) #f6f2ea |
| Sustainability 背景色 | ○ | rgb(255, 255, 255) #ffffff |
| Footer 背景色 | ○ | rgb(16, 21, 13) #10150d |

### 4. ナビゲーションリンクテスト（既存）

| サブ項目 | 判定 |
|---------|------|
| アンカーリンク総数 (12個) | ○ |
| #about リンク | ○ |
| #business リンク | ○ |
| #sustainability リンク | ○ |
| #collaboration リンク | ○ |

### 5. お問い合わせフォーム表示テスト（既存）

| サブ項目 | 判定 |
|---------|------|
| フォーム入力フィールド (4個) | ○ |
| 送信ボタン | ○ |

---

### 6. アクセシビリティテスト（新規）

| サブ項目 | 判定 | 期待値 | 実測値 | 証拠 |
|---------|------|--------|--------|------|
| img alt 属性 | ○ | 全画像に alt あり | 13/13 画像に alt 属性あり | `accessibility-alt.png` |
| Tab キーフォーカス移動 | ○ | ナビリンクにフォーカス可能 | 15 要素にフォーカス移動、ナビリンク到達確認 | `accessibility-keyboard.png` |
| 言語切替 aria-label | ○ | 設定されている | "Switch language" (2箇所) | `accessibility-aria.png` |
| メニューボタン aria-expanded | ○ | 設定されている | "false" (初期値) | `accessibility-aria.png` |
| フォーム label[for] 紐付け | ○ | 4フィールド紐付け | org, name, email, message 全て紐付け | `accessibility-aria.png` |
| 外部リンク rel 属性 | ○ | noopener 設定 | "noopener noreferrer" | `accessibility-aria.png` |

---

### 7. フォーム送信機能テスト（新規）

| サブ項目 | 判定 | 期待値 | 実測値 | 証拠 |
|---------|------|--------|--------|------|
| バリデーションエラー表示 | ○ | 空送信でエラー | 「ご担当者名・メールアドレス・ご相談内容は必須です。」 | `form-validation-error.png` |
| フォーム入力 → 送信 | ○ | 成功メッセージ表示 | 「送信が完了しました」表示 (API モック) | `form-success.png` |
| リセットボタン表示 | ○ | 表示される | 「別のお問い合わせをする」表示 | `form-success.png` |
| API エラー時メッセージ | ○ | エラー表示 | "Internal Server Error" 表示 | `form-api-error.png` |

---

### 8. リンクチェックテスト（新規）

| サブ項目 | 判定 | 期待値 | 実測値 | 証拠 |
|---------|------|--------|--------|------|
| Mother Vegetable 外部リンク | ○ | HTTP 200 | HTTP 200 | `link-external.png` |
| mailto リンク | ○ | inquiry@agrizipang.com | 2箇所で確認 | `link-contacts.png` |
| tel リンク | ○ | 0286252809 | 2箇所で確認 | `link-contacts.png` |
| フッターアンカーリンク | ○ | 3個以上 | 5個確認 | `link-contacts.png` |
| アンカーナビ (#about) | ○ | セクション到達 | ビューポート内に表示 | `link-anchor-nav.png` |
| アンカーナビ (#business) | ○ | セクション到達 | ビューポート内に表示 | `link-anchor-nav.png` |
| アンカーナビ (#sustainability) | ○ | セクション到達 | ビューポート内に表示 | `link-anchor-nav.png` |
| アンカーナビ (#collaboration) | ○ | セクション到達 | ビューポート内に表示 | `link-anchor-nav.png` |
| アンカーナビ (#contact) | ○ | セクション到達 | ビューポート内に表示 | `link-anchor-nav.png` |

---

### 9. 視認性・デザインテスト（新規）

#### コントラスト比

| サブ項目 | 判定 | テキスト色 | 背景色 | コントラスト比 | 基準 |
|---------|------|-----------|--------|--------------|------|
| About 見出し | ○ | rgb(45,80,22) | rgb(246,242,234) | 8.28:1 | ≥ 3.0 |
| About サブタイトル | ○ | rgb(100,116,139) | rgb(246,242,234) | 4.26:1 | ≥ 3.0 |
| Business 見出し | ○ | rgb(45,80,22) | rgb(240,236,228) | 7.85:1 | ≥ 3.0 |
| Sustainability 見出し | ○ | rgb(45,80,22) | rgb(255,255,255) | 9.25:1 | ≥ 3.0 |
| Company 見出し | ○ | rgb(45,80,22) | rgb(255,255,255) | 9.25:1 | ≥ 3.0 |
| Contact 見出し | ○ | rgb(45,80,22) | rgb(239,233,222) | 7.65:1 | ≥ 3.0 |

#### ボタンタップ領域

| サブ項目 | 判定 | Desktop サイズ | Mobile サイズ | 基準 |
|---------|------|---------------|--------------|------|
| フォーム送信ボタン | ○ | 559×56px | 253×56px | 高さ ≥ 44px |
| Hero CTA ボタン | ○ | 186×58px | 345×58px | 高さ ≥ 44px |
| フォーム入力 (org) | ○ | 559×50px | 253×50px | 高さ ≥ 44px |
| フォーム入力 (name) | ○ | 559×50px | 253×50px | 高さ ≥ 44px |
| フォーム入力 (email) | ○ | 559×50px | 253×50px | 高さ ≥ 44px |
| フォーム入力 (message) | ○ | 559×130px | 253×130px | 高さ ≥ 44px |

#### ブランド配色

| サブ項目 | 判定 | 詳細 |
|---------|------|------|
| Deep Green (#2D5016) 使用 | ○ | 124 要素で使用 |
| Brand Blue (#4A90E2) 使用 | ○ | 9 要素で使用 |
| 見出しにブランドカラー適用 | ○ | rgb(45,80,22) = #2D5016 |

#### Hero 画像

| サブ項目 | 判定 | Desktop | Mobile |
|---------|------|---------|--------|
| 画像読み込み | ○ | 938×512px | 393×214px |
| 画像表示 | ○ | 1280×980px | 393×1003px |
| Next.js 最適化配信 | ○ | w=1920, q=75 | w=1200, q=75 |

---

## 保存先ファイル一覧

| ファイル | 内容 |
|---------|------|
| `screenshots/toppage.png` | トップページ全体 |
| `screenshots/sections-overview.png` | 6 セクション概観 |
| `screenshots/design-colors.png` | 配色確認 |
| `screenshots/navigation.png` | ナビゲーション |
| `screenshots/contact-form.png` | お問い合わせフォーム |
| `screenshots/accessibility-alt.png` | alt 属性テスト |
| `screenshots/accessibility-keyboard.png` | キーボードナビテスト |
| `screenshots/accessibility-aria.png` | ARIA 属性テスト |
| `screenshots/form-validation-error.png` | バリデーションエラー |
| `screenshots/form-filled.png` | フォーム入力済み |
| `screenshots/form-success.png` | 送信成功 |
| `screenshots/form-api-error.png` | API エラー |
| `screenshots/link-external.png` | 外部リンクチェック |
| `screenshots/link-contacts.png` | 連絡先リンクチェック |
| `screenshots/link-anchor-nav.png` | アンカーナビチェック |
| `screenshots/visual-contrast.png` | コントラスト比テスト |
| `screenshots/visual-tap-targets.png` | タップ領域テスト |
| `screenshots/visual-brand-colors.png` | ブランド配色テスト |
| `screenshots/visual-hero-image.png` | Hero 画像テスト |
| `report/index.html` | Playwright HTML レポート |
| `report/test-report-2026-03-19-v2.md` | 本レポート |

---

**以上**
