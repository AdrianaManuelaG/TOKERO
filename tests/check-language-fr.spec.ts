import { test, expect } from '@playwright/test';


test('Testing FR language', async ({page}) => {
    await page.goto('https://tokero.dev/en/');
    await page.getByRole('button', { name: 'Accept all cookies' }).click();
    await page.getByRole('listitem').filter({ hasText: /^EN$/ }).click();
    await page.getByRole('button', { name: 'fr flag FR' }).click();
    const contactLinkFr = page.getByLabel('Topbar menu').getByRole('link', { name: 'Contacte-nous' });
    await expect(contactLinkFr).toHaveText('Contacte-nous');

});