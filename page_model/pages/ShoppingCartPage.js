import { Selector, t } from "testcafe";

class ShoppingCartPage {
  constructor() {
    this.titleField = Selector(".subheader");
    this.articleList = Selector(".cart_list");
    this.currentArticle = null;
  }

  async SetCurrentArticle(index) {
    this.currentArticle = Selector("button.btn_secondary.cart_button").nth(
      index
    );
  }
}

export default new ShoppingCartPage();
