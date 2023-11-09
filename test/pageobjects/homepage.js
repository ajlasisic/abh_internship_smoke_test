const { $ } = require("@wdio/globals");
const Page = require("./Page");

class HomePage extends Page {
  get inputSearch() {
    return $("#search");
  }
  get searchIcon() {
    return $('#search_mini_form > div.actions > button')
  }
  get shoppingCart() {
    return $(".minicart-wrapper > a");
  }
  get numOfItemsInCart() {
    return $('.minicart-wrapper > a > .counter.qty > .counter-number')
  }
  get btnProceedToCheckout() {
    return $("#top-cart-btn-checkout");
  }
  get createAccountLink() {
    return $('//*[text()="Create an Account"]')
  }
  get signInLink() {
    return $("body > div.page-wrapper > header > div.panel.wrapper > div > ul > li:nth-child(2) > a");
  }

  async searchProduct() {
    await this.inputSearch.addValue('Luma')
    await this.searchIcon.click()
  }
  async navigateToCheckout(){
    await this.shoppingCart.click()
    await this.waitForDisplayed(await this.btnProceedToCheckout)
    await this.btnProceedToCheckout.click();
  }
}
module.exports = new HomePage();
