import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  retries: 1,
  use: {
    browserName: 'chromium',
    trace: 'retain-on-failure',   
  },
});

