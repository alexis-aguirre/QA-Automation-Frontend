import ProductsPage from "../pages/ProductsPage";
import LoginPage from "../pages/LoginPage";

import { CREDENTIALS, BUYING_ITEMS } from "../data/Constants";
import OverviewPage from "../pages/OverviewPage";
import CheckoutPage from "../pages/CheckoutPage";

fixture("Checkout page").page`https://www.saucedemo.com`.beforeEach(
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

test("Validate items in overview page", async (t) => {
  OverviewPage.setCurrentCartItem(0);
  await t
    .expect(OverviewPage.getCurrentCartItemTitle().innerText)
    .eql(BUYING_ITEMS.ITEM01);

  OverviewPage.setCurrentCartItem(1);
  await t
    .expect(OverviewPage.getCurrentCartItemTitle().innerText)
    .eql(BUYING_ITEMS.ITEM02);

  OverviewPage.setCurrentCartItem(2);
  await t
    .expect(OverviewPage.getCurrentCartItemTitle().innerText)
    .eql(BUYING_ITEMS.ITEM03);
});
