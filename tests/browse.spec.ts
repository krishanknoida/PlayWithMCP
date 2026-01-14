import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test.describe('Product Browsing and Search', () => {
  test('Browse all products and verify display', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    const products = await home.getProductDetails();
    expect(products.length).toBeGreaterThan(0);
    for (const product of products) {
      expect(product.name).toBeTruthy();
      expect(product.image).toBeTruthy();
      expect(Number(product.price)).toBeGreaterThan(0);
      expect(Number(product.quantity)).toBeGreaterThan(0);
    }
  });
});
