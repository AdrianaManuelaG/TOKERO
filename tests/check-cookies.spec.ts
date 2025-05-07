import { test, expect } from '@playwright/test';

test('Cookies verification', async ({page}) =>{
    test.setTimeout(60000);

    await page.goto("https://tokero.dev/en/");
    await page.getByRole('button', { name: 'Accept all cookies' }).click();
    await page.locator('footer').scrollIntoViewIfNeeded();
    await page.getByRole('link', { name: 'Cookies' }).click();
    await expect(page).toHaveURL(/\/policies\/cookies\/$/);
});