const { expect } = require("@wdio/globals");
const RegisterPage = require("../pageobjects/RegisterPage");
const AccountPage = require("../pageobjects/AccountPage");
const LoginPage = require("../pageobjects/LoginPage");
const HomePage = require("../pageobjects/HomePage");
const ProductPage = require("../pageobjects/ProductPage");
const CartPage = require("../pageobjects/CartPage");

describe("Smoke test", () => {
  it("Register with valid credentials", async () => {
    await HomePage.createAccountLink.click()
    await RegisterPage.register();
    await expect(AccountPage.messageAlert).toBeExisting();
    await expect(AccountPage.messageAlert).toHaveTextContaining("Thank you for registering with Main Website Store.");
    await expect(browser).toHaveUrl("https://magento.softwaretestingboard.com/customer/account/");
    await LoginPage.logout();
    await expect(LoginPage.msgSignOut).toHaveTextContaining("You are signed out");
  });
  it("Login with valid credentials and sign out", async () => {
    await HomePage.signInLink.click()
    await LoginPage.login();
    await expect(LoginPage.loginSuccess).toHaveTextContaining("Welcome");
    await LoginPage.logout();
    await expect(LoginPage.msgSignOut).toHaveTextContaining("You are signed out");
   });
  it("Checkout process without sign in", async () => {
    await HomePage.searchProduct()
    await ProductPage.addProductToCart();
    await HomePage.navigateToCheckout();
    await CartPage.orderAsGuest();
    await expect(CartPage.msgOrderSuccess).toHaveTextContaining("Thank you for your purchase!");
  });
  it("Checkout process with sign in", async () => {
    await HomePage.signInLink.click();
    await LoginPage.login();
    await expect(LoginPage.loginSuccess).toHaveTextContaining("Welcome");
    await HomePage.searchProduct()
    await ProductPage.addProductToCart();
    await HomePage.navigateToCheckout();
    await CartPage.orderAsSignedUser();
    await expect(CartPage.msgOrderSuccess).toHaveTextContaining("Thank you for your purchase!");
  });
});
