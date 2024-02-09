const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { putText, getText , movieTime, place, clickElement, days} = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on {string} page", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/${string}`, {
    setTimeout: 60000,
  });
});

When(
  "user choose day {string}",
   { timeout: 60000 },
    async function (string) {
  return await days(this.page, string);
});

When(
  "user choose movie {string} and movieTime {string}",
  { timeout: 60000 },
  async function (string, string2) {
    return await movieTime(this.page, string, string2);
  }
);

When(
  "user choose row {string} and place {string}",
  { timeout: 60000 },
  async function (string, string2) {
    return await place(this.page, string, string2);
  }
);

When("user click button {string}", { timeout: 60000 }, async function (string) {
  return await clickElement(this.page, string);
});

When("user search by {string}", async function (string) {
  return await putText(this.page, "input", string);
});

Then("user sees booking confirmation {string}", async function (string) {
  const actual = await getText(this.page, ".ticket__check-title");
  const expected = await string;
  expect(actual).contains(expected);
});


Then("user sees the course suggested {string}", async function (string) {
  const actual = await getText(this.page, "a[data-name]");
  const expected = await string;
  expect(actual).contains(expected);
});

Then("user sees the header {string}", async function (string) {
  const actual = await getText(this.page, "h2");
  const expected = await string;
  expect(actual).contains(expected);
});

Then(
  "user sees {string} is not clickable",
  { timeout: 60000 },
  async function (string) {
    const acceptionButton = await this.page.$eval(
      "button",
      (button) => button.disabled
    );
    await expect(acceptionButton).to.be.true;
  }
  );
