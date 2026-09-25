import { test, expect } from '@playwright/test';

test('counter increments on click', async ({ page }) => {
  await page.goto('/');

  const button = page.locator('[data-test="counter-btn"]');
  await expect(button).toHaveText('Cliques : 0');

  await button.click();
  await expect(button).toHaveText('Cliques : 5');
});