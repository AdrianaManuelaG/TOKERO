import { test, expect } from '@playwright/test';

test('KYC verification', async ({page}) =>{
    test.setTimeout(60000);

    await page.goto("https://tokero.dev/en/");
    await page.getByRole('button', { name: 'Accept all cookies' }).click();
    await page.locator('footer').scrollIntoViewIfNeeded();
    await page.getByRole('link', { name: 'KYC' }).click();
    await expect(page).toHaveURL(/\/policies\/kyc\/$/);

    const content = await page.locator('div.mud-container.mud-container-maxwidth-lg.mud-container--gutters.policyContainer').innerText();
    expect(content.length).toBeGreaterThan(100);



});