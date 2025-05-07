import { test, expect } from '@playwright/test';

test('Policies list verification', async ({page}) =>{
    test.setTimeout(60000);

    await page.goto("https://tokero.dev/en/");
    await page.getByRole('button', { name: 'Accept all cookies' }).click();
    await page.locator('footer').scrollIntoViewIfNeeded();
    await page.getByRole('link', { name: 'Policies list' }).click();
    await expect(page).toHaveURL(/.*policies/);

    const policyLinks = await page.locator('a[href*="/policies/"]').all();

    for (const link of policyLinks) {
        const href = await link.getAttribute('href');
        if (href) {
          const policyUrl = new URL(href, page.url()).toString();
          const response = await page.goto(policyUrl);
          expect(response?.status()).toBe(200);

          const title = await page.title();
          expect(title.length).toBeGreaterThan(0);

   }
  }
});