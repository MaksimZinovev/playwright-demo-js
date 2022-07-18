const { test, expect, chromium } = require("@playwright/test");

test.describe(`UI tests for bookstore using playwright`, () => {
  // jest timeout is by default 5000ms to run tests, with this we override this value
  test.setTimeout(10000);

  let browser = null;
  let page = null;
  let context = null;
  // array to store element handles of the cells on the first row
  let firstRowCells = null;

  // runs before all tests
  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false, slowMo: 300 });
    context = await browser.newContext();
    page = await context.newPage();
    // Go to https://www`.saucedemo.com/
    await page.goto("https://www.saucedemo.com/");
  });

  // runs after all tests
  test.afterAll(async () => {
    await browser.close();
  });

  test(`Should load page`, async () => {
    // assertions
    expect(page).not.toBeNull();
    expect(await page.title()).not.toBeNull();
  });

  test(`Should sign in and shop e2e`, async () => {
    await page.locator('[data-test="username"]').click();
    // Fill [data-test="username"]
    await page.locator('[data-test="username"]').fill("standard_user");

    // Click [data-test="password"]
    await page.locator('[data-test="password"]').click();
    // Fill [data-test="password"]
    await page.locator('[data-test="password"]').fill("secret_sauce");
    // Click [data-test="login-button"]
    await page.locator('[data-test="login-button"]').click();
    console.log(await page.title());
    console.log(await page.url());
    expect(page).not.toBeNull();
    await page.waitForTimeout(3000);
    expect(await page.title()).not.toBeNull();
    // this fails for some reason. Console prints:
    // Swag Labs
    // https://www.saucedemo.com/inventory.html
    expect(await page).toHaveTitle("Swag Labs");
    expect(await page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });
});
