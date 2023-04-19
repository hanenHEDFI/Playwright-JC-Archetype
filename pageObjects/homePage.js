const { expect } = require('@playwright/test');
class homePage {

   constructor(page) {

      this.page = page;
      this.user = page.getByTestId('home-connected-user-card-name');

   }


   async AccessProfil() {

      await expect(this.user).toBeEnabled();
      await this.user.click();
      await expect(this.page).toHaveURL("https://www.welcometothejungle.com/fr/me/settings/account");
      await expect(this.page).toHaveTitle("Mon compte | Welcome to the Jungle");
   }

}
module.exports = { homePage };