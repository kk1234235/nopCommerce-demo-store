import { test, expect } from '@playwright/test';

test('TC008 - Proceed to checkout as guest', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.fill('#small-searchterms', 'Laptop');
  await page.click('button[type="submit"]');
  await page.click('a:has-text("Apple MacBook Pro 13-inch")');
  await page.click('#add-to-cart-button-4');
  await page.waitForTimeout(2000);
  await page.goto('https://demo.nopcommerce.com/cart');
  await page.click('#checkout');
  await page.click('button:has-text("Checkout as Guest")');
  await expect(page.locator('h1')).toHaveText('Checkout');
});
