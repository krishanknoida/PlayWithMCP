# GreenKart Web App Test Plan

## Application Overview

GreenKart is an online store for vegetables and fruits. Users can browse products, search, add items to cart, view deals, and complete a checkout process. The app includes cart management, promo code entry, and order placement with country and terms selection.

## Test Scenarios

### 1. Product Browsing and Search

**Seed:** `tests/seed.spec.ts`

#### 1.1. Browse all products and verify display

**File:** `tests/browse.spec.ts`

**Steps:**
  1. Navigate to the home page
  2. Verify that all products are displayed with name, image, price, and quantity selector

**Expected Results:**
  - All products are visible with correct details

#### 1.2. Search for a product

**File:** `tests/search.spec.ts`

**Steps:**
  1. Enter a product name in the search box
  2. Verify that only matching products are displayed

**Expected Results:**
  - Search results update to show only relevant products

#### 1.3. Search with no results

**File:** `tests/search-no-results.spec.ts`

**Steps:**
  1. Enter a non-existent product name in the search box
  2. Verify that no products are displayed

**Expected Results:**
  - No products are shown and the UI indicates no results

### 2. Cart Management

**Seed:** `tests/seed.spec.ts`

#### 2.1. Add product to cart

**File:** `tests/add-to-cart.spec.ts`

**Steps:**
  1. Click 'ADD TO CART' on a product
  2. Verify cart item count and price update

**Expected Results:**
  - Cart shows correct item count and price

#### 2.2. Increase and decrease product quantity

**File:** `tests/quantity.spec.ts`

**Steps:**
  1. Click '+' to increase quantity, then '-' to decrease
  2. Verify the quantity updates accordingly

**Expected Results:**
  - Quantity changes as expected, price updates

#### 2.3. Remove product from cart

**File:** `tests/remove-from-cart.spec.ts`

**Steps:**
  1. Add a product to cart
  2. Navigate to cart
  3. Set quantity to zero or remove item
  4. Verify cart is empty

**Expected Results:**
  - Cart is empty and UI reflects this

### 3. Checkout and Order Placement

**Seed:** `tests/seed.spec.ts`

#### 3.1. Checkout with empty cart

**File:** `tests/checkout-empty.spec.ts`

**Steps:**
  1. Navigate to cart with no items
  2. Click 'PROCEED TO CHECKOUT' and 'Place Order'
  3. Verify checkout is blocked or handled

**Expected Results:**
  - User cannot place an order with an empty cart

#### 3.2. Checkout with items in cart

**File:** `tests/checkout.spec.ts`

**Steps:**
  1. Add product(s) to cart
  2. Proceed to checkout
  3. Enter promo code (optional)
  4. Place order
  5. Select country and agree to terms
  6. Complete order

**Expected Results:**
  - Order is placed successfully and confirmation is shown

#### 3.3. Attempt checkout without agreeing to terms

**File:** `tests/checkout-terms.spec.ts`

**Steps:**
  1. Add product(s) to cart
  2. Proceed to checkout
  3. Select country but do not check terms
  4. Click 'Proceed'
  5. Verify error message is shown

**Expected Results:**
  - User is prompted to accept terms before proceeding

#### 3.4. Attempt checkout without selecting country

**File:** `tests/checkout-country.spec.ts`

**Steps:**
  1. Add product(s) to cart
  2. Proceed to checkout
  3. Agree to terms but do not select country
  4. Click 'Proceed'
  5. Verify error or validation

**Expected Results:**
  - User is prompted to select a country
