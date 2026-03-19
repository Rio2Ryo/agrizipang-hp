import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e-web',
  outputDir: './e2e-web/test-results',
  timeout: 30_000,
  retries: 2,
  use: {
    baseURL: process.env.TEST_BASE_URL || 'https://agrizipang-hp.vercel.app',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: './e2e-web/report' }],
  ],
});
