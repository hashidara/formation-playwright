import { test, expect } from '@playwright/test';

test('already logged in via storageState', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/secure');

  await expect(page.locator('a[href="/logout"]')).toBeVisible();
});