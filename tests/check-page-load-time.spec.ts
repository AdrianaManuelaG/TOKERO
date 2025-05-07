import { test } from '@playwright/test';

test('Performance - Page load time', async ({ page }) => {
  const start = Date.now();
  await page.goto('https://tokero.dev/en/', { waitUntil: 'load' });
  const end = Date.now();
  const loadTime = end - start;
  console.log(`Page loaded in ${loadTime} ms`);

  if (loadTime > 4000) {
    throw new Error(`Page load too slow: ${loadTime} ms`);
  }
});