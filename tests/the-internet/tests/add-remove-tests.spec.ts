import { test, Page, expect } from '@playwright/test';
import { AddRemovePage } from '../pages/add-remove-page';
import { addRemoveUrl } from '../config/config';

test.beforeEach(async ({ page }) => {
    await page.goto(addRemoveUrl);
});

test('Add element', async ({ page }) => {
    const addRemovePage = new AddRemovePage(page);
    await addRemovePage.addOneElement();
    await expect(page.locator('button:has-text("Delete")')).toBeVisible();
});

test('Remove element', async ({ page }) => {
    const addRemovePage = new AddRemovePage(page);
    await addRemovePage.addOneElement();
    await addRemovePage.deleteOneElement();
    await expect(page.locator('button:has-text("Delete")')).toBeHidden();
});

test('Add three elements', async ({ page }) => {
    const addRemovePage = new AddRemovePage(page);
    await addRemovePage.addThreeElements();
    await expect(page.locator('button:has-text("Delete")')).toHaveCount(3);
});

test('Add three elements and delete one', async ({ page }) => {
    const addRemovePage = new AddRemovePage(page);
    await addRemovePage.addThreeElements();
    await addRemovePage.deleteOneElement();
    await expect(page.locator('button:has-text("Delete")')).toHaveCount(2);
});
