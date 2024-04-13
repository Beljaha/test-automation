import { Page, Locator } from "@playwright/test";

export class LoginPage {
    private page: Page;
    private usernameFieldLocator: Locator;
    private passwordFieldLocator: Locator;
    private loginButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameFieldLocator = this.page.locator('#username');
        this.passwordFieldLocator = this.page.locator('#password');
        this.loginButtonLocator = this.page.locator('#login');
    }

    async fillUsername(username: string): Promise<void> {
        await this.usernameFieldLocator.fill(username);
    }

    async fillPassword(password: string): Promise<void> {
        await this.passwordFieldLocator.fill(password);
    }

    async clickLogin(): Promise<void> {
        await this.loginButtonLocator.click();
    }
}