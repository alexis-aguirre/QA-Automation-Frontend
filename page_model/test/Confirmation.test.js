import ProductsPage from "../pages/ProductsPage";
import LoginPage from "../pages/LoginPage";

import { CREDENTIALS, BUYING_ITEMS } from "../data/Constants";
import OverviewPage from "../pages/OverviewPage";
import CheckoutPage from "../pages/CheckoutPage";
import ConfirmationPage from "../pages/ConfirmationPage";

fixture("Confirmation page").page`https://www.saucedemo.com`.beforeEach(
  async (t) => {
    await LoginPage.submitLoginForm(
      CREDENTIALS.VALID_USER.USERNAME,
      CREDENTIALS.VALID_USER.PASSWORD
    );

    await ProductsPage.addToCart(0);
    await ProductsPage.addToCart(2);
    await ProductsPage.addToCart(4);
    await t.click(ProductsPage.shoppingCartButton);
    await t.click(ProductsPage.checkoutButton);
    await CheckoutPage.fillCheckoutForm();
  }
);

test("Complete a purchase", async (t) => {
  await t.click(OverviewPage.checkoutButton);

  await t.expect(ConfirmationPage.title.exists).ok();
  await t.expect(ConfirmationPage.title.innerText).eql("Finish");

  await t
    .expect(ConfirmationPage.successBanner.innerText)
    .eql("THANK YOU FOR YOUR ORDER");

  await t.expect(ConfirmationPage.logo.exists).ok();
});
