import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test.describe('Product Browsing and Search', () => {
  test('Search for a product', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.searchFor('Tomato');
    const names = await home.getVisibleProductNames();
    expect(names.length).toBeGreaterThan(0);
    // At least one visible product should match the search
    expect(names.some(name => name?.toLowerCase().includes('tomato'))).toBeTruthy();
  });
});
