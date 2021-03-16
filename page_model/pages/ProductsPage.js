import { Selector, t } from "testcafe";

class ProductsPage {
  constructor() {
    this.title = Selector(".product_label");
    this.burgerMenu = Selector("div.bm-burger-button");
    this.logoutButton = Selector("a#logout_sidebar_link.bm-item.menu-item");
  }

  async logout() {
    await t.click(this.logoutButton);
  }
}

export default new ProductsPage();
