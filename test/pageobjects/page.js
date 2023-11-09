const { browser } = require("@wdio/globals");

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open() {
    return browser.url('/');
  }  
  async waitForDisplayed(el) {
   await el.waitForDisplayed({ timeout: 10000 })
  }
  async waitForExist(el){
  await el.waitForExist({ timeout: 10000 });
  }
  async waitForText(el, text){
  await browser.waitUntil(async function () {
    return (await el.getText()) === `${text}`}, {timeout: 10000})
  }
  async waitForSelected(el){
    await browser.waitUntil(async function () {
      return (await el.isSelected()) === true}, {timeout: 10000})
  }
};
