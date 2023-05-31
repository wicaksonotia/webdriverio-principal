import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import TradeProgramPage from "../../pageobjects/tradeprogram/tradeprogram";
import FormTradeProgramPage from "../../pageobjects/tradeprogram/formtradeprogram.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 90. Edit Budget Trade Program yang Sedang Berjalan"
);
allureReporter.addFeature("Edit Budget Trade Program yang Sedang Berjalan");

Given(/^I am on the Trade Program page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.tradeProgram();
  await TradeProgramPage.page();
});
When(/^I click button 'Tambah'$/, async () => {
  await TradeProgramPage.createTradeProgram();
});
Then(/^System should be leading to Buat Trade Program page$/, async () => {
  await FormTradeProgramPage.page();
});
Given(/^I am on the Buat Trade Program page$/, async () => {
  await FormTradeProgramPage.page();
});
When(/^I input form and submit$/, async () => {
  await FormTradeProgramPage.createTP(
    dataTest.tradeProgram.namaGTP,
    dataTest.tradeProgram.namaSGPT,
    dataTest.tradeProgram.inputNamaTP,
    dataTest.tradeProgram.inputDANATP
  );
  await FormTradeProgramPage.submit();
});
Then(
  /^System should be able to submit Trade Program and leading to Trade Program page$/,
  async () => {
    await TradeProgramPage.page();
  }
);
When(/^I search and edit Budget Trade Program$/, async () => {
  await TradeProgramPage.searchTradeProgram(dataTest.tradeProgram.inputNamaTP);
  await TradeProgramPage.editTP();
  await FormTradeProgramPage.page();
  await FormTradeProgramPage.editDana(dataTest.tradeProgram.editDANATP);
  await FormTradeProgramPage.submit1();
});
Then(
  /^System should be edit Budget Trade Program and leading to trade Program page$/,
  async () => {
    await TradeProgramPage.page();
  }
);
