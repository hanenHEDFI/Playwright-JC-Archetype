const { expect } = require('@playwright/test');

class loginPage {

   constructor(page) {
      this.page = page;
      this.loginButton = page.getByTestId('login-button-submit');
      this.emailField = page.locator('#email_login');
      this.pswField = page.locator('#password');
      this.acceptCookies = page.getByText('OK pour moi');

   }

   async goToLink() {

      await this.page.goto("https://www.welcometothejungle.com/fr/signin");
     

   }

   async login(email, psw) {

     await this.acceptCookies.click();
      await this.emailField.fill(email);
      await this.pswField.fill(psw);
      await expect(this.loginButton).toBeEnabled();
      await this.loginButton.click();
      
   }

}
module.exports = {loginPage};