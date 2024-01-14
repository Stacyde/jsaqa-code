
const { test, expect } = require( '@playwright/test');
const user = require('../user.js');



test("Valid test", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  
    // Click [placeholder="Email"]
    await page.click('[placeholder="Email"]');
    // Fill [placeholder="Email"]
    await page.fill('[placeholder="Email"]', mail);
    // Click [placeholder="Пароль"]
    await page.click('[placeholder="Пароль"]');
    // Fill [placeholder="Пароль"]
    await page.fill('[placeholder="Пароль"]', password);
    // Click [data-testid="login-submit-btn"]
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://netology.ru/profile/' }*/),
      page.click('[data-testid="login-submit-btn"]')
    ]);
    
  await expect(page).toHaveURL("https://netology.ru/profile");
  await browser.close();
});

test("Failed test", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto("https://netology.ru/?modal=sign_in");
  
  await page.click('[placeholder="Email"]');
  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', 'testtest@mail.ru');
  // Click [placeholder="Пароль"]
  await page.click('[placeholder="Пароль"]');
  // Fill [placeholder="Пароль"]
  await page.fill('[placeholder="Пароль"]', 'testetste');
  // Click [data-testid="login-submit-btn"]
  await page.click('[data-testid="login-submit-btn"]');

  await expect(page.fill("data-testid=login-error-hint")).toHaveText('Вы ввели неправильно логин или пароль');
  await browser.close();
});
