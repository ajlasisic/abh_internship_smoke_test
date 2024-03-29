const { $ } = require("@wdio/globals");
const Page = require("./Page");
const { createNewUser } = require("../data/register");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputFirstName() {
    return $("#firstname");
  }

  get inputLastName() {
    return $("#lastname");
  }

  get inputEmail() {
    return $("#email_address");
  }

  get inputPassword() {
    return $("#password");
  }

  get inputPasswordConfirm() {
    return $("#password-confirmation");
  }

  get btnCreateAccount() {
    return $("#form-validate > .actions-toolbar > .primary > button");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to register with valid data
   */
  async register() {
    await this.inputFirstName.setValue(createNewUser.firstname);
    await this.inputLastName.setValue(createNewUser.lastname);
    await this.inputEmail.click();
    await browser.keys(createNewUser.email);
    await this.inputPassword.setValue(createNewUser.password);
    await this.inputPasswordConfirm.setValue(createNewUser.password);
    await this.btnCreateAccount.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
}
module.exports = new RegisterPage();
