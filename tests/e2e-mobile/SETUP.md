# モバイル E2E テスト環境セットアップガイド

## 概要
Appium MCP を使って、Claude がモバイルシミュレータ/エミュレータ上のアプリを直接操作してE2Eテストを行う。

## 前提条件

### Android エミュレータ
1. Android SDK のインストール
   ```bash
   # Ubuntu/Debian
   sudo apt install android-sdk
   # または sdkmanager 経由
   sdkmanager "platform-tools" "emulator" "system-images;android-34;google_apis;x86_64"
   ```

2. エミュレータの作成と起動
   ```bash
   avdmanager create avd -n test_device -k "system-images;android-34;google_apis;x86_64"
   emulator -avd test_device -no-window &
   ```

3. ADB 接続確認
   ```bash
   adb devices
   # List of devices attached
   # emulator-5554   device
   ```

### iOS シミュレータ（macOS のみ）
1. Xcode のインストール（App Store から）
2. シミュレータ起動
   ```bash
   xcrun simctl boot "iPhone 15 Pro"
   ```

### Appium のインストール
```bash
npm install -g appium
appium driver install uiautomator2  # Android
appium driver install xcuitest       # iOS (macOS のみ)
```

### Appium MCP のインストール
```bash
npm install -g appium-mcp
```

## 環境変数

| 変数名 | デフォルト | 説明 |
|--------|-----------|------|
| `APPIUM_HOST` | `127.0.0.1` | Appium サーバーのホスト |
| `APPIUM_PORT` | `4723` | Appium サーバーのポート |

## Capabilities 設定

### Android (Chrome / WebView)
```json
{
  "platformName": "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "emulator-5554",
  "browserName": "Chrome"
}
```

### Android (ネイティブアプリ)
```json
{
  "platformName": "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "emulator-5554",
  "appium:app": "/path/to/app.apk"
}
```

### iOS (Safari / WebView)
```json
{
  "platformName": "iOS",
  "appium:automationName": "XCUITest",
  "appium:deviceName": "iPhone 15 Pro",
  "appium:platformVersion": "17.0",
  "browserName": "Safari"
}
```

### iOS (ネイティブアプリ)
```json
{
  "platformName": "iOS",
  "appium:automationName": "XCUITest",
  "appium:deviceName": "iPhone 15 Pro",
  "appium:platformVersion": "17.0",
  "appium:app": "/path/to/app.ipa"
}
```

## Appium サーバー起動
```bash
appium --address 127.0.0.1 --port 4723 --log /tmp/appium.log &
```

## MCP 設定（~/.claude/mcp.json に追加済み）
```json
{
  "appium": {
    "command": "npx",
    "args": ["appium-mcp"],
    "env": {
      "APPIUM_HOST": "127.0.0.1",
      "APPIUM_PORT": "4723"
    }
  }
}
```

## macOS 追加ツール: iphone-mirroir-mcp
実機のiPhoneをミラーリングして操作する場合：
```bash
npm install -g iphone-mirroir-mcp
```
`~/.claude/mcp.json` に追加：
```json
{
  "iphone-mirror": {
    "command": "npx",
    "args": ["iphone-mirroir-mcp"]
  }
}
```

## トラブルシューティング
- **ADB接続できない**: `adb kill-server && adb start-server`
- **エミュレータが遅い**: KVMを有効化 `sudo apt install qemu-kvm`
- **Appium セッション作成失敗**: `appium driver list` でドライバーインストールを確認
- **iOS実機接続**: `xcrun devicectl list devices` でデバイス確認
