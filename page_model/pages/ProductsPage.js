import { Selector } from "testcafe";

class ProductsPage {
  constructor() {
    this.title = Selector(".product_label");
  }
}

export default new ProductsPage();
