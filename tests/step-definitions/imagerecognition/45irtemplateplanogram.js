import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import MasterGroupPage from '../../pageobjects/imagerecognition/mastergroup.page';
import FormMBGPage from '../../pageobjects/imagerecognition/mastergroupform.page';
import MasterBrandPage from '../../pageobjects/imagerecognition/masterbrand.page';
import MainmenuPage from "../../pageobjects/mainmenu.page";
import FormMasterBrandPage from '../../pageobjects/imagerecognition/masterbrandform.page';
import TemplatePlanogramPage from '../../pageobjects/imagerecognition/templateplanogram.page';
import FormTemplatePlanogramPage from '../../pageobjects/imagerecognition/templateplanogramform.page';
import loginPage from '../../pageobjects/login/login.page';
const dataTest = require('../../testdata/dte.data');

    // use allure API for allure reporter
    allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[PRINCIPAL] 45. IR - Template Planogram');
    allureReporter.addFeature('IR - Template Planogram');

// Scenario Outline: As a user, I can create, edit and delete template planogram
Given(/^I am on the Master Group page$/, async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await browser.pause(10000)
    await MainmenuPage.DropdownImageR()
    await MainmenuPage.MasterBrandGroup()
    await MasterGroupPage.page()
})

When(/^I click button 'Tambah' Master Group$/, async () => {
    await MasterGroupPage.createNew()
});

Then(/^System should be leading to form create Master Group$/, async () => {
    await FormMBGPage.page()
});

Given(/^I am on the form create Master Group page$/, async () => {
    await FormMBGPage.pageCreate()
})

When(/^I input form Master Group and submit$/, async () => {
    await FormMBGPage.group(dataTest.IR.groupName)
    await FormMBGPage.modelGroup(dataTest.IR.modelGroupName)
    await FormMBGPage.model(dataTest.IR.modelName)
    await FormMBGPage.status()
    await FormMBGPage.submitForm()
    await browser.pause(5000)
});

Then(/^System should be able to submit Master Group and leading to Master Group page$/, async () => {
    await MasterGroupPage.pageList()
    await MasterGroupPage.expectNewMasterGroupRow1(dataTest.IR.groupName)
});

Given(/^I am on the Master Brand page$/, async () => {
    await MasterBrandPage.open()
    await LoginPage.acceptCookie()
    await browser.pause(10000)
    await MasterBrandPage.page()
})

When(/^I click button 'Tambah' Master Brand$/, async () => {
    await MasterBrandPage.createNew()
});

Then(/^System should be leading to form create Master Brand$/, async () => {
    await FormMasterBrandPage.page()
});

Given(/^I am on the form create Master Brand page$/, async () => {
    await FormMasterBrandPage.pageCreate()
})

When(/^I input form Master Brand and submit$/, async () => {
    await FormMasterBrandPage.SKU(dataTest.IR.SKUName1)
    await FormMasterBrandPage.group(dataTest.IR.groupName)
    await FormMasterBrandPage.uploadImage()
    await FormMasterBrandPage.status()
    await FormMasterBrandPage.submitForm()
    await browser.pause(5000)
    await MasterBrandPage.pageList()
    await MasterBrandPage.expectNewSKURow1(dataTest.IR.groupName, dataTest.IR.SKUName1)

    await MasterBrandPage.createNew()
    await FormMasterBrandPage.page()
    await FormMasterBrandPage.pageCreate()
    await FormMasterBrandPage.SKU(dataTest.IR.SKUName2)
    await FormMasterBrandPage.group(dataTest.IR.groupName)
    await FormMasterBrandPage.uploadImage()
    await FormMasterBrandPage.status()
    await FormMasterBrandPage.submitForm()
    await browser.pause(5000)
    await MasterBrandPage.pageList()
    await MasterBrandPage.expectNewSKURow1(dataTest.IR.groupName, dataTest.IR.SKUName2)
});

Then(/^System should be able to submit Master Brand and leading to Master Brand page$/, async () => {
    await MasterBrandPage.createNew()
    await FormMasterBrandPage.page()
    await FormMasterBrandPage.pageCreate()
    await FormMasterBrandPage.SKU(dataTest.IR.SKUName3)
    await FormMasterBrandPage.group(dataTest.IR.groupName)
    await FormMasterBrandPage.uploadImage()
    await FormMasterBrandPage.status()
    await FormMasterBrandPage.submitForm()
    await browser.pause(5000)
    await MasterBrandPage.pageList()
    await MasterBrandPage.expectNewSKURow1(dataTest.IR.groupName, dataTest.IR.SKUName3)
});

Given(/^I am on the Template Planogram page$/, async () => {
    await TemplatePlanogramPage.open()
    await LoginPage.acceptCookie()
    await loginPage.closeSideMenu()
    await browser.pause(10000)
    await TemplatePlanogramPage.page()
})

When(/^I click button 'Tambah' Template Planogram$/, async () => {
    await TemplatePlanogramPage.createNew()
});

Then(/^System should be leading to form create Template Planogram$/, async () => {
    await FormTemplatePlanogramPage.page()
});

Given(/^I am on the form create Template Planogram page$/, async () => {
    await FormTemplatePlanogramPage.pageCreate()
})

When(/^I input form Template Planogram and submit$/, async () => {
    await FormTemplatePlanogramPage.template(dataTest.IR.templateName)
    await FormTemplatePlanogramPage.group(dataTest.IR.groupName)
    await FormTemplatePlanogramPage.rowxColumn(dataTest.IR.row, dataTest.IR.column)
    await FormTemplatePlanogramPage.addImage()
    await FormTemplatePlanogramPage.competitorBrand(dataTest.IR.competitor)
    await FormTemplatePlanogramPage.status()
    await FormTemplatePlanogramPage.submitForm()
    await browser.pause(10000)
});

Then(/^System should be able to submit Template Planogram and leading to Template Planogram page$/, async () => {
    await TemplatePlanogramPage.pageList()
    await TemplatePlanogramPage.expectNewTemplatePlanogramRow1(dataTest.IR.templateName)
});

When(/^I edit and delete Template Planogram$/, async () => {
    await TemplatePlanogramPage.editTemplatePlanogram()
    await FormTemplatePlanogramPage.pageEdit()
    await FormTemplatePlanogramPage.templateEdit(dataTest.IR.templateNameEdit)
    await FormTemplatePlanogramPage.status()
    await FormTemplatePlanogramPage.submitForm()
    await TemplatePlanogramPage.pageList()
});

Then(/^System should be delete Template Planogram$/, async () => {
    await TemplatePlanogramPage.deleteTemplatePlanogram()
    await browser.pause(5000)
});

When(/^I edit and delete Master Brand$/, async () => {
    await MasterBrandPage.open()
    await LoginPage.acceptCookie()
    await loginPage.closeSideMenu()
    await browser.pause(10000)
    await MasterBrandPage.page1()
    await MasterBrandPage.editSKU()
    await FormMasterBrandPage.pageEdit()
    await FormMasterBrandPage.status()
    await FormMasterBrandPage.submitForm()
    await MasterBrandPage.pageList()
    await MasterBrandPage.deleteSKU()
    await browser.pause(5000)

    await MasterBrandPage.editSKU()
    await FormMasterBrandPage.pageEdit()
    await FormMasterBrandPage.status()
    await FormMasterBrandPage.submitForm()
    await MasterBrandPage.pageList()
    await MasterBrandPage.deleteSKU()
    await browser.pause(5000)

    await MasterBrandPage.editSKU()
    await FormMasterBrandPage.pageEdit()
    await FormMasterBrandPage.status()
    await FormMasterBrandPage.submitForm()
    await MasterBrandPage.pageList()
});

Then(/^System should be delete Master Brand$/, async () => {
    await MasterBrandPage.deleteSKU()
    await browser.pause(5000)
});

When(/^I edit and delete Master Group$/, async () => {
    await MasterGroupPage.open()
    await LoginPage.acceptCookie()
    await loginPage.closeSideMenu()
    await browser.pause(10000)
    await MasterGroupPage.page1()
    await MasterGroupPage.editMasterGroup()
    await FormMBGPage.pageEdit()
    await FormMBGPage.status()
    await FormMBGPage.submitForm()
    await MasterGroupPage.pageList()
});

Then(/^System should be delete Master Group$/, async () => {
    await MasterGroupPage.deleteMasterGroup()
    await browser.pause(5000)
});