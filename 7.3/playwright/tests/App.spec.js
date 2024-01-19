
const { test, expect } = require( '@playwright/test');
const { email, password }= require('../user');


test("Valid test", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
    test.setTimeout(120000);
    // Click [placeholder="Email"]
    await page.click('[placeholder="Email"]');
    // Fill [placeholder="Email"]
    await page.fill('[placeholder="Email"]', email);
    // Click [placeholder="Пароль"]
    await page.click('[placeholder="Пароль"]');
    // Fill [placeholder="Пароль"]
    await page.fill('[placeholder="Пароль"]', password);
    await page.locator('[data-testid="login-submit-btn"]').click();
    await expect(page).toHaveURL("https://netology.ru/profile/6936470");
});

test("Failed test", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto("https://netology.ru/?modal=sign_in");
  
  await page.click('[placeholder="Email"]');
  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', 'testtes@mail.ru');
  // Click [placeholder="Пароль"]
  await page.click('[placeholder="Пароль"]');
  // Fill [placeholder="Пароль"]
  await page.fill('[placeholder="Пароль"]', 'testetste');
  // Click [data-testid="login-submit-btn"]
  await page.click('[data-testid="login-submit-btn"]');

  await expect(page.locator('[data-testid=login-error-hint]')).toHaveText('Вы ввели неправильно логин или пароль');

});
