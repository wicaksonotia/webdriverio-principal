import ChromeDriverService from "wdio-chromedriver-service";
import Page from "../page";
const path = require("path");
import { setStartEndDate } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class FormSpinTheWheelPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerSpinTheWheel");
  }
  get btnCreate() {
    return $("#btn-create-trade");
  }

  get tab() {
    return $$('[class="mat-tab-label mat-ripple ng-star-inserted"]');
  }

  //tab Spin The Wheel
  get inpNamaProgram() {
    return $('[placeholder="Nama Program"]');
  }
  get ddTP() {
    return $('[formcontrolname="trade_creator_id"]');
  }
  get searchTP() {
    return $('[aria-label="dropdown search"]');
  }
  get selectTP() {
    return $$('[class="mat-option ng-star-inserted mat-active"]');
  }

  get selectDate() {
    return $$('[aria-label="Open calendar"]');
  }

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

  //tabAudience
  get redBox() {
    return $('[class="box-red"]');
  }
  get audienceFilterPB() {
    return $('[value="population-blast"]');
  }
  get listbox() {
    return $$('[role="listbox"]');
  }
  get option() {
    return $$('[role="option"]');
  }
  get audienceFilterFP() {
    return $('[value="fixed-panel"]');
  }
  get btnExportImport() {
    return $$('[class="is-danger mat-raised-button"]');
  }
  get btnKirim() {
    return $('[class="mat-raised-button mat-primary"]');
  }
  get btnCheck() {
    return $$('[class="confirmation-button mat-raised-button"]');
  }

  //tabPengaturanMekanisme
  get inpFrekBelanja() {
    return $('[formcontrolname="shop_freq"]');
  }
  get inpFrekReward() {
    return $('[formcontrolname="reward_freq"]');
  }
  get rbPembatasanProdukKategoriExclude() {
    return $$('[class="mat-radio-container"]');
  }
  get clPembatasanProdukKategoriExclude() {
    return $$('[class="mat-radio-container"]');
  }
  get ddBatasanProdukKategori() {
    return $('[formcontrolname="category"]');
  }
  get ddBatasanExclude() {
    return $('[formcontrolname="category_srcc"]');
  }
  get option() {
    return $$('[role="option"]');
  }
  get inpMinTransaction() {
    return $('[formcontrolname="minimum_transaction"]');
  }
  get inpLimitSpin() {
    return $('[formcontrolname="limit_spin"]');
  }
  get inpVariasiKoin() {
    return $('[formcontrolname="coin_variation"]');
  }
  get inpCoinSliceProb() {
    return $$('[type="number"]');
  }

  //tabPreview
  get inpPreviewHeader() {
    return $('[formcontrolname="preview_header"]');
  }
  get uploadImage() {
    return $('[class="rectangle-16"]');
  }
  get btnPublish() {
    return $('[class="ml-24 confirmation-button mat-raised-button"]');
  }

  get btnSimpan() {
    return $('[class="confirmation-button mat-raised-button"]');
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    // await browser.switchToParentFrame()
    // await browser.pause(10000)
    // await browser.switchToFrame(2)
    // await browser.pause(5000)
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 60s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async pageList() {
    // await browser.switchToParentFrame()
    // await browser.pause(10000)
    // await browser.switchToFrame(3)
    // await browser.pause(5000)
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 60s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async pageCreate() {
    await expect(this.titlePage).toHaveText("Buat XP");
    await expect(browser).toHaveUrlContaining("dte/spin-the-wheel/create");
  }

  async name(programName) {
    await this.inpNamaProgram.setValue(programName);
  }

  async tradeProgram(tp) {
    await this.ddTP.click();
    await this.searchTP.addValue(tp);
    await browser.pause(5000);
    await this.selectTP[0].click();
    await browser.pause(5000);
  }

  async date() {
    // await expect(this.selectDate[0]).toBeClickable();
    // await this.selectDate[0].click();
    // await this.popUpCalendar.waitForExist();
    // await this.popUpCalendar.$$("tr")[1].$$("td")[3].$("div").click(); //baris x kolom, contoh: 1,4: 6 Januari 2022
    // await browser.pause(2000);
    // await expect(this.selectDate[1]).toBeClickable();
    // await this.selectDate[1].click();
    // await this.popUpCalendar.waitForExist();
    // await this.popUpCalendar.$$("tr")[2].$$("td")[0].$("div").click(); //contoh: 4,6: 29 Januari 2022
    // await browser.pause(2000);
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
    await this.btnSimpan.click();
    await browser.pause(3000);
  }

  async viewTabAudience() {
    await browser.pause(2000);
    await this.tab[0].click();
    await browser.pause(2000);
  }

  async populationBlast() {
    await browser.pause(20000);
    // await this.btnCheck[1].scrollIntoView()
    await this.audienceFilterPB.click();
    await browser.pause(30000);
    await this.listbox[0].click();
    await browser.pause(7000);
    await this.option[5].click();
    await browser.pause(7000);
    // await this.redBox.click()
    await browser.keys("Escape");
    await browser.pause(7000);
    await this.listbox[1].click();
    await browser.pause(7000);
    await this.option[2].click();
    await browser.pause(7000);
    // await this.redBox.click()
    await browser.keys("Escape");
    await browser.pause(7000);
    await this.listbox[2].click();
    await browser.pause(7000);
    await this.option[2].click();
    await browser.pause(7000);
    // await this.redBox.click()
    await browser.keys("Escape");
    await browser.pause(7000);
    await this.btnCheck[0].scrollIntoView();
    await this.listbox[3].click();
    await browser.pause(7000);
    await this.option[1].click();
    await browser.pause(7000);
    // await browser.pause(5000)
    // await this.audienceFilterPB.click()
    await browser.keys("Escape");
    await browser.pause(8000);
    // await this.redBoxclick()
    // await browser.keys("Escape")
    await expect(this.btnCheck[0]).toBeClickable();
    // await this.btnCheck[1].click()
    await this.btnCheck[0].click();
    await browser.pause(10000);
    await expect(this.btnSimpan).toBeClickable();
    await this.btnSimpan.click();
    await browser.pause(5000);
  }

  async fixedPanel() {
    await this.btnCheck[1].scrollIntoView();
    await expect(this.audienceFilterFP).toBeClickable();
    await this.audienceFilterFP.click();
    await this.btnExportImport[1].click();
    await browser.pause(25000);
    await this.btnKirim.click();
    // await expect(this.btnExportImport[1]).toBeClickable()
    await this.btnExportImport[0].click();
    await browser.pause(8000);
    await this.btnCheck[1].click();
    await browser.pause(5000);
    await expect(this.btnSimpan).toBeClickable();
    await this.btnSimpan.click();
    await browser.pause(5000);
    await this.btnSimpan.click();
    await browser.pause(5000);
  }

  async viewTabPengaturanMekanisme() {
    await this.tab[1].scrollIntoView();
    await this.tab[1].click();
  }

  async pengaturanSTWPB(
    frekbel,
    frekrew,
    min,
    limit,
    varkoin,
    coin1,
    slice1,
    prob1,
    coin2,
    slice2,
    prob2,
    coin3,
    slice3,
    prob3
  ) {
    await this.inpFrekBelanja.addValue(frekbel);
    await this.inpFrekReward.addValue(frekrew);
    // await this.rbPembatasanProdukKategoriExclude[0].click()
    // await browser.pause(1500)
    // await this.clPembatasanProdukKategoriExclude[1].click()
    // await browser.pause(1500)
    // await this.ddBatasanProdukKategori.click()
    // await browser.pause(1500)
    // await this.option[8].click()
    // await this.clPembatasanProdukKategoriExclude[1].click()
    await this.inpMinTransaction.scrollIntoView();
    await this.inpMinTransaction.addValue(min);
    await this.inpLimitSpin.addValue(limit);
    await this.inpVariasiKoin.addValue(varkoin);
    await this.btnSimpan.scrollIntoView();
    await browser.pause(1500);
    await this.inpCoinSliceProb[0].addValue(coin1);
    await this.inpCoinSliceProb[1].addValue(slice1);
    await this.inpCoinSliceProb[2].addValue(prob1);
    await this.inpCoinSliceProb[3].addValue(coin2);
    await this.inpCoinSliceProb[4].addValue(slice2);
    await this.inpCoinSliceProb[5].addValue(prob2);
    await this.inpCoinSliceProb[6].addValue(coin3);
    await this.inpCoinSliceProb[7].addValue(slice3);
    await this.inpCoinSliceProb[8].addValue(prob3);
    await this.btnSimpan.click();
    await browser.pause(20000);
  }

  async pengaturanSTWFP(
    frekbel,
    frekrew,
    min,
    limit,
    varkoin,
    coin1,
    slice1,
    prob1,
    coin2,
    slice2,
    prob2
  ) {
    await this.inpFrekBelanja.addValue(frekbel);
    await this.inpFrekReward.addValue(frekrew);
    // await this.rbPembatasanProdukKategoriExclude[1].click()
    // await browser.pause(1500)
    // await this.clPembatasanProdukKategoriExclude[4].click()
    // await browser.pause(1500)
    // await this.ddBatasanExclude.click()
    // await browser.pause(1500)
    // await this.option[8].click()
    // await browser.keys("Escape")
    // await this.clPembatasanProdukKategoriExclude[4].click()
    await this.inpMinTransaction.scrollIntoView();
    await this.inpMinTransaction.addValue(min);
    await this.inpLimitSpin.addValue(limit);
    await this.inpVariasiKoin.addValue(varkoin);
    await this.btnSimpan.scrollIntoView();
    await browser.pause(1500);
    await this.inpCoinSliceProb[0].addValue(coin1);
    await this.inpCoinSliceProb[1].addValue(slice1);
    await this.inpCoinSliceProb[2].addValue(prob1);
    await this.inpCoinSliceProb[3].addValue(coin2);
    await this.inpCoinSliceProb[4].addValue(slice2);
    await this.inpCoinSliceProb[5].addValue(prob2);
    // await this.btnSimpan.click()
    await this.btnSimpan.click();
    await browser.pause(10000);
  }

  async viewTabPreview() {
    await this.tab[2].scrollIntoView();
    await this.tab[2].click();
  }

  async publish(preview) {
    // await this.uploadImage.click()
    await this.inpPreviewHeader.scrollIntoView();
    await browser.pause(25000);
    await this.inpPreviewHeader.addValue(preview);
    await browser.pause(3000);
    await this.btnSimpan.scrollIntoView();
    await this.btnSimpan.click();
    await browser.pause(2000);
    await this.btnPublish.click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/xp/edit/51/xp");
  }
}

export default new FormSpinTheWheelPage();
