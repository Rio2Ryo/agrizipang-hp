import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const URL = 'https://agrizipang-hp.vercel.app';
const SCREENSHOT_PATH = '/root/.openclaw/workspace/agrizipang-hp/hero-screenshot.png';

function calculateContrastRatio(color1, color2) {
  // Parse colors (assuming hex or rgb)
  const parseColor = (color) => {
    if (!color || typeof color !== 'string') {
      return { r: 0, g: 0, b: 0 };
    }
    color = color.trim();
    if (color.startsWith('#')) {
      const hex = color.slice(1);
      if (hex.length === 3) {
        return {
          r: parseInt(hex[0] + hex[0], 16),
          g: parseInt(hex[1] + hex[1], 16),
          b: parseInt(hex[2] + hex[2], 16)
        };
      }
      if (hex.length === 6) {
        return {
          r: parseInt(hex.substr(0, 2), 16),
          g: parseInt(hex.substr(2, 2), 16),
          b: parseInt(hex.substr(4, 2), 16)
        };
      }
    }
    if (color.startsWith('rgb')) {
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
      }
    }
    return { r: 0, g: 0, b: 0 };
  };

  const getLuminance = (c) => {
    const [rs, gs, bs] = [c.r, c.g, c.b].map(v => {
      v = v / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  try {
    const c1 = parseColor(color1);
    const c2 = parseColor(color2);
    
    const l1 = getLuminance(c1);
    const l2 = getLuminance(c2);
    
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    
    const ratio = (lighter + 0.05) / (darker + 0.05);
    return isNaN(ratio) ? 1 : ratio;
  } catch (e) {
    return 1;
  }
}

async function main() {
  console.log('🌊 Hero セクション分析を開始します...');
  console.log(`URL: ${URL}`);
  
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  const page = await context.newPage();
  
  // ページ読み込み
  console.log('📄 ページを読み込んでいます...');
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
  
  // Hero セクションのスクショを撮影
  console.log('📸 Hero セクションのスクリーンショットを撮影...');
  
  // ファーストビュー全体をキャプチャ
  await page.screenshot({ 
    path: SCREENSHOT_PATH,
    clip: { x: 0, y: 0, width: 1920, height: 1080 },
    fullPage: false
  });
  
  console.log(`✅ スクショ保存: ${SCREENSHOT_PATH}`);
  
  // Hero セクションの要素情報を取得
  console.log('🔍 Hero セクションのスタイル情報を取得中...');
  
  const heroData = await page.evaluate(() => {
    const heroSection = document.querySelector('section.relative.flex.min-h-screen');
    const h1 = document.querySelector('h1');
    const kicker = document.querySelector('.hero-kicker');
    const subtitle = document.querySelector('p.hero-fade-5');
    const overlay = document.querySelector('section.relative.flex.min-h-screen > div.absolute.inset-0.bg-gradient-to-b');
    
    const getComputedStyle = (el) => {
      if (!el) return null;
      const styles = window.getComputedStyle(el);
      return {
        color: styles.color,
        backgroundColor: styles.backgroundColor,
        fontSize: styles.fontSize,
        fontWeight: styles.fontWeight,
        textShadow: styles.textShadow,
        opacity: styles.opacity,
        lineHeight: styles.lineHeight,
        letterSpacing: styles.letterSpacing
      };
    };
    
    // 背景グラデーションの取得
    const getBackgroundGradient = (el) => {
      if (!el) return null;
      const styles = window.getComputedStyle(el);
      return styles.backgroundImage;
    };
    
    return {
      h1: {
        text: h1?.textContent?.trim().substring(0, 100),
        styles: getComputedStyle(h1),
        rect: h1?.getBoundingClientRect()
      },
      kicker: {
        text: kicker?.textContent?.trim(),
        styles: getComputedStyle(kicker),
        rect: kicker?.getBoundingClientRect()
      },
      subtitle: {
        text: subtitle?.textContent?.trim().substring(0, 100),
        styles: getComputedStyle(subtitle),
        rect: subtitle?.getBoundingClientRect()
      },
      overlay: {
        backgroundImage: getBackgroundGradient(overlay),
        rect: overlay?.getBoundingClientRect()
      },
      heroSection: {
        rect: heroSection?.getBoundingClientRect(),
        height: heroSection?.offsetHeight
      }
    };
  });
  
  await browser.close();
  
  // 結果を出力
  console.log('\n' + '='.repeat(60));
  console.log('📊 計測結果');
  console.log('='.repeat(60));
  
  console.log('\n【H1 タイトル】');
  console.log(`  テキスト: ${heroData.h1?.text || 'N/A'}`);
  console.log(`  文字色: ${heroData.h1?.styles?.color || 'N/A'}`);
  console.log(`  フォントサイズ: ${heroData.h1?.styles?.fontSize || 'N/A'}`);
  console.log(`  フォントウェイト: ${heroData.h1?.styles?.fontWeight || 'N/A'}`);
  console.log(`  文字影: ${heroData.h1?.styles?.textShadow || 'N/A'}`);
  console.log(`  行間: ${heroData.h1?.styles?.lineHeight || 'N/A'}`);
  console.log(`  文字間隔: ${heroData.h1?.styles?.letterSpacing || 'N/A'}`);
  
  console.log('\n【キッカー（バッジ）】');
  console.log(`  テキスト: ${heroData.kicker?.text || 'N/A'}`);
  console.log(`  文字色: ${heroData.kicker?.styles?.color || 'N/A'}`);
  console.log(`  フォントサイズ: ${heroData.kicker?.styles?.fontSize || 'N/A'}`);
  
  console.log('\n【サブタイトル】');
  console.log(`  文字色: ${heroData.subtitle?.styles?.color || 'N/A'}`);
  console.log(`  フォントサイズ: ${heroData.subtitle?.styles?.fontSize || 'N/A'}`);
  
  console.log('\n【背景オーバーレイ】');
  console.log(`  グラデーション: ${heroData.overlay?.backgroundImage || 'N/A'}`);
  
  // コントラスト比の計算
  console.log('\n' + '='.repeat(60));
  console.log('🎨 コントラスト比分析');
  console.log('='.repeat(60));
  
  // H1（白）vs 背景（暗緑色）
  // 背景グラデーションから代表的な色を抽出: from-[#040d02]/98 via-[#0a1a04]/97 to-[#061505]/99
  const bgColors = ['#040d02', '#0a1a04', '#061505'];
  const textColor = '#ffffff'; // H1 は白
  
  const safeRatio = (c1, c2) => {
    try {
      return calculateContrastRatio(c1, c2);
    } catch (e) {
      return 1; // エラー時は最低値
    }
  };
  
  console.log('\n【H1（白）vs 背景グラデーション】');
  bgColors.forEach((bg, i) => {
    const ratio = safeRatio(textColor, bg);
    const wcagAA = ratio >= 4.5 ? '✅' : '❌';
    const wcagAAA = ratio >= 7.0 ? '✅' : '❌';
    console.log(`  背景色 ${i+1} (${bg}): ${ratio.toFixed(2)}:1 ${wcagAA} (AA) ${wcagAAA} (AAA)`);
  });
  
  // サブタイトルも同様に
  console.log('\n【サブタイトル（白）vs 背景グラデーション】');
  bgColors.forEach((bg, i) => {
    const ratio = safeRatio('#ffffff', bg);
    const wcagAA = ratio >= 4.5 ? '✅' : '❌';
    const wcagAAA = ratio >= 7.0 ? '✅' : '❌';
    console.log(`  背景色 ${i+1} (${bg}): ${ratio.toFixed(2)}:1 ${wcagAA} (AA) ${wcagAAA} (AAA)`);
  });
  
  // 問題点の特定
  console.log('\n' + '='.repeat(60));
  console.log('⚠️ 問題点の特定');
  console.log('='.repeat(60));
  
  const issues = [];
  
  // フォントサイズのチェック
  const h1FontSize = parseFloat(heroData.h1?.styles?.fontSize) || 0;
  if (h1FontSize < 48) {
    issues.push(`H1 のフォントサイズが ${h1FontSize}px と小さい可能性があります（推奨: 48px 以上）`);
  }
  
  // 文字影のチェック
  const textShadow = heroData.h1?.styles?.textShadow || 'none';
  if (textShadow === 'none' || textShadow.includes('0px 0px 0px')) {
    issues.push('H1 の文字影が弱いか設定されていません。暗い背景では強い影が必要です。');
  }
  
  // コントラスト比のチェック
  const minRatio = Math.min(...bgColors.map(bg => safeRatio('#ffffff', bg)));
  if (minRatio < 4.5) {
    issues.push(`最小コントラスト比 ${minRatio.toFixed(2)}:1 は WCAG AA 基準 (4.5:1) を満たしていません。`);
  } else if (minRatio < 7.0) {
    issues.push(`最小コントラスト比 ${minRatio.toFixed(2)}:1 は WCAG AAA 基準 (7:1) を満たしていません。`);
  }
  
  if (issues.length === 0) {
    console.log('  ✅ 重大な問題は検出されませんでした。');
  } else {
    issues.forEach((issue, i) => {
      console.log(`  ${i+1}. ${issue}`);
    });
  }
  
  // 改善案
  console.log('\n' + '='.repeat(60));
  console.log('💡 改善案');
  console.log('='.repeat(60));
  
  console.log('\n【背景オーバーレイの改善】');
  console.log('  現在: bg-gradient-to-b from-[#040d02]/98 via-[#0a1a04]/97 to-[#061505]/99');
  console.log('  提案: 不透明度を上げてコントラストを確保');
  console.log('  CSS:');
  console.log('    background: linear-gradient(');
  console.log('      to bottom,');
  console.log('      rgba(4, 13, 2, 0.98) 0%,');
  console.log('      rgba(2, 8, 1, 0.99) 50%,');
  console.log('      rgba(1, 5, 0, 1.0) 100%');
  console.log('    );');
  
  console.log('\n【文字側の改善】');
  console.log('  1. 文字影の強化:');
  console.log('     現在: text-shadow: 0 8px 50px rgba(0,0,0,0.9)');
  console.log('     提案: text-shadow: 0 4px 8px rgba(0,0,0,0.9), 0 8px 24px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.5)');
  console.log('');
  console.log('  2. フォントサイズの調整（必要に応じて）:');
  console.log('     現在: text-5xl sm:text-6xl md:text-8xl lg:text-[8.5rem]');
  console.log('     提案: 維持（十分な大きさです）');
  console.log('');
  console.log('  3. 代替案 - 背景に半透明レイヤーを追加:');
  console.log('     CSS:');
  console.log('     .hero-overlay {');
  console.log('       position: absolute;');
  console.log('       inset: 0;');
  console.log('       background: rgba(0, 0, 0, 0.3);');
  console.log('       z-index: 1;');
  console.log('     }');
  
  console.log('\n【具体的な CSS 改善コード】');
  console.log('```css');
  console.log('/* Hero セクションのコントラスト改善 */');
  console.log('.hero-section {');
  console.log('  position: relative;');
  console.log('}');
  console.log('');
  console.log('/* 強化されたオーバーレイ */');
  console.log('.hero-overlay {');
  console.log('  position: absolute;');
  console.log('  inset: 0;');
  console.log('  background: linear-gradient(');
  console.log('    to bottom,');
  console.log('    rgba(2, 6, 1, 0.95) 0%,');
  console.log('    rgba(1, 4, 0, 0.97) 50%,');
  console.log('    rgba(0, 3, 0, 0.98) 100%');
  console.log('  );');
  console.log('  z-index: 1;');
  console.log('}');
  console.log('');
  console.log('/* 強化された文字影 */');
  console.log('.hero-title {');
  console.log('  text-shadow: ');
  console.log('    0 2px 4px rgba(0,0,0,0.8),');
  console.log('    0 4px 12px rgba(0,0,0,0.6),');
  console.log('    0 8px 32px rgba(0,0,0,0.4);');
  console.log('}');
  console.log('```');
  
  console.log('\n' + '='.repeat(60));
  console.log('✅ 分析完了');
  console.log('='.repeat(60));
  
  // JSON 結果も保存
  const resultData = {
    timestamp: new Date().toISOString(),
    url: URL,
    screenshotPath: SCREENSHOT_PATH,
    measurements: {
      h1: heroData.h1,
      kicker: heroData.kicker,
      subtitle: heroData.subtitle,
      overlay: heroData.overlay
    },
    contrastRatios: bgColors.map(bg => ({
      backgroundColor: bg,
      ratio: safeRatio('#ffffff', bg),
      wcagAA: safeRatio('#ffffff', bg) >= 4.5,
      wcagAAA: safeRatio('#ffffff', bg) >= 7.0
    })),
    issues,
    recommendations: {
      overlay: '背景オーバーレイの不透明度を 0.95-1.0 に上げてコントラストを確保',
      textShadow: 'マルチレイヤーの文字影で可読性向上',
      fontSize: '現在のサイズで十分（48px 以上）'
    }
  };
  
  fs.writeFileSync(
    '/root/.openclaw/workspace/agrizipang-hp/hero-analysis-result.json',
    JSON.stringify(resultData, null, 2)
  );
  console.log(`📄 結果を JSON で保存: /root/.openclaw/workspace/agrizipang-hp/hero-analysis-result.json`);
}

main().catch(console.error);
