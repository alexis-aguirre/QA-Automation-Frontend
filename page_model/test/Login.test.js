import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";

import { CREDENTIALS } from "../data/Constants";

fixture("Login").page`https://www.saucedemo.com`.beforeEach(async (t) => {});

test("Users can login using valid credentials", async (t) => {
  await LoginPage.submitLoginForm(
    CREDENTIALS.VALID_USER.USERNAME,
    CREDENTIALS.VALID_USER.PASSWORD
  );
  await t.expect(ProductsPage.title.exists).ok();
});

test("Users can login using invalid credentials", async (t) => {
  await LoginPage.submitLoginForm(
    CREDENTIALS.INVALID_USER.USERNAME,
    CREDENTIALS.INVALID_USER.PASSWORD
  );
  await t.expect(LoginPage.errorMessage.exists).ok();
});
