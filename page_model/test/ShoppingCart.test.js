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
  await ProductsPage.addToCart(0);
  await t.click(ProductsPage.shoppingCartButton);

  await t.expect(ShoppingCartPage.titleField.exists).ok();
  ShoppingCartPage.SetCurrentArticle(0);

  await t.expect(ShoppingCartPage.currentArticle.exists).ok();
});

test("Add multiple items to cart", async (t) => {
  await ProductsPage.addToCart(0);
  await ProductsPage.addToCart(2);
  await ProductsPage.addToCart(4);
  await t.click(ProductsPage.shoppingCartButton);

  for (let index = 0; index < 3; index++) {
    await ShoppingCartPage.SetCurrentArticle(index);
    await t.expect(ShoppingCartPage.currentArticle.exists).ok();
  }
});
