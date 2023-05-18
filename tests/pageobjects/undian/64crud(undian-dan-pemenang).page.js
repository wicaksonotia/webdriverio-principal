import Page from "../page";
import { setStartEndDate } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class crudPemenangdanUndian extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerUndian");
  }
  get titleTabPage() {
    return $$('[class="mat-tab-label-content"]');
  }
  get contentHeader() {
    return $("#contentHeader");
  }
  get titleUbahUndian() {
    return $("#contentHeader > div > div.white-fg > span:nth-child(5)");
  }
  get tab() {
    return $('[class="mat-tab-labels"]');
  }
  get inputNamaProgram() {
    return $('[formcontrolname="name"]');
  }
  get inputJumlahKoin() {
    return $('[formcontrolname="coin"]');
  }
  get calendarAwalPenukaranKupon() {
    return $('[formcontrolname="start_date"]');
  }
  get calendarBerakhirPenukaranKupon() {
    return $('[formcontrolname="end_date"]');
  }
  get calendarPengumumanPemenang() {
    return $('[formcontrolname="announcement_date"]');
  }
  get popUpCalendar() {
    return $("mat-datepicker-content tbody.mat-calendar-body");
  }
  get popupJamTerbit() {
    return $('[formcontrolname="start_time"]');
  }
  get popupJamBerakhir() {
    return $('[formcontrolname="end_time"]');
  }
  get popupJamPengumumanPemenang() {
    return $('[formcontrolname="announcement_time"]');
  }
  //jam
  get jam1() {
    return $('[style="transform: rotateZ(-30deg);"]');
  }
  get jam2() {
    return $('[style="transform: rotateZ(-60deg);"]');
  }
  get jam3() {
    return $('[style="transform: rotateZ(-90deg);"]');
  }
  get jam4() {
    return $('[style="transform: rotateZ(-120deg);"]');
  }
  get jam5() {
    return $('[style="transform: rotateZ(-150deg);"]');
  }
  get jam6() {
    return $('[style="transform: rotateZ(-180deg);"]');
  }
  get jam7() {
    return $('[style="transform: rotateZ(-210deg);"]');
  }
  get jam8() {
    return $('[style="transform: rotateZ(-240deg);"]');
  }
  get jam9() {
    return $('[style="transform: rotateZ(-270deg);"]');
  }
  get jam10() {
    return $('[style="transform: rotateZ(-300deg);"]');
  }
  get jam11() {
    return $('[style="transform: rotateZ(-330deg);"]');
  }
  get jam12() {
    return $('[style="transform: rotateZ(-360deg);"]');
  }
  get jam13() {
    return $('[style="transform: rotateZ(-390deg);"]');
  }
  get jam14() {
    return $('[style="transform: rotateZ(-420deg);"]');
  }
  get jam15() {
    return $('[style="transform: rotateZ(-450deg);"]');
  }
  get jam16() {
    return $('[style="transform: rotateZ(-480deg);"]');
  }
  get jam17() {
    return $('[style="transform: rotateZ(-510deg);"]');
  }
  get jam18() {
    return $('[style="transform: rotateZ(-540deg);"]');
  }
  get jam19() {
    return $('[style="transform: rotateZ(-570deg);"]');
  }
  get jam20() {
    return $('[style="transform: rotateZ(-600deg);"]');
  }
  get timebtnOK() {
    return $$('[class="timepicker-button"][type="button"]');
  }

  get selectSubGroupTradeProgram() {
    return $('[formcontrolname="sub_group_trade_program"]');
  }
  get inputSubGrupTradeProgram() {
    return $('[placeholder="Cari Sub Group Trade Program..."]');
  }
  get checkboxSGTP() {
    return $(
      '[class="mat-option-pseudo-checkbox mat-pseudo-checkbox ng-star-inserted"]'
    );
  }
  get buttonSimpan() {
    return $("#btn-simpan-trade");
  }

  get roleTab() {
    return $$('[role="tab"]');
  }
  //audience
  get radioButtonFixedPanel() {
    return $$('[class="mat-radio-container"]');
  }
  get Gambar() {
    return $$('[class="rectangle-16"]');
  }
  get buttonExport() {
    return $$('[class="is-danger mat-raised-button"]');
  }
  get buttonImport() {
    return $$('[class="is-danger mat-raised-button"]');
  }
  get ButtonCheckAu() {
    return $$('[class="confirmation-button mat-raised-button"]');
  }
  get BtnSimpanAu() {
    return $("#btn-simpan");
  }
  get buttonKirim() {
    return $('[class="mat-raised-button mat-primary"]');
  }
  get buttonBatal() {
    return $('[class="mat-stroked-button mat-primary"]');
  }

  //preview
  get inputIsiHalaman() {
    return $$('[contenteditable="true"]');
  }
  get clickToggleBar() {
    return $('[class="mat-slide-toggle-bar"]');
  }
  get buttonSimpanPreview() {
    return $('[class="confirmation-button mat-raised-button"]');
  }
  get buttonDownloadListPemenang() {
    return $('[class="is-danger mat-raised-button"]');
  }
  get buttonSimpanListPemenang() {
    return $("#btn-simpan");
  }
  get buttonPublish() {
    return $("#btn-create-trade");
  }

  //a method to encapsule automation code to interact with the page
  async Page() {
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 600000,
      timeoutMsg: "expected title page not displayed after 600s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 600000 });
  }

  async createPage() {
    await expect(this.titlePage).toHaveText("Undian");
    await browser.pause(15000);
  }

  async AudienceTabPage() {
    await expect(this.titleTabPage[1]).toBeDisplayed();
  }

  async PreviewTabPage() {
    await expect(this.titleTabPage[2]).toBeDisplayed();
  }

  async ListPemenangTabPage() {
    await expect(this.titleTabPage[3]).toBeDisplayed();
  }

  async namaProgram(nama_program) {
    await this.inputNamaProgram.setValue(nama_program);
  }

  async jumlahKoin(jumlah_koin) {
    await this.inputJumlahKoin.setValue(jumlah_koin);
  }

  async tanggalAwalPenukaranKupon() {
    await setStartEndDate(
      this.calendarAwalPenukaranKupon,
      this.calendarTanggalBerakhir,
      this.popUpCalendar
    );
    // await this.calendarAwalPenukaranKupon.click()
    // await this.popUpCalendar.waitForDisplayed()
    // await this.popUpCalendar.$$('tr')[1].$$('td')[3].$('div').click();
    // await browser.pause(2000)
  }

  async jamTerbit() {
    await this.popupJamTerbit.click();
    await this.jam6.click();
    await this.timebtnOK[1].click();
    await browser.pause(2000);
  }

  async tanggalBerakhirPenukaranKupon() {
    await setEndDate(this.calendarBerakhirPenukaranKupon, this.popUpCalendar);
    // await this.calendarBerakhirPenukaranKupon.click()
    // await this.popUpCalendar.waitForDisplayed()
    // await this.popUpCalendar.$$('tr')[2].$$('td')[0].$('div').click();
    // await browser.pause(2000)
  }

  async jamBerakhir() {
    await this.popupJamBerakhir.click();
    await this.jam8.click();
    await this.timebtnOK[1].click();
    await browser.pause(2000);
  }

  async tanggalPengumumanPemenang() {
    await this.calendarPengumumanPemenang.scrollIntoView();
    await this.calendarPengumumanPemenang.click();
    await this.popUpCalendar.waitForDisplayed();
    await this.popUpCalendar.$$("tr")[2].$$("td")[0].$("div").click();
    await browser.pause(2000);
  }

  async jamPengumumanPemenang() {
    await this.popupJamPengumumanPemenang.click();
    await this.jam8.click();
    await this.timebtnOK[1].click();
    await browser.pause(2000);
  }

  async SubGroupTradeProgram() {
    await this.selectSubGroupTradeProgram.click();
  }

  async inputSubGTP(input_sgtp) {
    await this.inputSubGrupTradeProgram.setValue(input_sgtp);
  }

  async selectSGPT() {
    await this.checkboxSGTP.click();
    await browser.keys("Escape");
    await browser.pause(4000);
  }

  async SimpanUndian() {
    await this.buttonSimpan.click();
  }

  async tabAudience() {
    await this.roleTab[1].scrollIntoView();
    await this.roleTab[1].click();
  }

  async tabPreview() {
    await this.roleTab[2].scrollIntoView();
    await this.roleTab[2].click();
  }

  async tabListPemenang() {
    await this.roleTab[3].scrollIntoView();
    await this.roleTab[3].click();
  }

  async FixedPanel() {
    await this.radioButtonFixedPanel[1].scrollIntoView();
    await this.radioButtonFixedPanel[1].click();
    await browser.pause(5000);
  }

  async ExportTamplate() {
    await this.buttonExport[0].click();
    await browser.pause(5000);
  }

  async ImportTamplate() {
    await this.buttonImport[1].waitForClickable({ timeout: 6000 });
    await this.buttonImport[1].isClickable();
    await this.buttonImport[1].click();
    await browser.pause(25000);
  }

  async InsertFile1() {
    await browser.pause(6000);
  }

  async InsertFile2() {
    await browser.pause(6000);
  }

  async InsertGambar1() {
    await this.Gambar[0].scrollIntoView();
    await browser.pause(3000);
  }

  async InsertGambar2() {
    await browser.pause(7000);
  }

  async InsertGambar3() {
    await browser.pause(10000);
  }

  async btnKirim() {
    await this.buttonKirim.click();
  }

  async btnCheck() {
    await this.ButtonCheckAu[0].click();
    await browser.pause(5000);
  }

  async btnSimpanAudience() {
    await this.BtnSimpanAu.click();
    await browser.pause(5000);
  }

  async deskripsiKuponUndian(deskripsi_kupon) {
    await this.inputIsiHalaman[0].scrollIntoView();
    await this.inputIsiHalaman[0].setValue(deskripsi_kupon);
  }

  async toggleBar() {
    await this.clickToggleBar.click();
    await browser.pause(5000);
  }

  async deskripsiTC(deskripsi_tc) {
    await this.inputIsiHalaman[1].scrollIntoView();
    await this.inputIsiHalaman[1].setValue(deskripsi_tc);
  }

  async simpanPreview() {
    await this.buttonSimpanPreview.click();
    await browser.pause(40000);
  }

  async btnDownloadListPemenang() {
    await this.buttonDownloadListPemenang.scrollIntoView();
    await this.buttonDownloadListPemenang.click();
    await browser.pause(5000);
  }

  async btnSimpanListPemenang() {
    await this.buttonSimpanListPemenang.scrollIntoView();
    await this.buttonSimpanListPemenang.click();
    await browser.pause(10000);
  }

  async btnPublish() {
    await this.buttonPublish.scrollIntoView();
    await browser.pause(5000);
    await this.buttonPublish.click();
    await browser.pause(20000);
    //await browser.refresh()
  }
}

export default new crudPemenangdanUndian();
