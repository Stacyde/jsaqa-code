const { clickElement, putText, getText, days, movieTime, place } = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(60000);
});

afterEach(() => {
  page.close();
});

describe("Cinema test", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  
  test("The first test", async () => {
    const movieSelector = ".movie__title";
    await page.waitForSelector(movieSelector, {
      visible: true,
    });
    const actual = await page.$eval(movieSelector, link => link.textContent);
    expect(actual).toContain("Зверополис")
  }, 6000);
    

test("Buying one movie ticket", async () => {
    await days(page, "3");
    await movieTime(page, "1", "2");
    await page.waitForSelector("h1");
    await place(page, "6", "5");
    await clickElement(page, "button");
    await page.waitForSelector("h1");
    const actual = await getText(page, "h2");
    expect(actual).toContain("Вы выбрали билеты:");
  }, 60000);

  test("Purchase of three movie tickets", async () => {
    await days(page, "3");
    await movieTime(page, "2", "2");
    await page.waitForSelector("h1");
    await place(page, "8", "7");
    await place(page, "8", "8");
    await place(page, "8", "9");
    await clickElement(page, "button");
    await page.waitForSelector("h1");
    await clickElement(page, "button");
    const actual = await getText(page, "h2");
    expect(actual).toContain("Электронный билет");
  }, 60000);

  test("The button is blocked", async () => {
    await days(page, "3");
    await movieTime(page, "2", "2");
    await page.waitForSelector("h1");
    await place(page, "8", "8");
    await clickElement(page, "button");
    const bookingButton = await page.$eval(
      "button",
      (button) => button.disabled
    );
    expect(bookingButton).toBe(true);
    }, 60000);
});

