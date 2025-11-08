import { test, expect } from '@playwright/test';

test('TC005 - Search for Laptop', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.fill('#small-searchterms', 'Laptop');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(3000);
  await expect(page.locator('.product-item')).toBeVisible();
});
