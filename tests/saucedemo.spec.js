import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

test('test accès au site', async ({ page }) => {

    await expect(page.getByText('Swag Labs')).toBeVisible();

});

test('login OK', async ({ page }) => {

    await expect(page.getByText('Swag Labs')).toBeVisible();

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.getByText('Products')).toBeVisible();

});

test('login KO', async ({ page }) => {

    await expect(page.getByText('Swag Labs')).toBeVisible();

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret-sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();

});

test('add item to cart', async ({ page }) => {

    await expect(page.getByText('Swag Labs')).toBeVisible();

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.getByText('Products')).toBeVisible();

    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    await expect(page.locator('[data-test="remove-sauce-labs-bike-light"]')).toBeVisible();

});

test('add item to cart + check basket', async ({ page }) => {

    await expect(page.getByText('Swag Labs')).toBeVisible();

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.getByText('Products')).toBeVisible();

    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    await expect(page.locator('[data-test="remove-sauce-labs-bike-light"]')).toBeVisible();

    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL(/cart\.html/);
    await expect(page.locator('.cart_list [data-test="inventory-item-name"]')).toHaveText('Sauce Labs Bike Light');

});