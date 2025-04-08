import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 1080,
    width: 1920
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  await page.getByTestId('structured-search-input-field-query').click();
  await page.getByTestId('structured-search-input-field-query').fill('Austin');
  await page.getByTestId('structured-search-input-field-split-dates-0').click();
});