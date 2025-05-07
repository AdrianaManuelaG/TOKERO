import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://tokero.dev/en/');
  await expect(page).toHaveTitle(/TOKERO/);
});


