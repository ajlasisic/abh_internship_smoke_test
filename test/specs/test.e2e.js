const { expect } = require("@wdio/globals");
const RegisterPage = require("../pageobjects/register.page");
const AccountPage = require("../pageobjects/account.page");
const LoginPage = require("../pageobjects/login.page");
const Homepage = require("../pageobjects/homepage");
const ProductPage = require("../pageobjects/product.page");
const CartPage = require("../pageobjects/cart.page");

describe("Smoke test", () => {
  it("register with valid credentials", async () => {
    await browser.maximizeWindow()
    await RegisterPage.open();
    await RegisterPage.register();
    await expect(AccountPage.messageAlert).toBeExisting();
    await expect(AccountPage.messageAlert).toHaveTextContaining("Thank you for registering with Main Website Store.");
    await expect(browser).toHaveUrl("https://magento.softwaretestingboard.com/customer/account/");
  });
  it("login with valid credentials and sign out", async () => {
    await browser.maximizeWindow()
    await LoginPage.open();
    await LoginPage.login();
    await expect(LoginPage.loginSuccess).toHaveTextContaining("Welcome");
    await LoginPage.logout();
    await expect(LoginPage.msgSignOut).toHaveTextContaining(
      "You are signed out"
    );
  });
  it("checkout process without sign in", async () => {
    await browser.maximizeWindow()
    await Homepage.open();
    await Homepage.logo.click()
    await Homepage.searchProduct()
    await ProductPage.addProductToCart();
    await browser.pause(2000)
    await CartPage.orderAsGuest();
    await expect(CartPage.msgOrderSuccess).toHaveTextContaining("Thank you for your purchase!");
  });
  it("checkout process with sign in", async () => {
    await browser.maximizeWindow()
    await LoginPage.open();
    await LoginPage.login();
    await expect(LoginPage.loginSuccess).toHaveTextContaining("Welcome");
    await Homepage.logo.click()
    await Homepage.searchProduct()
    await ProductPage.addProductToCart();
    await browser.pause(2000)
    await CartPage.orderSignedIn();
    await expect(CartPage.msgOrderSuccess).toHaveTextContaining("Thank you for your purchase!");
  });
});
