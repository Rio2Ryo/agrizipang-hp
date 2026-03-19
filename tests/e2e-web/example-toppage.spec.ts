/**
 * アグリ・ジパング HP E2E テスト: トップページ表示確認
 *
 * 実行方法:
 *   cd tests && npx playwright test e2e-web/example-toppage.spec.ts
 */
import { test, expect } from '@playwright/test';

const BASE_URL = process.env.TEST_BASE_URL || 'https://agrizipang-hp.vercel.app';

test.describe('アグリ・ジパング HP トップページ E2E テスト', () => {
  test('トップページが正常に表示される', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // ページタイトルが存在することを確認
    const title = await page.title();
    expect(title).toBeTruthy();
    console.log(`Page title: ${title}`);

    // bodyが表示されていることを確認
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // スクリーンショットをエビデンスとして保存
    await page.screenshot({
      path: 'tests/e2e-web/screenshots/toppage.png',
      fullPage: true,
    });
  });

  test('6つの主要セクションが存在する', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Hero セクション: 最初の section 要素
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
    console.log('✓ Hero section visible');

    // About セクション
    const about = page.locator('section#about');
    await expect(about).toBeVisible();
    console.log('✓ About section visible');

    // Business セクション
    const business = page.locator('section#business');
    await expect(business).toBeVisible();
    console.log('✓ Business section visible');

    // Sustainability セクション
    const sustainability = page.locator('section#sustainability');
    await expect(sustainability).toBeVisible();
    console.log('✓ Sustainability section visible');

    // Collaboration セクション
    const collaboration = page.locator('section#collaboration');
    await expect(collaboration).toBeVisible();
    console.log('✓ Collaboration section visible');

    // Contact セクション
    const contact = page.locator('section#contact');
    await expect(contact).toBeVisible();
    console.log('✓ Contact section visible');

    await page.screenshot({
      path: 'tests/e2e-web/screenshots/sections-overview.png',
      fullPage: true,
    });
  });

  test('デザインカラー（緑×白系）が適用されている', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Hero セクションの暗い緑系グラデーション背景を確認
    const heroOverlay = page.locator('section').first().locator('div.absolute').first();
    await expect(heroOverlay).toBeAttached();

    // About セクションの背景色（ウォームベージュ #f6f2ea）
    const about = page.locator('section#about');
    const aboutBg = await about.evaluate((el) => getComputedStyle(el).backgroundColor);
    console.log(`About background: ${aboutBg}`);
    // rgb(246, 242, 234) = #f6f2ea
    expect(aboutBg).toContain('246');

    // Sustainability セクションの白背景
    const sustainability = page.locator('section#sustainability');
    const sustainBg = await sustainability.evaluate((el) => getComputedStyle(el).backgroundColor);
    console.log(`Sustainability background: ${sustainBg}`);
    expect(sustainBg).toContain('255');

    // フッターの暗い緑/黒背景
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    const footerBg = await footer.evaluate((el) => getComputedStyle(el).backgroundColor);
    console.log(`Footer background: ${footerBg}`);
    // rgb(16, 21, 13) = #10150d
    expect(footerBg).toContain('16');

    await page.screenshot({
      path: 'tests/e2e-web/screenshots/design-colors.png',
      fullPage: true,
    });
  });

  test('ナビゲーションリンクが存在する', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // ナビゲーション内のアンカーリンクを確認
    const navLinks = page.locator('nav a[href^="#"]');
    const linkCount = await navLinks.count();
    console.log(`Found ${linkCount} nav anchor links`);
    expect(linkCount).toBeGreaterThanOrEqual(4);

    // 各セクションへのリンクが存在するか確認
    for (const section of ['about', 'business', 'sustainability', 'collaboration']) {
      const link = page.locator(`nav a[href="#${section}"]`);
      const count = await link.count();
      console.log(`Nav link to #${section}: ${count > 0 ? '✓' : '✗'}`);
      expect(count).toBeGreaterThan(0);
    }

    await page.screenshot({
      path: 'tests/e2e-web/screenshots/navigation.png',
      fullPage: true,
    });
  });

  test('お問い合わせフォームが表示される', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Contact セクションまでスクロール
    await page.locator('section#contact').scrollIntoViewIfNeeded();

    // フォーム要素の確認
    const form = page.locator('section#contact form');
    await expect(form).toBeVisible({ timeout: 10000 });

    // 入力フィールドの存在確認
    const inputs = page.locator('section#contact input, section#contact textarea');
    const inputCount = await inputs.count();
    console.log(`Found ${inputCount} form inputs in contact section`);
    expect(inputCount).toBeGreaterThanOrEqual(2);

    // 送信ボタンの確認
    const submitButton = page.locator('section#contact button[type="submit"]');
    await expect(submitButton).toBeVisible();

    await page.screenshot({
      path: 'tests/e2e-web/screenshots/contact-form.png',
      fullPage: true,
    });
  });
});
