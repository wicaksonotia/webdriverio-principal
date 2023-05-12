import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import MainmenuPage from "../../pageobjects/mainmenu.page";
import EmployeeMappingPage from '../../pageobjects/employeemapping/employeemapping.page';
import FormEmployeeMappingPage from '../../pageobjects/employeemapping/form.page';
const dataTest = require('../../testdata/dte.data');

    // use allure API for allure reporter
    allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[PRINCIPAL] 35. CRUD Employee Mapping (Transfer Bank)');
    allureReporter.addFeature('CRUD Employee Mapping (Transfer Bank)');

// Scenario Outline: As a user, I can create, read, update and delete employee - transfer bank
Given(/^I am on the Employee Mapping page$/, async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await MainmenuPage.EmployeeMapping()
    //await EmployeeMappingPage.page()
    await EmployeeMappingPage.pageList()
})

When(/^I click button 'Tambah'$/, async () => {
    await EmployeeMappingPage.createNew()
});

Then(/^System should be leading to form create Employee Mapping$/, async () => {
    await FormEmployeeMappingPage.page()
});

Given(/^I am on the form create Employee Mapping page$/, async () => {
    await FormEmployeeMappingPage.pageCreate()
})

When(/^I input form with metode pembayaran 'Transfer Bank' and submit$/, async () => {
    await FormEmployeeMappingPage.name(dataTest.employeeMapping.searchByNamaEmployee1)
    await browser.pause(2000)
    await FormEmployeeMappingPage.metodeTB()
    await browser.pause(2000)
    await FormEmployeeMappingPage.zone()
    await browser.pause(2000)
    // await FormEmployeeMappingPage.region()
    // await FormEmployeeMappingPage.area()
    await FormEmployeeMappingPage.submitForm()
    await browser.pause(5000)
    // await FormEmployeeMappingPage.notification()
    await FormEmployeeMappingPage.clearName()
    await FormEmployeeMappingPage.name(dataTest.employeeMapping.searchByNamaEmployee2)
    await FormEmployeeMappingPage.zone()
    await FormEmployeeMappingPage.submitForm()
    // await browser.pause(3000)
    // await FormEmployeeMappingPage.submitForm()
});

Then(/^System should be able to submit Employee Mapping and leading to Employee Mapping page$/, async () => {
    // await EmployeeMappingPage.page()
    await EmployeeMappingPage.pageList()
});

When(/^I search a employee$/, async () => {
    await EmployeeMappingPage.search(dataTest.employeeMapping.email)
});

Then(/^System should be display employee data based on search keyword$/, async () => {
    await EmployeeMappingPage.expectNewEmployeeRow1(dataTest.employeeMapping.employee, dataTest.employeeMapping.email, dataTest.employeeMapping.area, dataTest.employeeMapping.metodeTB)
});

When(/^I edit and delete employee$/, async () => {
    await EmployeeMappingPage.open()
    await LoginPage.acceptCookie()
    await browser.pause(10000)
    await EmployeeMappingPage.page()
    await EmployeeMappingPage.search(dataTest.employeeMapping.email)
    await EmployeeMappingPage.searchResult(dataTest.employeeMapping.email)
    await EmployeeMappingPage.editTask()
    await browser.pause(10000)
    await FormEmployeeMappingPage.pageEdit()
    await browser.pause(10000)
    await FormEmployeeMappingPage.clearName()
    await FormEmployeeMappingPage.name(dataTest.employeeMapping.searchByNamaEmployeeEdit)
    await FormEmployeeMappingPage.zone()
    await FormEmployeeMappingPage.submitForm()
    await EmployeeMappingPage.pageList()
    await EmployeeMappingPage.search(dataTest.employeeMapping.emailEdit)
    await EmployeeMappingPage.searchResult(dataTest.employeeMapping.emailEdit)
    await EmployeeMappingPage.deleteTask()
});

Then(/^System should be delete employee$/, async () => {
    await EmployeeMappingPage.search(dataTest.employeeMapping.emailEdit)
    await browser.pause(5000)
});