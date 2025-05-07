import { test, expect } from '@playwright/test';


test('Testing RO language', async ({page}) => {
    await page.goto('https://tokero.dev/en/');
    await page.getByRole('button', { name: 'Accept all cookies' }).click();
    await page.getByRole('listitem').filter({ hasText: /^EN$/ }).click();
    await page.getByRole('button', { name: 'ro flag RO' }).click();
    const contactLinkRo = page.getByLabel('Topbar menu').getByRole('link', { name: 'Contactează-ne' });
    await expect(contactLinkRo).toHaveText('Contactează-ne');

});
      
