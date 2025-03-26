import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 1080,
    width: 1920
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.pubnub.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.goto('https://admin.pubnub.com/login');
});