import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly productCards: Locator;
  readonly searchBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCards = page.locator('.products-wrapper .product');
    this.searchBox = page.getByPlaceholder('Search for Vegetables and Fruits');
  }

  async goto() {
    await this.page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  }

  async getProductDetails() {
    const count = await this.productCards.count();
    const products = [];
    for (let i = 0; i < count; i++) {
      const card = this.productCards.nth(i);
      products.push({
        name: await card.locator('h4').textContent(),
        image: await card.locator('img').getAttribute('src'),
        price: await card.locator('p').textContent(),
        quantity: await card.locator('input[type="number"]').inputValue(),
      });
    }
    return products;
  }

  async searchFor(text: string) {
    await this.searchBox.fill(text);
  }

  async getVisibleProductNames() {
    const count = await this.productCards.count();
    const names = [];
    for (let i = 0; i < count; i++) {
      const card = this.productCards.nth(i);
      if (await card.isVisible()) {
        names.push(await card.locator('h4').textContent());
      }
    }
    return names;
  }
}
