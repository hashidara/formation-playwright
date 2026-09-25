import { test as setup } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

    // Vérification temporaire
  await page.waitForSelector('text=You logged into a secure area!');
  
  await page.context().storageState({ path: authFile });
});