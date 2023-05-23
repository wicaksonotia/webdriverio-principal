import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import formKoinPotonganBelanjaPage from "../../pageobjects/koinpotonganbelanja/formkoinpotonganbelanja.page";
import koinPotonganBelanjaPage from "../../pageobjects/koinpotonganbelanja/koinpotonganbelanja.page";
const dataTest = require("../../testdata/dte.data");

allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 96. Create Koin Potongan Belanja (Batasan Kategori)"
);
allureReporter.addFeature("Create Koin Potongan Belanja (Batasan Kategori)");

Given(/^I am on the Koin Potongan Belanja page$/, async function () {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await LoginPage.acceptCookie();
  await MainmenuPage.DropdownCN();
  await MainmenuPage.KoinPotonganBelanja();
});

When(/^I click button 'Tambah'$/, async function () {
  await koinPotonganBelanjaPage.Page();
  await koinPotonganBelanjaPage.Tambah();
});

Then(
  /^System should be leading to form Buat Koin Potongan Belanja page$/,
  async function () {
    await formKoinPotonganBelanjaPage.Page();
  }
);

Given(/^I am on the form Buat Koin Potongan Belanja page$/, async function () {
  await formKoinPotonganBelanjaPage.Page();
});

When(
  /^I input form Detail Koin Potongan Belanja and submit$/,
  async function () {
    await formKoinPotonganBelanjaPage.createKPK(
      dataTest.coinpotonganbelanja.inputNamaBK,
      dataTest.coinpotonganbelanja.inputCariGTP2
    );
  }
);

Then(
  /^System should be able to submit and leading to Koin Potongan Belanja page$/,
  async function () {
    await koinPotonganBelanjaPage.Page();
  }
);

When(
  /^I search and click button edit Koin Potongan Belanja$/,
  async function () {
    await koinPotonganBelanjaPage.search(
      dataTest.coinpotonganbelanja.inputNamaBK
    );
    await koinPotonganBelanjaPage.Edit();
  }
);

Then(
  /^System should be leading to Ubah Koin Potongan Belanja page$/,
  async function () {
    await formKoinPotonganBelanjaPage.Page();
  }
);

When(/^I input form and submit$/, async function () {
  await formKoinPotonganBelanjaPage.formPanelMitra(
    dataTest.coinpotonganbelanja.inputCariMitra
  );
});

Then(
  /^System should be able to submit form and leading to Koin Potongan Belanja page$/,
  async function () {
    await formKoinPotonganBelanjaPage.Page();
  }
);
