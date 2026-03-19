# Playwright MCP 経由 Web E2E テスト手順

## 概要
Claude が Playwright MCP サーバーを通じてブラウザを直接操作し、E2Eテストを実行する手順。

## 前提条件
- `~/.claude/mcp.json` に playwright MCP が設定済み
- Chromium ブラウザがインストール済み (`npx playwright install chromium`)

## テスト実行フロー（Claude が MCP ツール経由で実行）

### 1. ページ遷移
```
browser_navigate({ url: "https://対象URL" })
```

### 2. アクセシビリティツリー取得（DOM解析）
```
browser_snapshot()
```
→ 返されたツリーからセレクタ・要素の存在を確認

### 3. 要素操作
```
browser_click({ element: "ログインボタン", ref: "e123" })
browser_type({ element: "メールアドレス入力", ref: "e456", text: "test@example.com" })
browser_select_option({ element: "カテゴリ選択", ref: "e789", values: ["tech"] })
```

### 4. スクリーンショット取得（エビデンス）
```
browser_take_screenshot({ raw: true })
```

### 5. 検証
- snapshot のツリーで期待する要素が存在するか確認
- テキスト内容が期待通りか確認
- エラーメッセージが表示されていないか確認

## セルフヒーリング手順

テスト失敗時：
1. `browser_snapshot()` で現在のDOM状態を取得
2. 期待した要素が見つからない場合 → アクセシビリティツリーから代替セレクタを探索
3. ページ遷移に失敗した場合 → URLを確認、リダイレクトを追跡
4. タイムアウトの場合 → `browser_wait({ time: 3000 })` 後にリトライ
5. 最大5回リトライ後、失敗理由とスクリーンショットを報告

## テストパターン例

### P0: トップページ表示確認
1. `browser_navigate` → トップページURL
2. `browser_snapshot` → タイトル・メインコンテンツの存在確認
3. `browser_take_screenshot` → エビデンス

### P0: CRUD操作フロー
1. **Create**: フォームに入力 → 送信 → 一覧に表示されるか確認
2. **Read**: 一覧から詳細ページへ遷移 → データが正しく表示されるか
3. **Update**: 編集ボタン → フォーム変更 → 保存 → 反映確認
4. **Delete**: 削除ボタン → 確認ダイアログ → 一覧から消えたか確認

### P1: 検索・フィルタ
1. 検索バーにキーワード入力
2. 結果が絞り込まれることを確認
3. フィルタ条件変更で結果が変わることを確認

### P2: レスポンシブ・アクセシビリティ
1. `browser_resize({ width: 375, height: 812 })` → モバイル表示確認
2. `browser_snapshot` → アクセシビリティツリーで構造確認
