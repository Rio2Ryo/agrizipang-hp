/**
 * モバイル E2E テスト サンプル: Android Chrome でのWebアプリ検証
 *
 * 前提条件:
 *   - Appium サーバーが起動中 (localhost:4723)
 *   - Android エミュレータが起動中
 *   - UiAutomator2 ドライバーがインストール済み
 *
 * 実行方法:
 *   npx ts-node tests/e2e-mobile/example-android-web.spec.ts
 *
 * または Appium MCP 経由で Claude が直接操作:
 *   1. appium_create_session でセッション作成
 *   2. appium_navigate でURLに遷移
 *   3. appium_find_element / appium_click で操作
 *   4. appium_screenshot でエビデンス保存
 */

import { remote, type RemoteOptions } from 'webdriverio';

const BASE_URL = process.env.TEST_BASE_URL || 'https://second-brain-web-73y.pages.dev';

const capabilities: RemoteOptions = {
  hostname: process.env.APPIUM_HOST || '127.0.0.1',
  port: Number(process.env.APPIUM_PORT) || 4723,
  capabilities: {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'emulator-5554',
    browserName: 'Chrome',
  },
  logLevel: 'warn',
};

async function runTests() {
  console.log('=== モバイル E2E テスト開始 ===');
  let driver;

  try {
    driver = await remote(capabilities);
    console.log('✓ Appium セッション作成成功');

    // テスト1: トップページ表示
    console.log('\n--- テスト1: トップページ表示確認 ---');
    await driver.url(BASE_URL);
    await driver.pause(3000); // ページ読み込み待ち

    const title = await driver.getTitle();
    console.log(`Page title: ${title}`);
    if (!title) throw new Error('タイトルが取得できない');
    console.log('✓ トップページ表示確認OK');

    // スクリーンショット
    await driver.saveScreenshot('tests/e2e-mobile/screenshots/android-toppage.png');
    console.log('✓ スクリーンショット保存');

    // テスト2: タップ操作（リンククリック）
    console.log('\n--- テスト2: ナビゲーション ---');
    const links = await driver.$$('a[href^="/"]');
    console.log(`Found ${links.length} internal links`);

    if (links.length > 0) {
      await links[0].click();
      await driver.pause(2000);
      await driver.saveScreenshot('tests/e2e-mobile/screenshots/android-navigation.png');
      console.log('✓ ナビゲーション確認OK');
    }

    // テスト3: スクロール動作
    console.log('\n--- テスト3: スクロール ---');
    await driver.execute('window.scrollTo(0, document.body.scrollHeight)');
    await driver.pause(1000);
    await driver.saveScreenshot('tests/e2e-mobile/screenshots/android-scrolled.png');
    console.log('✓ スクロール確認OK');

    console.log('\n=== 全テスト通過 ===');
  } catch (error) {
    console.error('✗ テスト失敗:', error);
    if (driver) {
      await driver.saveScreenshot('tests/e2e-mobile/screenshots/android-failure.png');
    }
    process.exit(1);
  } finally {
    if (driver) {
      await driver.deleteSession();
      console.log('セッション終了');
    }
  }
}

runTests();
