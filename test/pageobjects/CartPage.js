const { $ } = require("@wdio/globals");
const Page = require("./Page");
const { createNewAddress } = require("../data/register");

class CartPage extends Page {

  get orderTimeline() {
    return $('.opc-progress-bar')
  }
  get inputEmail() {
    return $("#customer-email");
  }
  get inputFirstName() {
    return $("#shipping-new-address-form > div:nth-child(1) > div > input");
  }
  get inputLastName() {
    return $("#shipping-new-address-form > div:nth-child(2) > div > input");
  }
  get inputAddress() {
    return $("#shipping-new-address-form > fieldset > div > div:nth-child(1) > div > input");
  }
  get inputCity() {
    return $("#shipping-new-address-form > div:nth-child(5) > div > input");
  }
  get inputZip() {
    return $("#shipping-new-address-form > div:nth-child(8) > div > input");
  }
  get selectCountry() {
    return $("#shipping-new-address-form > div:nth-child(9) > div > select");
  }
  get inputPhoneNumber() {
    return $("#shipping-new-address-form > div:nth-child(10) > div > input");
  }
  get shippingMethod() {
    return $('.radio')
  }
  get btnNext() {
    return $("#shipping-method-buttons-container > div > button");
  }
  get btnPlaceOrder() {
    return $(
      "#checkout-payment-method-load > div > div > div.payment-method._active > div.payment-method-content > div.actions-toolbar > div > button"
    );
  }
  get msgOrderSuccess() {
    return $("#maincontent > div.page-title-wrapper > h1 > span");
  }
  get orderNumber() {
    return $(".checkout-success");
  }
  
  async orderAsGuest() {
    await this.waitForDisplayed(this.orderTimeline)
    await this.inputEmail.addValue(createNewAddress.email);
    await this.inputFirstName.addValue(createNewAddress.firstname);
    await this.inputLastName.addValue(createNewAddress.lastname);
    await this.inputAddress.addValue(createNewAddress.address);
    await this.inputCity.addValue(createNewAddress.city);
    await this.inputZip.addValue(createNewAddress.zip);
    await this.selectCountry.click();
    await this.selectCountry.selectByAttribute("value", "BA");
    await this.inputPhoneNumber.click()
    await this.inputPhoneNumber.addValue(createNewAddress.phone);
    await this.waitForSelected(this.shippingMethod)
    await this.btnNext.click();
    await this.btnPlaceOrder.click();
  }
  async orderAsSignedUser() {
    await this.waitForDisplayed(this.btnNext)
    await this.btnNext.click();
    await this.btnPlaceOrder.click();
  }
}
module.exports = new CartPage();
