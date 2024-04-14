import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { loginUrl, userName, correctPassword, wrongPassword } from '../config/config';

test.beforeEach(async ({ page }) => {
    await page.goto(loginUrl);
});

test('Unsuccessful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillUsername(userName);
    await loginPage.fillPassword(wrongPassword);
    await loginPage.clickLogin();
    await expect(page).toHaveURL(/adminlogin\.html$/);
    await expect(page.locator('h2.loginmessage')).toHaveText('Login Details Incorrect');
});


