import { test, expect } from '@playwright/test';

test('Terms and conditions verification', async ({page}) => {
    test.setTimeout(60000);
    await page.goto("https://tokero.dev/en/");
    await page.getByRole('button', { name: 'Accept all cookies' }).click();
    await page.locator('footer').scrollIntoViewIfNeeded();
    await page.getByRole('link', { name: 'Terms and conditions' }).click();
    await expect(page).toHaveURL(/\/policies\/terms-of-service\/$/);

    const content = await page.locator('div.policyContainer').innerText();
    expect(content.length).toBeGreaterThan(100);
})