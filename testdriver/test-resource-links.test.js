import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 1080,
    width: 1920
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.pubnub.com/');
  await page.locator('span').filter({ hasText: 'Resources' }).click();
  await page.getByRole('link', { name: 'Blog' }).first().click();
  await page.locator('span').filter({ hasText: 'Resources' }).click();
  await page.getByRole('link', { name: 'Demos' }).click();
  await page.locator('span').filter({ hasText: 'Resources' }).click();
  await page.getByRole('link', { name: 'Solution Briefs' }).click();
  await page.locator('span').filter({ hasText: 'Resources' }).click();
  await page.getByRole('link', { name: 'Customers' }).first().click();
  await page.locator('span').filter({ hasText: 'Resources' }).click();
  await page.getByRole('link', { name: 'eBooks' }).first().click();
  await page.locator('span').filter({ hasText: 'Resources' }).click();
  await page.getByRole('link', { name: 'Careers' }).first().click();
  await page.getByRole('navigation').getByText('Resources').click();
  await page.getByRole('link', { name: 'About Us' }).click();
});