import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 1080,
    width: 1920
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.pubnub.com/');
  await page.getByRole('link', { name: 'Pricing' }).first().click();
  await page.goto('https://www.pubnub.com/pricing/');
  await page.locator('section:nth-child(3) > .bottom-0').click();
  await page.goto('https://admin.pubnub.com/register');
});