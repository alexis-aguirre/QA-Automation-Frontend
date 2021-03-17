import { Selector, t } from "testcafe";

class ConfirmationPage {
  constructor() {
    this.title = Selector(".subheader");
    this.successBanner = Selector("h2.complete-header");

    this.logo = Selector("img.pony_express");
  }
}

export default new ConfirmationPage();
