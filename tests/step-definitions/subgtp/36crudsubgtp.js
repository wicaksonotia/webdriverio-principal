import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import MainmenuPage from "../../pageobjects/mainmenu.page";
import SubGTPPage from '../../pageobjects/subgtp/subgtp.page';
import FormSubGTPPage from '../../pageobjects/subgtp/form.page';
const dataTest = require('../../testdata/dte.data');

    // use allure API for allure reporter
    allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[PRINCIPAL] 36. CRUD Sub GTP');
    allureReporter.addFeature('CRUD Sub GTP');

// Scenario Outline: As a user, I can create, read, update and delete employee - pojok bayar
Given(/^I am on the Sub GTP page$/, async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await MainmenuPage.SubGroupTradeProgram()
    await SubGTPPage.page()
    // await SubGTPPage.pageList()
})

When(/^I click button 'Tambah'$/, async () => {
    await SubGTPPage.createNew()
});

Then(/^System should be leading to form create Sub GTP$/, async () => {
    await FormSubGTPPage.page()
});

Given(/^I am on the form create Sub GTP page$/, async () => {
    await FormSubGTPPage.pageCreate()
})

When(/^I input form and submit$/, async () => {
    await FormSubGTPPage.name(dataTest.subGTP.searchByNama1)
    await FormSubGTPPage.wbs(dataTest.subGTP.wbs)
    await FormSubGTPPage.cost(dataTest.subGTP.cost)
    await FormSubGTPPage.gl(dataTest.subGTP.gl)
    await FormSubGTPPage.pph(dataTest.subGTP.pph)
    await FormSubGTPPage.approver(dataTest.subGTP.approver)
    await FormSubGTPPage.status()
    await FormSubGTPPage.submitForm()
    await browser.pause(5000)
    // await FormSubGTPPage.notification()
    await FormSubGTPPage.clearName()
    await FormSubGTPPage.name(dataTest.subGTP.searchByNama2)
    await FormSubGTPPage.submitForm()
    // await browser.pause(3000)
    // await FormSubGTPPage.submitForm()
});

Then(/^System should be able to submit Sub GTP and leading to Sub GTP page$/, async () => {
    // await SubGTPPage.open()
    // await LoginPage.acceptCookie()
    // await browser.pause(10000)
    await SubGTPPage.pageList()
});

When(/^I search a name$/, async () => {
    await SubGTPPage.search(dataTest.subGTP.searchByNama2)
});

Then(/^System should be display the data based on search keyword$/, async () => {
    await SubGTPPage.expectNewEmployeeRow1(dataTest.subGTP.searchByNama2, dataTest.subGTP.wbs, dataTest.subGTP.approver, dataTest.subGTP.status)
});

When(/^I edit and delete Sub GTP$/, async () => {
    await SubGTPPage.open()
    await LoginPage.acceptCookie()
    await LoginPage.closeSideMenu()
    await browser.pause(5000)
    await SubGTPPage.page()
    await SubGTPPage.search(dataTest.subGTP.searchByNama2)
    await SubGTPPage.searchResult(dataTest.subGTP.searchByNama2)
    await SubGTPPage.editSubGTP()
    await browser.pause(10000)
    await FormSubGTPPage.pageEdit()
    await FormSubGTPPage.clearName()
    await FormSubGTPPage.name(dataTest.subGTP.searchByNamaEdit)
    await FormSubGTPPage.status()
    await FormSubGTPPage.submitForm()
    await SubGTPPage.pageList()
    await SubGTPPage.search(dataTest.subGTP.searchByNamaEdit)
    await SubGTPPage.searchResult(dataTest.subGTP.searchByNamaEdit)
    await SubGTPPage.deleteSubGTP()
});

Then(/^System should be delete Sub GTP$/, async () => {
    await SubGTPPage.search(dataTest.subGTP.searchByNamaEdit)
    await browser.pause(5000)
});