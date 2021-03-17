import { Selector, t } from "testcafe";

import { MAIL_ADDRESS } from "../data/Constants";

class CheckoutPage {
  constructor() {
    this.titleField = Selector(".subheader");

    this.firstName = Selector("#first-name");
    this.lastName = Selector("#last-name");
    this.postalCode = Selector("#postal-code");

    this.errorMessage = Selector("h3");
    this.continueButton = Selector("input.btn_primary.cart_button");
  }

  async fillCheckoutForm() {
    await t
      .typeText(this.firstName, MAIL_ADDRESS.FIRSTNAME, { paste: true }) //paste the text instead of writing char by char
      .typeText(this.lastName, MAIL_ADDRESS.LASTNAME)
      .typeText(this.postalCode, MAIL_ADDRESS.ZIPCODE)
      .click(this.continueButton);
  }
}

export default new CheckoutPage();
