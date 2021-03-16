import { Selector, t } from "testcafe";

class LoginPage {
  constructor() {
    this.usernameField = Selector("#user-name");
    this.passwordField = Selector("#password");
    this.loginButton = Selector("#login-button");
    this.errorMessage = Selector(".error-button");
  }

  async submitLoginForm(username, password) {
    await t
      .typeText(this.usernameField, username, { paste: true }) //paste the text instead of writing char by char
      .typeText(this.passwordField, password)
      .click(this.loginButton);
  }
}

export default new LoginPage();
