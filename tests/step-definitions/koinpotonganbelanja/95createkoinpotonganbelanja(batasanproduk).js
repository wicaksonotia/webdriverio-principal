import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import formKoinPotonganBelanjaPage from "../../pageobjects/koinpotonganbelanja/formkoinpotonganbelanja.page";
import koinPotonganBelanjaPage from "../../pageobjects/koinpotonganbelanja/koinpotonganbelanja.page";
const dataTest = require("../../testdata/dte.data");

allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 95. Create Koin Potongan Belanja (Batasan Produk)");
allureReporter.addFeature("Create Koin Potongan Belanja (Batasan Produk)");

Given(/^I am on the Koin Potongan Belanja page$/, async function () {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await LoginPage.acceptCookie()
    await MainmenuPage.DropdownCN()
    await MainmenuPage.KoinPotonganBelanja()
});

When(/^I click button 'Tambah'$/, async function () {
    await koinPotonganBelanjaPage.Page()
    await koinPotonganBelanjaPage.Tambah()
});

Then(/^System should be leading to form Buat Koin Potongan Belanja page$/, async function () {
    await formKoinPotonganBelanjaPage.Page()
});

Given(/^I am on the form Buat Koin Potongan Belanja page$/, async function () {

});

When(/^I input form Detail Koin Potongan Belanja and submit$/, async function () {

});

Then(/^System should be able to submit and leading to Koin Potongan Belanja page$/, async function () {

});

When(/^I edit Koin Potongan Belanja$/, async function () {

});

Then(/^System should be leading to form Ubah Koin Potongan Belanja page$/, async function () {

});

When(/^I input form and submit$/, async function () {

});

Then(/^System should be able to submit form and leading to Koin Potongan Belanja page$/, async function () {

});