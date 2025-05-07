import { test, expect } from '@playwright/test';


test('Testing DE language', async ({page}) => {
    await page.goto('https://tokero.dev/en/');
    await page.getByRole('button', { name: 'Accept all cookies' }).click();
    await page.getByRole('listitem').filter({ hasText: /^EN$/ }).click();
    await page.getByRole('button', { name: 'de flag DE' }).click();
    const contactLinkFr = page.getByLabel('Topbar menu').getByRole('link', { name: 'Kontaktiere uns' });
    await expect(contactLinkFr).toHaveText('Kontaktiere uns');

});