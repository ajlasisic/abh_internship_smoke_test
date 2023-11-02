const { $ } = require("@wdio/globals");
const Page = require("./Page");

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
    await this.inputFirstName.setValue(this.newUser.firstname);
    await this.inputLastName.setValue(this.newUser.lastname);
    await this.inputEmail.click();
    await browser.keys(await this.newUser.email);
    await this.inputPassword.setValue(this.newUser.password);
    await this.inputPasswordConfirm.setValue(this.newUser.password);
    await this.btnCreateAccount.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */

  static async getRandomEmail () {
    let rndnum = Math.random();
    let emailValue = "random.test+" + rndnum + "@test.com";
    return emailValue;
  }
  newUser = {
    firstname: "Test",
    lastname: "Testing",
    email: RegisterPage.getRandomEmail(),
    password: "Atlant123",
  };
}

module.exports = new RegisterPage();
