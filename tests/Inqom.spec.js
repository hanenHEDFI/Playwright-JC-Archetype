const { test, expect } = require('@playwright/test');
const { loginPage } = require('../pageObjects/loginPage');
const { homePage } = require('../pageObjects/homePage');
const { accountPage } = require('../pageObjects/accountPage');
import path from 'path';
const dataSet =  JSON.parse(JSON.stringify(require("../utils/data.json")));

test('test playwright', async ({ page }) => {

    const LoginPage = new loginPage(page);
    const HomePage = new homePage(page);
    const AccountPage = new accountPage(page);

    // get to the target page
    LoginPage.goToLink();
    await expect(page).toHaveTitle("Welcome to the Jungle - Le guide de l'emploi");
    // login
    LoginPage.login(dataSet.email, dataSet.psw);
    await expect(page).toHaveURL("https://www.welcometothejungle.com/fr/");
    //Access to account settings
    HomePage.AccessProfil();
    await expect(page).toHaveURL("https://www.welcometothejungle.com/fr/me/settings/account");
    await expect(page).toHaveTitle("Mon compte | Welcome to the Jungle");
    //update profil and check display success message 
    AccountPage.editAvatar();
});

