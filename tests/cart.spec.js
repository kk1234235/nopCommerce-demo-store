import { test, expect } from '@playwright/test';

test('TC006 - Add Apple MacBook to cart', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.fill('#small-searchterms', 'Apple MacBook');
  await page.click('button[type="submit"]');
  await page.click('a:has-text("Apple MacBook Pro 13-inch")');
  await page.click('#add-to-cart-button-4');
  await page.waitForTimeout(3000);
  await expect(page.locator('.content')).toContainText('The product has been added to your shopping cart');
});

test('TC007 - Remove product from cart', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/cart');
  await page.waitForTimeout(3000);
  await page.check('input[name="removefromcart"]');
  await page.click('button[name="updatecart"]');
  await expect(page.locator('.order-summary-content')).toContainText('Your Shopping Cart is empty!');
});
