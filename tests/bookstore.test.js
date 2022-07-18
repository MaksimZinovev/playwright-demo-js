const { test, expect, chromium } = require('@playwright/test');


test.describe(`UI tests for bookstore using playwright`, () => {
  //jest.setTimeout(10000);
  let browser = null;
  let page = null;
  let context = null;
  let firstRowCells = null;

  test.beforeAll(async () => {
    
    browserInstance = await chromium.launch({ headless: false, slowMo: 300 });
    context = await browserInstance.newContext();
    page = await context.newPage();
    await page.goto("https://demoqa.com/books");
  });

  test.afterAll(async ({browser}) => {
    await browser.close();
  });

  test(`Should load page and have correct url`, async () => {
    expect(page).not.toBeNull();
    expect(await page.title()).not.toBeNull();
    expect(await page).toHaveURL("https://demoqa.com/books") ;
  });

  test(`Should be able to search for eloquent javascript`, async () => {
    await page.fill("#searchBox", "eloquent");
    // an assertion could go here
  });

  test(`Should check if book image is ok`, async () => {
    firstRowCells = await page.$$(
      ".ReactTable  .rt-tr-group:nth-child(1) .rt-td"
    );
    let imageURL = await firstRowCells[0].$("img");
    expect(await imageURL.getAttribute("src")).not.toBeNull();
  });

  test(`Should check if book title is ok`, async () => {
    expect(await firstRowCells[1].innerText()).toBe(
      "Eloquent JavaScript, Second Edition"
    );
  });
  test(`Should check if book author is ok`, async () => {
    expect(await firstRowCells[2].innerText()).toBe(
      "Marijn Haverbeke"
    );
  });
  test(`Should check if book publisher is ok`, async () => {
    expect(await firstRowCells[3].innerText()).toBe(
      "No Starch Press"
    );
  });
});
