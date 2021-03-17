import { Selector, t } from "testcafe";

class ProductsPage {
  constructor() {
    this.title = Selector(".product_label");
    this.burgerMenu = Selector("div.bm-burger-button");
    this.logoutButton = Selector("a#logout_sidebar_link.bm-item.menu-item");
    this.shoppingCartButton = Selector("a.shopping_cart_link.fa-layers.fa-fw");
    this.productList = Selector(".inventory_list");

    this.checkoutButton = Selector("a.btn_action.checkout_button");
  }

  async logout() {
    await t.click(this.logoutButton);
  }

  async addToCart(index) {
    const element = this.productList
      .child(".inventory_item")
      .nth(index)
      .child(".pricebar")
      .child("button.btn_primary.btn_inventory");

    await t.click(element);
  }
}

export default new ProductsPage();
