import { Selector, t } from "testcafe";

class ShoppingCartPage {
  constructor() {
    this.titleField = Selector(".subheader");
  }
}

export default new ShoppingCartPage();
