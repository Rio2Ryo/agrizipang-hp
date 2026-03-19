/**
 * アグリ・ジパング HP E2E テスト: アクセシビリティ
 *
 * テスト項目:
 *   - alt 属性の存在確認
 *   - キーボードナビゲーション（Tab キーフォーカス移動）
 *   - ARIA 属性の検証
 *
 * 実行方法:
 *   cd tests && npx playwright test e2e-web/example-accessibility.spec.ts
 */
import { test, expect } from '@playwright/test';

const BASE_URL = process.env.TEST_BASE_URL || 'https://agrizipang-hp.vercel.app';

test.describe('アクセシビリティテスト', () => {
  test('すべての img 要素に alt 属性が設定されている', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // すべての img 要素を取得
    const images = page.locator('img');
    const imageCount = await images.count();
    console.log(`Found ${imageCount} img elements`);
    expect(imageCount).toBeGreaterThan(0);

    // 各画像に alt 属性が存在するか確認
    const missingAlt: string[] = [];
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      const src = await img.getAttribute('src') || await img.getAttribute('srcset') || `img[${i}]`;
      if (alt === null || alt === undefined) {
        missingAlt.push(src);
      }
    }

    if (missingAlt.length > 0) {
      console.log(`Images missing alt: ${missingAlt.join(', ')}`);
    }
    console.log(`✓ ${imageCount - missingAlt.length}/${imageCount} images have alt attributes`);

    // alt 属性がないものが 0 であること
    expect(missingAlt.length).toBe(0);

    await page.screenshot({
      path: 'tests/e2e-web/screenshots/accessibility-alt.png',
      fullPage: true,
    });
  });

  test('キーボードナビゲーション（Tab キーフォーカス移動）が機能する', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Tab キーでフォーカスを移動し、フォーカス可能な要素が存在することを確認
    const focusedElements: string[] = [];

    for (let i = 0; i < 15; i++) {
      await page.keyboard.press('Tab');
      const focused = await page.evaluate(() => {
        const el = document.activeElement;
        if (!el || el === document.body) return null;
        const tag = el.tagName.toLowerCase();
        const href = el.getAttribute('href') || '';
        const text = el.textContent?.trim().substring(0, 30) || '';
        return `${tag}[${href || text}]`;
      });
      if (focused) {
        focusedElements.push(focused);
      }
    }

    console.log(`Tab focus sequence (${focusedElements.length} elements):`);
    focusedElements.forEach((el, i) => console.log(`  Tab ${i + 1}: ${el}`));

    // フォーカス可能な要素が複数あること
    expect(focusedElements.length).toBeGreaterThanOrEqual(3);

    // ナビゲーションリンクにフォーカスが当たること
    const hasNavFocus = focusedElements.some(
      (el) => el.includes('#about') || el.includes('#business') || el.includes('#contact')
    );
    console.log(`✓ Navigation links are keyboard focusable: ${hasNavFocus}`);
    expect(hasNavFocus).toBe(true);

    await page.screenshot({
      path: 'tests/e2e-web/screenshots/accessibility-keyboard.png',
      fullPage: true,
    });
  });

  test('ARIA 属性が適切に設定されている', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // 言語切替ボタンに aria-label が設定されていること
    const langButton = page.locator('button[aria-label="Switch language"]');
    const langButtonCount = await langButton.count();
    console.log(`✓ Language toggle buttons with aria-label: ${langButtonCount}`);
    expect(langButtonCount).toBeGreaterThan(0);

    // モバイルメニューボタンに aria-label と aria-expanded が設定されていること
    const menuButton = page.locator('button[aria-label="メニューを開く"]');
    await expect(menuButton).toHaveCount(1);
    const ariaExpanded = await menuButton.getAttribute('aria-expanded');
    console.log(`✓ Menu button aria-expanded: ${ariaExpanded}`);
    expect(ariaExpanded).toBeTruthy();

    // フォームの label 要素が for/id で紐づいていること
    const formLabels = page.locator('section#contact label[for]');
    const labelCount = await formLabels.count();
    console.log(`✓ Form labels with 'for' attribute: ${labelCount}`);
    expect(labelCount).toBeGreaterThanOrEqual(3);

    // 各 label の for が対応する input/textarea の id と一致すること
    for (let i = 0; i < labelCount; i++) {
      const label = formLabels.nth(i);
      const forAttr = await label.getAttribute('for');
      if (forAttr) {
        const linkedInput = page.locator(`#${forAttr}`);
        const inputCount = await linkedInput.count();
        console.log(`  label[for="${forAttr}"] → input exists: ${inputCount > 0}`);
        expect(inputCount).toBe(1);
      }
    }

    // 外部リンクに rel="noopener noreferrer" が設定されていること
    const externalLinks = page.locator('a[target="_blank"]');
    const extCount = await externalLinks.count();
    for (let i = 0; i < extCount; i++) {
      const rel = await externalLinks.nth(i).getAttribute('rel');
      console.log(`✓ External link rel: ${rel}`);
      expect(rel).toContain('noopener');
    }

    await page.screenshot({
      path: 'tests/e2e-web/screenshots/accessibility-aria.png',
      fullPage: true,
    });
  });
});
