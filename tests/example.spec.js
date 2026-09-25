import { test, expect } from './fixtures';

test('login with valid credentials', async ({ page, loginPage }) => {
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});

test('login with invalid password shows error', async ({ page, loginPage }) => {
  await loginPage.login('tomsmith', 'MauvaisMotDePasse');

  await expect(page.getByText('Your password is invalid!')).toBeVisible();
});