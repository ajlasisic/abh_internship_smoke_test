const { $ } = require("@wdio/globals");
const Page = require("./page");
class Homepage extends Page {
  get inputSearch() {
    return $("#search");
  }
  get searchIcon() {
    return $('#search_mini_form > div.actions > button')
  }
  get shoppingCart() {
    return $(".minicart-wrapper > a");
  }
  get btnProceedToCheckout() {
    return $("#top-cart-btn-checkout");
  }
  get logo() {
    return $('body > div.page-wrapper > header > div.header.content > a > img')
  }

  open() {
    return super.open();
  }
  async searchProduct() {
    await this.inputSearch.addValue('Luma')
    await this.searchIcon.click()
  }
}
module.exports = new Homepage();
