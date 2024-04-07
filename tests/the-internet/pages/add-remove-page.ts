import { Page, Locator } from "@playwright/test";

export class AddRemovePage {
    private page: Page;
    private addButtonLocator: Locator;
    private deleteButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addButtonLocator = this.page.locator('button:has-text("Add Element")');
        this.deleteButtonLocator = this.page.locator('button:has-text("Delete")').first();
    }

    async addOneElement(): Promise<void> {
        await this.addButtonLocator.click();
    }

    async deleteOneElement(): Promise<void> {
        await this.deleteButtonLocator.click();
    }

    async addThreeElements(): Promise<void> {
        for (let i = 0; i < 3; i++) {
            await this.addButtonLocator.click();
        }
    }
}