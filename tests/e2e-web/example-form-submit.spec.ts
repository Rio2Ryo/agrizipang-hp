/**
 * アグリ・ジパング HP E2E テスト: フォーム送信機能
 *
 * テスト項目:
 *   - バリデーション（必須項目の空送信）
 *   - フォーム入力 → 送信フロー
 *   - 送信成功後のサンクス表示
 *
 * 実行方法:
 *   cd tests && npx playwright test e2e-web/example-form-submit.spec.ts
 */
import { test, expect } from '@playwright/test';

const BASE_URL = process.env.TEST_BASE_URL || 'https://agrizipang-hp.vercel.app';

test.describe('フォーム送信機能テスト', () => {
  test('必須項目が空の場合にバリデーションエラーが表示される', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Contact セクションまでスクロール
    await page.locator('section#contact').scrollIntoViewIfNeeded();

    // フォームが表示されるまで待つ（reveal アニメーション完了）
    const form = page.locator('section#contact form');
    await expect(form).toBeVisible({ timeout: 10000 });

    // フォームの送信ボタンをクリック（空の状態で）
    const submitButton = page.locator('section#contact button[type="submit"]');
    await expect(submitButton).toBeVisible({ timeout: 10000 });
    await submitButton.click();

    // バリデーションエラーメッセージが表示されること
    // 「ご担当者名・メールアドレス・ご相談内容は必須です。」or "Name, email, and inquiry details are required."
    const errorMessage = page.locator('section#contact p.text-red-700');
    await expect(errorMessage).toBeVisible({ timeout: 10000 });
    const errorText = await errorMessage.textContent();
    console.log(`✓ Validation error displayed: "${errorText}"`);
    expect(errorText).toBeTruthy();

    await page.screenshot({
      path: 'tests/e2e-web/screenshots/form-validation-error.png',
      fullPage: false,
    });
  });

  test('フォーム入力と送信フロー（API モック）', async ({ page }) => {
    // /api/contact を成功レスポンスでモック
    await page.route('**/api/contact', async (route) => {
      console.log('✓ API /api/contact intercepted');
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    });

    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Contact セクションまでスクロール
    await page.locator('section#contact').scrollIntoViewIfNeeded();

    const form = page.locator('section#contact form');
    await expect(form).toBeVisible({ timeout: 10000 });

    // フォームに値を入力
    await page.fill('#org', 'テスト株式会社');
    await page.fill('#name', 'テスト 太郎');
    await page.fill('#email', 'test@example.com');
    await page.fill('#message', 'E2Eテストからの送信テストです。');

    console.log('✓ Form fields filled');

    // 入力値の確認
    expect(await page.inputValue('#org')).toBe('テスト株式会社');
    expect(await page.inputValue('#name')).toBe('テスト 太郎');
    expect(await page.inputValue('#email')).toBe('test@example.com');
    expect(await page.inputValue('#message')).toBe('E2Eテストからの送信テストです。');

    await page.screenshot({
      path: 'tests/e2e-web/screenshots/form-filled.png',
      fullPage: false,
    });

    // 送信ボタンをクリック
    const submitButton = page.locator('section#contact button[type="submit"]');
    await submitButton.click();

    // 成功メッセージが表示されること
    // 「送信が完了しました」 or "Inquiry Submitted"
    const successMessage = page.locator('section#contact').getByText(/送信が完了しました|Inquiry Submitted/);
    await expect(successMessage).toBeVisible({ timeout: 10000 });
    console.log('✓ Success message displayed after submission');

    // リセットボタンが表示されること
    const resetButton = page.locator('section#contact').getByText(/別のお問い合わせ|Submit another/);
    await expect(resetButton).toBeVisible();
    console.log('✓ Reset button displayed');

    await page.screenshot({
      path: 'tests/e2e-web/screenshots/form-success.png',
      fullPage: false,
    });
  });

  test('API エラー時にエラーメッセージが表示される', async ({ page }) => {
    // /api/contact をエラーレスポンスでモック
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal Server Error' }),
      });
    });

    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    await page.locator('section#contact').scrollIntoViewIfNeeded();

    const form = page.locator('section#contact form');
    await expect(form).toBeVisible({ timeout: 10000 });

    // フォームに値を入力して送信
    await page.fill('#name', 'テスト');
    await page.fill('#email', 'test@example.com');
    await page.fill('#message', 'エラーテスト');

    const submitButton = page.locator('section#contact button[type="submit"]');
    await submitButton.click();

    // エラーメッセージが表示されること
    const errorMessage = page.locator('section#contact p.text-red-700');
    await expect(errorMessage).toBeVisible({ timeout: 10000 });
    const errorText = await errorMessage.textContent();
    console.log(`✓ API error message displayed: "${errorText}"`);

    await page.screenshot({
      path: 'tests/e2e-web/screenshots/form-api-error.png',
      fullPage: false,
    });
  });
});
