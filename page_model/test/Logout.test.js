import ProductsPage from "../pages/ProductsPage";
import LoginPage from "../pages/LoginPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";

import { CREDENTIALS } from "../data/Constants";

fixture("Logout").page`https://www.saucedemo.com`.beforeEach(async (t) => {
  await LoginPage.submitLoginForm(
    CREDENTIALS.VALID_USER.USERNAME,
    CREDENTIALS.VALID_USER.PASSWORD
  );
});

test("Logout from products page", async (t) => {
  await t.click(ProductsPage.burgerMenu);
  await t.click(ProductsPage.logoutButton);

  await t.expect(LoginPage.usernameField.exists).ok();
});

test("Navigate to shopping cart", async (t) => {
  await t.click(ProductsPage.shoppingCartButton);

  await t.expect(ShoppingCartPage.titleField.exists).ok();
});
