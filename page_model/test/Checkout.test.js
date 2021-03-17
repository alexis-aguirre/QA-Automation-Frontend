import ProductsPage from "../pages/ProductsPage";
import LoginPage from "../pages/LoginPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";

import { CREDENTIALS, MAIL_ADDRESS } from "../data/Constants";
import CheckoutPage from "../pages/CheckoutPage";
import OverviewPage from "../pages/OverviewPage";

fixture("Checkout page").page`https://www.saucedemo.com`.beforeEach(
  async (t) => {
    await LoginPage.submitLoginForm(
      CREDENTIALS.VALID_USER.USERNAME,
      CREDENTIALS.VALID_USER.PASSWORD
    );

    await ProductsPage.addToCart(0);
    await t.click(ProductsPage.shoppingCartButton);
    await t.click(ProductsPage.checkoutButton);
  }
);

test("Continue buying without zip code", async (t) => {
  await t.expect(CheckoutPage.titleField.exists).ok();
  await t.click(CheckoutPage.continueButton);

  await t.expect(CheckoutPage.errorMessage.exists).ok();
});

test("Continue buying with user data", async (t) => {
  await t.expect(CheckoutPage.titleField.exists).ok();

  await CheckoutPage.fillCheckoutForm();

  await t.expect(OverviewPage.title.exists).ok();
  await t.expect(OverviewPage.title.innerText).eql("Checkout: Overview");
});
