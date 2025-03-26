import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 1080,
    width: 1920
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.pubnub.com/');
  await page.getByText('Products').click();
  await page.getByText('Solutions').click();
});