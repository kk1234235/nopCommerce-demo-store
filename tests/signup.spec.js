import { test, expect } from '@playwright/test';

test('TC001 - Register new user (valid details)', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.click('a[href="/register?returnUrl=%2F"]');
  await page.waitForTimeout(2000);

  await page.check('#gender-male');
  await page.fill('#FirstName', 'Ali');
  await page.fill('#LastName', 'Khan');
  await page.fill('#Email', 'ali' + Date.now() + '@gmail.com'); // unique email
  await page.fill('#Password', 'irfankhan');
  await page.fill('#ConfirmPassword', 'irfankhan');
  await page.click('#register-button');

  await expect(page.locator('.result')).toHaveText('Your registration completed');
});

test('TC002 - Register with invalid email', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.click('a[href="/register?returnUrl=%2F"]');
  await page.waitForTimeout(2000);

  await page.fill('#FirstName', 'Ali');
  await page.fill('#LastName', 'Khan');
  await page.fill('#Email', 'irfankhan'); // invalid
  await page.fill('#Password', 'irfankhan');
  await page.fill('#ConfirmPassword', 'irfankhan');
  await page.click('#register-button');

  await expect(page.locator('#Email-error')).toHaveText('Wrong email');
});
