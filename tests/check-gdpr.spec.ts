import { test, expect } from '@playwright/test';

test('GDPR verification', async ({page}) =>{
    test.setTimeout(60000);

    await page.goto("https://tokero.dev/en/");
    await page.getByRole('button', { name: 'Accept all cookies' }).click();
    await page.locator('footer').scrollIntoViewIfNeeded();
    await page.getByRole('link', { name: 'GDPR' }).click();
    await expect(page).toHaveURL(/\/policies\/gdpr\/$/);

    const content = await page.locator('div.policyContainer').innerText();
    expect(content.length).toBeGreaterThan(100)



});