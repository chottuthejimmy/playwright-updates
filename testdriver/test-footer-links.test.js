import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 1080,
    width: 1920
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.pubnub.com/');
  await page.getByRole('link', { name: 'More information about your' }).press('ControlOrMeta+f');
  await page.getByRole('link', { name: 'More information about your' }).press('Escape');
  await page.getByRole('link', { name: 'More information about your' }).press('PageDown');
  await page.getByRole('link', { name: 'More information about your' }).press('PageDown');
  await page.getByRole('link', { name: 'More information about your' }).press('PageDown');
  await page.getByRole('link', { name: 'More information about your' }).press('PageDown');
  await page.getByRole('link', { name: 'More information about your' }).press('PageDown');
});