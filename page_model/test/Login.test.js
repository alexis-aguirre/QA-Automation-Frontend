import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";

import { CREDENTIALS } from "../data/Constants";

fixture("Login").page`https://www.saucedemo.com`.beforeEach(async (t) => {});

test("Login with a valid user", async (t) => {
  await LoginPage.submitLoginForm(
    CREDENTIALS.VALID_USER.USERNAME,
    CREDENTIALS.VALID_USER.PASSWORD
  );
  await t.expect(ProductsPage.title.exists).ok();
});

test("Login with an invalid user", async (t) => {
  await LoginPage.submitLoginForm(
    CREDENTIALS.INVALID_USER.USERNAME,
    CREDENTIALS.INVALID_USER.PASSWORD
  );
  await t.expect(LoginPage.errorMessage.exists).ok();
});
