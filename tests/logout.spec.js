import { test, expect } from '@playwright/test';

test('TC009 - Logout functionality', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.click('a[href="/login?returnUrl=%2F"]');
  await page.fill('#Email', 'muhammadirfanicp2023@gmail.com');
  await page.fill('#Password', 'irfankhan');
  await page.click('button[class*="login-button"]');
  await page.waitForTimeout(5000);
  await page.click('a[class="ico-logout"]');
  await expect(page.locator('a[class="ico-login"]')).toBeVisible();
});
