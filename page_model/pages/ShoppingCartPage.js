import { Selector, t } from "testcafe";

class ShoppingCartPage {
  constructor() {
    this.titleField = Selector(".subheader");
    this.articleList = Selector(".cart_list");
  }

  async GetNthElement(index) {
    return this.articleList.child(".cart_item").nth(index);
  }
}

export default new ShoppingCartPage();
