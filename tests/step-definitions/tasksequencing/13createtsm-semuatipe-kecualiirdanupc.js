import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import TaskSequencingPage from "../../pageobjects/tasksequencing/tsm.page";
import FormCreatePage from "../../pageobjects/tasksequencing/formcreate.page";
import MissionBuilderPage from "../../pageobjects/tasksequencing/missionbuilder.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 13. Create Task Sequencing Management (semua tipe kecuali UPC dan IR)"
);
allureReporter.addFeature(
  "Create Task Sequencing Management (semua tipe kecuali UPC dan IR)"
);

Given(/^I am on the Task Sequencing page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.taskSequencing();
  await TaskSequencingPage.page();
});
When(/^I create task sequencing and click button Submit$/, async () => {
  await TaskSequencingPage.createTaskSequencing();
  await FormCreatePage.formAddPage();
  await FormCreatePage.createTSM(
    dataTest.taskSequencing.nameTask13,
    dataTest.tradeProgram.namaTP4,
    dataTest.audience.audienceToko2
  );
  await FormCreatePage.submitTsm();
});
Then(
  /^System should be submitted data and leading to Mission Builder page$/,
  async () => {
    await MissionBuilderPage.page();
    await MissionBuilderPage.pageCreate();
  }
);
When(/^I add Event Misi$/, async () => {
  await MissionBuilderPage.createMissionBuilder();
});
When(/^setting Misi$/, async () => {
  await MissionBuilderPage.setMission();
  await MissionBuilderPage.verificationPerQuestion();
  await MissionBuilderPage.settingMissionWithoutPinUp(
    dataTest.templateTugas.searchByName13
  );
  await MissionBuilderPage.setCoin13(
    dataTest.taskSequencing.coinSub1,
    dataTest.taskSequencing.coinVer1,
    dataTest.taskSequencing.coinSub2,
    dataTest.taskSequencing.coinVer2,
    dataTest.taskSequencing.coinSub3,
    dataTest.taskSequencing.coinVer3,
    dataTest.taskSequencing.coinSub4,
    dataTest.taskSequencing.coinVer4,
    dataTest.taskSequencing.coinSub5,
    dataTest.taskSequencing.coinVer5,
    dataTest.taskSequencing.coinSub6,
    dataTest.taskSequencing.coinVer6,
    dataTest.taskSequencing.coinSub7,
    dataTest.taskSequencing.coinVer7,
    dataTest.taskSequencing.coinSub8,
    dataTest.taskSequencing.coinVer8,
    dataTest.taskSequencing.coinSub9,
    dataTest.taskSequencing.coinVer9,
    dataTest.taskSequencing.coinSub10,
    dataTest.taskSequencing.coinVer10,
    dataTest.taskSequencing.coinSub11,
    dataTest.taskSequencing.coinVer11,
    dataTest.taskSequencing.coinSub12,
    dataTest.taskSequencing.coinVer12,
    dataTest.taskSequencing.coinSub13,
    dataTest.taskSequencing.coinVer13,
    dataTest.taskSequencing.coinSub14,
    dataTest.taskSequencing.coinVer14
  );
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.setMission();
});
When(/^I save mission builder$/, async () => {
  await MissionBuilderPage.simpan();
});
Then(
  /^System should be leading to Task Sequencing page and success save new Tsm$/,
  async () => {
    await TaskSequencingPage.page();
  }
);
When(/^I edit and submit task sequencing$/, async () => {
  await TaskSequencingPage.editTask();
  await FormCreatePage.page();
  await FormCreatePage.pageEdit();
  await FormCreatePage.submitEditTsm();
});
Then(
  /^System should be update data and leading to Mission Builder page$/,
  async () => {
    await MissionBuilderPage.pageEdit();
  }
);
When(/^I publish mission builder$/, async () => {
  await MissionBuilderPage.setMissionEdit();
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
});
Then(
  /^System should be leading to Task Sequencing page and success publish Tsm$/,
  async () => {
    await TaskSequencingPage.page();
  }
);
When(/^I view detail task$/, async () => {
  await TaskSequencingPage.detailTask(dataTest.taskSequencing.nameTask13);
  await FormCreatePage.page();
  await FormCreatePage.formDetailPage();
  await FormCreatePage.cekDetail();
});
Then(/^System should be show detail mission$/, async () => {
  await MissionBuilderPage.page();
  await MissionBuilderPage.pageDetail();
});
