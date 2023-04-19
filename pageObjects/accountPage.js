
const { expect } = require('@playwright/test');
import path from 'path';

class accountPage {

   constructor(page) {

      this.page = page;

      this.avatarEdit = page.locator('#avatar > input[type=file]');
      this.subbmitButton = page.getByTestId('account-edit-button-submit');
      this.successmessage = page.getByText('Mise à jour réussie !');
   }

   async editAvatar() {
      
      await this.avatarEdit.setInputFiles(path.join(__dirname, '../utils/profilFile.png'));
      await this.subbmitButton.click();
      expect(this.successmessage).toBeVisible;
   }

}
module.exports = { accountPage };