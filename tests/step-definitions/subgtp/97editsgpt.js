import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import SubGTPPage from "../../pageobjects/subgtp/subgtp.page";
import FormSubGTPPage from "../../pageobjects/subgtp/form.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 97. Edit Sub Group Trade Program");
allureReporter.addFeature("Edit Sub Group Trade Program");

//Scenario Outline: As a user, I can create and edit Sub GTP
Given(/^I am on the Sub GTP page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.SubGroupTradeProgram();
  await SubGTPPage.page();
});
When(/^I click button 'Tambah'$/, async () => {
  await SubGTPPage.createNew();
});
Then(/^System should be leading to form create Sub GTP$/, async () => {
  await FormSubGTPPage.page();
});
Given(/^I am on the form create Sub GTP page$/, async () => {
  await FormSubGTPPage.pageCreate();
});
When(/^I input form and submit$/, async () => {
  await FormSubGTPPage.name(dataTest.subGTP.cariByNama1);
  await FormSubGTPPage.wbs(dataTest.subGTP.wbsSGPT);
  await FormSubGTPPage.cost(dataTest.subGTP.CCSGPT);
  await FormSubGTPPage.gl(dataTest.subGTP.glAccount);
  await FormSubGTPPage.pph(dataTest.subGTP.ratePPH);
  await FormSubGTPPage.approver1(dataTest.subGTP.approverSGPT1);
  await FormSubGTPPage.tambahApprover1();
  await FormSubGTPPage.approver2(dataTest.subGTP.approverSGPT2);
  await FormSubGTPPage.tambahApprover2();
  await FormSubGTPPage.approver3(dataTest.subGTP.approverSGPT4);
  await FormSubGTPPage.kurangApprover2();
  await FormSubGTPPage.kurangApprover3();
  await FormSubGTPPage.status();
  await FormSubGTPPage.submitForm();
  await browser.pause(5000);
});
Then(
  /^System should be able to submit Sub GTP and leading to Sub GTP page$/,
  async () => {
    await SubGTPPage.pageList();
  }
);
When(/^I search and edit Sub GPT$/, async () => {
  await SubGTPPage.open();
  await LoginPage.acceptCookie();
  await LoginPage.closeSideMenu();
  await browser.pause(5000);
  await SubGTPPage.page();
  await SubGTPPage.search1(dataTest.subGTP.cariByNama1);
  await SubGTPPage.editSubGTP();
  await browser.pause(10000);
  await FormSubGTPPage.pageEdit();
  await FormSubGTPPage.clearName();
  await FormSubGTPPage.name(dataTest.subGTP.cariByNamaEdit);
  await FormSubGTPPage.clearPPH();
  await FormSubGTPPage.pph(dataTest.subGTP.ratePPH2);
  await FormSubGTPPage.tambahApprover1();
  await FormSubGTPPage.approver2(dataTest.subGTP.approverSGPT4);
  await FormSubGTPPage.kurangApprover2();
  await FormSubGTPPage.submitForm();
});

Then(/^System should be edit Sub GTP$/, async () => {
  await SubGTPPage.page();
  await SubGTPPage.search1(dataTest.subGTP.cariByNamaEdit);
  await SubGTPPage.editSubGTP();
  await FormSubGTPPage.pageEdit();
  await FormSubGTPPage.scApprover();
  await browser.pause(4000);
});
