import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";

import { CREDENTIALS } from "../data/Constants";

fixture("Login").page`https://www.saucedemo.com`.beforeEach(async (t) => {
  await LoginPage.submitLoginForm(
    CREDENTIALS.VALID_USER.USERNAME,
    CREDENTIALS.VALID_USER.PASSWORD
  );
});

test("Users can login using valid credentials", async (t) => {
  await t.expect(ProductsPage.title.exist).ok;
});
