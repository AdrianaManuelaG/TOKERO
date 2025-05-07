import { test, expect } from '@playwright/test';

test('Privacy verification', async ({page}) =>{
    test.setTimeout(60000);

    await page.goto("https://tokero.dev/en/");
    await page.getByRole('button', { name: 'Accept all cookies' }).click();
    await page.locator('footer').scrollIntoViewIfNeeded();
    await page.getByRole('link', { name: 'Privacy' }).click();
    await expect(page).toHaveURL(/\/policies\/privacy\/$/);

    const content = await page.locator('div.mud-container.policyContainer').innerText();
    expect(content.length).toBeGreaterThan(100);

});