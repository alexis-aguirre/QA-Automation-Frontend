import ProductsPage from "../pages/ProductsPage";
import LoginPage from "../pages/LoginPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";

import { CREDENTIALS } from "../data/Constants";

fixture("Shopping Cart").page`https://www.saucedemo.com`.beforeEach(
  async (t) => {
    await LoginPage.submitLoginForm(
      CREDENTIALS.VALID_USER.USERNAME,
      CREDENTIALS.VALID_USER.PASSWORD
    );
  }
);

test("Add a single item to cart", async (t) => {
  await ProductsPage.addToCart(2);
  await t.click(ProductsPage.shoppingCartButton);

  await t.expect(ShoppingCartPage.titleField.exist).ok;
  await t.expect(ShoppingCartPage.GetNthElement(0)).ok;
});
