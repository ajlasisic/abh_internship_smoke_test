const { $ } = require("@wdio/globals");
const Page = require("./Page");

class CartPage extends Page {
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
  newAddress = {
    email: "random2@random.com",
    firstname: "Test",
    lastname: "Testing",
    address: "Test address",
    city: "Sarajevo",
    zip: 71000,
    phone: 123456,
  };
  
  async orderAsGuest() {
    await this.inputEmail.addValue(this.newAddress.email);
    await this.inputFirstName.addValue(this.newAddress.firstname);
    await this.inputLastName.addValue(this.newAddress.lastname);
    await this.inputAddress.addValue(this.newAddress.address);
    await this.inputCity.addValue(this.newAddress.city);
    await this.inputZip.addValue(this.newAddress.zip);
    await this.selectCountry.click();
    await this.selectCountry.selectByAttribute("value", "BA");
    await browser.pause(2000)
    await this.inputPhoneNumber.addValue(this.newAddress.phone);
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
