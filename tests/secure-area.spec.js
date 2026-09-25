import { test, expect } from '@playwright/test';

test('already logged in via storageState', async ({ page }) => {
  test.skip(browserName !== 'chromium', 'Session liée au User-Agent sur ce site, setup fait avec UA Chrome uniquement');
  
  await page.goto('https://the-internet.herokuapp.com/secure');
  await expect(page.locator('a[href="/logout"]')).toBeVisible();
});