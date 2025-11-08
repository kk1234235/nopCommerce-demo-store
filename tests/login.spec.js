import { test, expect } from '@playwright/test';

test('TC003 - Login with valid credentials', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.click('a[href="/login?returnUrl=%2F"]');
  await page.fill('#Email', 'muhammadirfanicp2023@gmail.com');
  await page.fill('#Password', 'irfan@123');
  await page.click('button[class*="login-button"]');
  await page.waitForTimeout(6000);
  await expect(page.locator('a[class="ico-account"]')).toBeVisible();
});


