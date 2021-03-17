import { Selector, t } from "testcafe";

class OverviewPage {
  constructor() {
    this.title = Selector(".subheader");
    this.cartList = Selector("div.cart_list");
    this.currentCartItem = null;

    this.checkoutButton = Selector("a.btn_action.cart_button");
    this.cancelButton = Selector("a.cart_cancel_linkbtn_secondary");
  }

  setCurrentCartItem(index) {
    this.currentCartItem = Selector("div.cart_item");
  }
}

export default new OverviewPage();
