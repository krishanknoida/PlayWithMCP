import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test.describe('Product Browsing and Search', () => {
  test('Search with no results', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.searchFor('NonExistentProduct');
    const names = await home.getVisibleProductNames();
    expect(names.length).toBe(0);
  });
});
