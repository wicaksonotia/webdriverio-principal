import Page from "../page";
import { setStartEndDate } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class MissionBuilderPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerMissionBuilder");
  } //create/detail
  get titlePageEdit() {
    return $("#headerEditMissionBuilder");
  }

  //Event
  get btnMisi() {
    return $("#btn-misi");
  }
  get btnPushNotif() {
    return $("#btn-push_notif");
  }
  get btnPopUpNotif() {
    return $("#btn-pop_up_notif");
  }
  get btnCoin() {
    return $("#btn-coin");
  }
  //Flow Control
  get btnSplitDecision() {
    return $("#btn-split_decision");
  }
  get btnYaTidak() {
    return $$('[style="font-size: 12px; text-decoration: none;"]');
  }
  get btnWaktuTunggu() {
    return $("#btn-tunggu");
  }
  get btnEnd() {
    return $("#btn-end");
  }

  get cardMission() {
    return $("#card-mission");
  } //pas edit belum ada id-nya

  get cardMissionEdit() {
    return $$("div.cardContainer");
  }

  get cardTime() {
    return $("#card-time");
  }

  get inputWaktuTunggu() {
    return $('[placeholder="Waktu Tunggu"]');
  }

  get dropdownTipe() {
    return $('[formcontrolname="type"]');
  }

  get optionJam() {
    return $('[value="hour"]');
  }

  get btnSimpanWaitingPeriode() {
    return $('[class="mat-raised-button mat-success"]');
  }
  get cardMission2() {
    return $$("#card-mission");
  }

  get cardFinish() {
    return $("#card-finish");
  }

  get namaTsm() {
    return $(
      "div:nth-child(1) > mat-card > div > div:nth-child(1) > p:nth-child(3)"
    );
  }

  get btnSimpan() {
    return $("#btn-submit-mission-builder");
  }
  get btnSaveAsDraft() {
    return $("#btn-save-as-draft");
  }
  get btnPublish() {
    return $("#btn-publish");
  }
  get btnConfirmPublish() {
    return $("#btn-confirm-import");
  }

  //Pengaturan Misi
  get headerCardMission() {
    return $("#header-card-mission");
  }
  get checkboxPinUpMisi() {
    return $("#pin-up");
  }
  get checkboxRewardHadiahNonCoin() {
    return $("#nonCoinReward");
  } //masih pakai default id Angular
  get dropdownTemplateMisi() {
    return $('//*[@id="task-template-id"]');
  }
  get searchTemplateMisi() {
    return $("#select-search-template div input");
  }
  get selectTemplateMisi() {
    return $$('[role="option"]');
  } //Misi 01
  get dropdownNamaLainMisi() {
    return $("#task-template-other-name-id");
  }
  get searchNamaLainMisi() {
    return $('div > input[id="search-namaLain"]');
  }
  get selectNamaLainMisi() {
    return $$('[role="option"]');
  } //Belum ada id, Misi 01
  get startDate() {
    return $('div > input[formcontrolname="start_date"]');
  }
  get endDate() {
    return $('div > input[formcontrolname="end_date"]');
  }
  get popUpCalendar() {
    return $("mat-datepicker-content tbody.mat-calendar-body");
  }
  get startTime() {
    return $('div > input[formcontrolname="start_time"]');
  }
  get endTime() {
    return $('div > input[formcontrolname="end_time"]');
  }
  get popUpTimeStart() {
    return $("div.clock-face__container.ng-star-inserted");
  }
  get popUpTimeEnd() {
    return $("div.clock-face__inner.ng-star-inserted");
  }
  get btnTimePicker() {
    return $$('[class="timepicker-button"]');
  }
  get pushToFF() {
    return $("#toggle-pushToFF");
  }
  get verifikasiFF() {
    return $("#toggle-verifikasiFF");
  } //
  get verifikasiManual() {
    return $("#toggle-verifikasiManual");
  }
  get coinSubmission() {
    return $("#coinSubmission");
  } //input[formcontrolname="coin_submission"]
  get coinVerification() {
    return $("#coinVerification");
  }
  get coinSubmission1() {
    return $$('[formcontrolname="coin_submission"]');
  } //input[formcontrolname="coin_submission"]
  get coinVerification1() {
    return $$('[formcontrolname="coin_verification"]');
  }
  get XPSubmission() {
    return $('[placeholder="XP Submission"]');
  }
  get XPVerification() {
    return $('[placeholder="XP Verification"]');
  }
  get btnSimpanSetMisi() {
    return $("#btn-submit-card-mission");
  }
  get btnBatalSetMisi() {
    return $("#btn-cancel-card-mission");
  }
  get checkboxVerificationPerQst() {
    return $("#verification-per-question");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await this.titlePage.waitForExist();
    await expect(this.titlePage).toBeExisting({ timeout: 10000 });
    await this.titlePage.isDisplayed();
    await expect(this.titlePage).toBeDisplayed({ timeout: 10000 });
    // await this.namaTsm.waitForExist();
    // await expect(this.namaTsm).toBeExisting()
    // await expect(this.namaTsm).toHaveText(nameTSM)
  }

  async pageCreate() {
    await expect(this.titlePage).toHaveText("Buat Mission Builder");
    await expect(browser).toHaveUrlContaining("dte/mission-builder/create");
  }

  async pageEdit() {
    await this.titlePageEdit.waitForExist();
    await expect(this.titlePageEdit).toBeExisting();
    await expect(this.titlePageEdit).toBeDisplayed();
    await expect(this.titlePageEdit).toHaveText("Edit Mission Builder");
    await expect(browser).toHaveUrlContaining("dte/mission-builder/edit");
    // await expect(this.namaTsm).toHaveText(nameTSM)
  }

  async pageDetail() {
    await expect(this.titlePage).toHaveText("Detil Mission Builder");
    await expect(browser).toHaveUrlContaining("dte/mission-builder/detail");
    await browser.pause(2000);
  }

  async createMissionBuilder() {
    await this.btnMisi.waitForClickable();
    await expect(this.btnMisi).toBeClickable();
    await this.btnMisi.click();
    await browser.pause(3000);
    await expect(this.cardMission).toBeDisplayed({ timeout: 6000 });
    await this.btnEnd.waitForClickable();
    await expect(this.btnEnd).toBeClickable();
    await this.btnEnd.click();
    await expect(this.cardFinish).toBeDisplayed({ timeout: 6000 });
    await browser.pause(3000);
  }

  async createMissionBuilder2() {
    await this.btnMisi.waitForClickable();
    await expect(this.btnMisi).toBeClickable();
    await this.btnMisi.click();
    await browser.pause(3000);
    await this.btnSplitDecision.waitForClickable();
    await expect(this.btnSplitDecision).toBeClickable();
    await this.btnSplitDecision.click();
    await browser.pause(3000);
    await this.btnYaTidak[0].scrollIntoView();
    await this.btnYaTidak[0].click();
    await browser.pause(3000);
    await this.btnMisi.waitForClickable();
    await expect(this.btnMisi).toBeClickable();
    await this.btnMisi.click();
    await browser.pause(3000);
    await expect(this.cardMission).toBeDisplayed({ timeout: 6000 });
    await this.btnEnd.waitForClickable();
    await expect(this.btnEnd).toBeClickable();
    await this.btnEnd.click();
    await expect(this.cardFinish).toBeDisplayed({ timeout: 6000 });
    await browser.pause(3000);
    await this.btnYaTidak[1].click();
    await browser.pause(3000);
    await this.btnWaktuTunggu.waitForClickable();
    await expect(this.btnWaktuTunggu).toBeClickable();
    await this.btnWaktuTunggu.click();
    await expect(this.cardMission).toBeDisplayed({ timeout: 6000 });
    await this.btnEnd.waitForClickable();
    await expect(this.btnEnd).toBeClickable();
    await this.btnEnd.click();
    await browser.pause(3000);
  }

  async verificationPerQuestion() {
    await this.checkboxVerificationPerQst.waitForClickable();
    await this.checkboxVerificationPerQst.click();
  }

  async setMission() {
    await this.cardMission.waitForClickable();
    await expect(this.cardMission).toBeClickable();
    await this.cardMission.doubleClick();
    await this.headerCardMission.waitForDisplayed();
    await browser.pause(3000);
  }

  async setMission2() {
    await this.cardMission2[1].waitForClickable();
    await expect(this.cardMission2[1]).toBeClickable();
    await this.cardMission2[1].doubleClick();
    await this.headerCardMission.waitForDisplayed();
    await browser.pause(3000);
  }

  async waitingPeriod() {
    await this.cardTime.waitForClickable();
    await expect(this.cardTime).toBeClickable();
    await this.cardTime.doubleClick();
    await this.cardTime.waitForDisplayed();
    await browser.pause(3000);
  }

  async setWaitingPeriod(inputWaktu) {
    await this.inputWaktuTunggu.setValue(inputWaktu);
    await browser.pause(2000);
    await this.dropdownTipe.waitForClickable();
    await this.dropdownTipe.click();
    await browser.pause(2000);
    await this.optionJam.scrollIntoView();
    await this.optionJam.click();
    await browser.pause(2000);
    await this.btnSimpanWaitingPeriode.click();
    await browser.pause(3000);
  }

  async setMissionEdit() {
    await this.cardMissionEdit[0].waitForClickable();
    await expect(this.cardMissionEdit[0]).toBeClickable();
    await this.cardMissionEdit[0].doubleClick();
    await this.headerCardMission.waitForDisplayed();
    await browser.pause(3000);
  }

  //with Pin Up
  async setPinUpMisi() {
    await this.checkboxPinUpMisi.click();
  }

  //Scenario 16, 17, 18, 19 without Pin Up
  async settingMissionWithoutPinUp(templateMisi) {
    await this.dropdownTemplateMisi.waitForClickable();
    await this.dropdownTemplateMisi.click();
    await this.searchTemplateMisi.setValue(templateMisi);
    await browser.pause(5000);
    await expect(this.selectTemplateMisi[0].$("span")).toHaveText(templateMisi);
    await this.selectTemplateMisi[0].click();
    await browser.pause(5000);
    // await this.dropdownNamaLainMisi.click();
    // await this.searchNamaLainMisi.setValue(namaLainMisi);
    // await browser.pause(3000);
    // await this.selectNamaLainMisi.click();

    await setStartEndDate(this.startDate, this.endDate, this.popUpCalendar);
    await this.startTime.click();
    await browser.pause(3000);
    await this.popUpTimeStart.waitForExist();
    await this.popUpTimeStart.$$("div")[2].$("span").click();
    await this.btnTimePicker[1].click();
    await browser.pause(3000);

    await this.endTime.click();
    await browser.pause(3000);
    await this.popUpTimeEnd.waitForExist();
    await this.popUpTimeEnd.$$("div")[9].$("span").click();
    await this.btnTimePicker[1].click();
    await browser.pause(3000);
  }
  //Scenario 19
  async setPushToFF() {
    await this.pushToFF.waitForClickable();
    await this.pushToFF.click();
  }

  //Scenario
  async setVerifikasiFF() {
    await this.verifikasiFF.waitForClickable();
    await this.verifikasiFF.click();
  }

  //Scenario 13
  async setCoin13(
    coinSubmission1,
    coinVerification1,
    coinSubmission2,
    coinVerification2,
    coinSubmission3,
    coinVerification3,
    coinSubmission4,
    coinVerification4,
    coinSubmission5,
    coinVerification5,
    coinSubmission6,
    coinVerification6,
    coinSubmission7,
    coinVerification7,
    coinSubmission8,
    coinVerification8,
    coinSubmission9,
    coinVerification9,
    coinSubmission10,
    coinVerification10,
    coinSubmission11,
    coinVerification11,
    coinSubmission12,
    coinVerification12,
    coinSubmission13,
    coinVerification13,
    coinSubmission14,
    coinVerification14
  ) {
    await this.coinSubmission1[0].scrollIntoView();
    await this.coinSubmission1[0].setValue(coinSubmission1);
    await this.coinVerification1[0].setValue(coinVerification1);
    await this.coinSubmission1[1].scrollIntoView();
    await this.coinSubmission1[1].setValue(coinSubmission2);
    await this.coinVerification1[1].setValue(coinVerification2);
    await this.coinSubmission1[2].scrollIntoView();
    await this.coinSubmission1[2].setValue(coinSubmission3);
    await this.coinVerification1[2].setValue(coinVerification3);
    await this.coinSubmission1[3].scrollIntoView();
    await this.coinSubmission1[3].setValue(coinSubmission4);
    await this.coinVerification1[3].setValue(coinVerification4);
    await this.coinSubmission1[4].scrollIntoView();
    await this.coinSubmission1[4].setValue(coinSubmission5);
    await this.coinVerification1[4].setValue(coinVerification5);
    await this.coinSubmission1[5].scrollIntoView();
    await this.coinSubmission1[5].setValue(coinSubmission6);
    await this.coinVerification1[5].setValue(coinVerification6);
    await this.coinSubmission1[6].scrollIntoView();
    await this.coinSubmission1[6].setValue(coinSubmission7);
    await this.coinVerification1[6].setValue(coinVerification7);
    await this.coinSubmission1[7].scrollIntoView();
    await this.coinSubmission1[7].setValue(coinSubmission8);
    await this.coinVerification1[7].setValue(coinVerification8);
    await this.coinSubmission1[8].scrollIntoView();
    await this.coinSubmission1[8].setValue(coinSubmission9);
    await this.coinVerification1[8].setValue(coinVerification9);
    await this.coinSubmission1[9].scrollIntoView();
    await this.coinSubmission1[9].setValue(coinSubmission10);
    await this.coinVerification1[9].setValue(coinVerification10);
    await this.coinSubmission1[10].scrollIntoView();
    await this.coinSubmission1[10].setValue(coinSubmission11);
    await this.coinVerification1[10].setValue(coinVerification11);
    await this.coinSubmission1[11].scrollIntoView();
    await this.coinSubmission1[11].setValue(coinSubmission12);
    await this.coinVerification1[11].setValue(coinVerification12);
    await this.coinSubmission1[12].scrollIntoView();
    await this.coinSubmission1[12].setValue(coinSubmission13);
    await this.coinVerification1[12].setValue(coinVerification13);
    await this.coinSubmission1[13].scrollIntoView();
    await this.coinSubmission1[13].setValue(coinSubmission14);
    await this.coinVerification1[13].setValue(coinVerification14);
  }

  //Scenario 14
  async setCoin14(
    coinSubmission1,
    coinVerification1,
    coinSubmission2,
    coinVerification2,
    coinSubmission3,
    coinVerification3
  ) {
    await this.coinSubmission1[0].scrollIntoView();
    await this.coinSubmission1[0].setValue(coinSubmission1);
    await this.coinVerification1[0].setValue(coinVerification1);
    await this.coinSubmission1[1].scrollIntoView();
    await this.coinSubmission1[1].setValue(coinSubmission2);
    await this.coinVerification1[1].setValue(coinVerification2);
    await this.coinSubmission1[2].scrollIntoView();
    await this.coinSubmission1[2].setValue(coinSubmission3);
    await this.coinVerification1[2].setValue(coinVerification3);
  }

  //Scenario 16, 17, 18
  async setVerifikasiManual() {
    await this.verifikasiManual.waitForClickable();
    await this.verifikasiManual.click();
  }
  //Scenario 18
  async setCoinSubmission(coinSubmission) {
    await this.coinSubmission.setValue(coinSubmission);
  }
  //Scenario 16, 17
  async setCoin(coinSubmission, coinVerification) {
    await this.coinSubmission.setValue(coinSubmission);
    await this.coinVerification.setValue(coinVerification);
  }

  //Scenario 42
  async setXP(XPSubmission, XPVerification) {
    await this.XPSubmission.setValue(XPSubmission);
    await this.XPVerification.setValue(XPVerification);
  }

  async simpanSettingMission() {
    await this.btnSimpanSetMisi.waitForClickable();
    await expect(this.btnSimpanSetMisi).toBeClickable();
    await this.btnSimpanSetMisi.click();
    await browser.pause(3000);
  }

  async batalSettingMission() {
    await this.btnBatalSetMisi.waitForClickable();
    await expect(this.btnBatalSetMisi).toBeClickable();
    await this.btnBatalSetMisi.click();
    // await browser.pause(3000)
  }

  async simpan() {
    await this.btnSimpan.waitForClickable();
    await expect(this.btnSimpan).toBeClickable();
    await this.btnSimpan.click();
  }

  async publish() {
    await this.btnPublish.waitForClickable();
    await expect(this.btnPublish).toBeClickable();
    await this.btnPublish.click();
  }

  async confirmPublish() {
    await this.btnConfirmPublish.waitForClickable();
    await expect(this.btnConfirmPublish).toBeClickable();
    await this.btnConfirmPublish.click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("");
  }
}

export default new MissionBuilderPage();
