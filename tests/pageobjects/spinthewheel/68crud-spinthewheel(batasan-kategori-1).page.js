import Page from "../page";
import { setStartEndDate } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class stwBatasanKategori1 extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerSpinTheWheel");
  }
  get titleTabPage() {
    return $$('[class="mat-tab-label-content"]');
  }
  get inputNamaProgram() {
    return $('[formcontrolname="name"]');
  }
  get selectNamaTradeProgram() {
    return $('[formcontrolname="trade_creator_id"]');
  }
  get searchInputTradeProgram() {
    return $('[placeholder="Pilih Trade Program"]');
  }
  get optionTradeProgram() {
    return $$('[class="mat-option ng-star-inserted mat-active"]');
  }
  get popUpCalendar() {
    return $("mat-datepicker-content tbody.mat-calendar-body");
  }
  get calendarMulaiDari() {
    return $('[formcontrolname="start_date"]');
  }
  get popupJamTerbit() {
    return $('[formcontrolname="start_time"]');
  }
  get calendarTanggalBerakhir() {
    return $('[formcontrolname="end_date"]');
  }
  get popupJamBerakhir() {
    return $('[formcontrolname="end_time"]');
  }
  //jam
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

  get buttonSimpanSTW() {
    return $("#btn-simpan");
  }
  get inputSearchSTW() {
    return $("#search");
  }
  get iconEdit() {
    return $("#btn-edit");
  }
  get roleTab() {
    return $$('[role="tab"]');
  }
  get roleTabList() {
    return $$('[role="tablist"]');
  }

  get radioButtonFixedPanel() {
    return $$('[class="mat-radio-container"]');
  }
  get buttonExport() {
    return $$('[class="is-danger mat-raised-button"]');
  }
  get buttonImport() {
    return $$('[class="is-danger mat-raised-button"]');
  }
  get buttonKirim() {
    return $('[class="mat-raised-button mat-primary"]');
  }
  get buttonCheck() {
    return $$('[class="confirmation-button mat-raised-button"]');
  }
  get buttonSimpanTabAudience() {
    return $$('[class="confirmation-button mat-raised-button"]');
  }

  get bunttonRewardNonCoin() {
    return $$('[class="mat-raised-button mat-primary ng-star-inserted"]');
  }
  get frekuensiBelanjaMingguan() {
    return $('[formcontrolname="shop_freq"]');
  }
  get maksimalFrekuensiReward() {
    return $('[formcontrolname="reward_freq"]');
  }
  get radioButtonPembatasanProdukdanKategori() {
    return $('[class="mat-radio-container"]');
  }
  get radioButtonBatasidenganKategori() {
    return $$('[class="mat-radio-container"]');
  }
  get dropdownBatasanBerdasarkanKategori() {
    return $('[formcontrolname="category"]');
  }
  get optionBatasanBerdasarkanKategori() {
    return $$('[role="option"]');
  }
  get inputNilaiTransaksiMinimal() {
    return $$('[formcontrolname="value"]');
  }
  get inputMinimumNilaiTransaksi() {
    return $('[formcontrolname="minimum_transaction"]');
  }
  get inputLimitSpin() {
    return $('[formcontrolname="limit_spin"]');
  }
  get inputJumlahVariasiCoin() {
    return $('[formcontrolname="coin_variation"]');
  }
  get inputCoin() {
    return $$('[formcontrolname="value"]');
  }
  get inputSlice() {
    return $$('[formcontrolname="slice"]');
  }
  get inputProbability() {
    return $$('[formcontrolname="probability"]');
  }
  get btnSimpanPengaturanMekanisme() {
    return $('[class="confirmation-button mat-raised-button"]');
  }
  get ContainerPB() {
    return $$('[class="p-16"]');
  }
  get inputNamaProgramPreview() {
    return $('[formcontrolname="preview_header"]');
  }
  get buttonSimpanPreview() {
    return $("#btn-simpan");
  }
  get buttonPublish() {
    return $('[class="ml-24 confirmation-button mat-raised-button"]');
  }

  //a method to encapsule automation code to interact with the page
  async Page() {
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 600000,
      timeoutMsg: "expected title page not displayed after 600s",
    });

    await expect(this.titlePage).toBeDisplayed({ timeout: 600000 });
  }

  async AudienceTabPage() {
    await expect(this.titleTabPage[2]).toBeDisplayed();
  }

  async PengaturanMekanismeTabPage() {
    await expect(this.titleTabPage[3]).toBeDisplayed();
  }

  async PreviewtabPage() {
    await expect(this.roleTab[3]).toBeDisplayed();
  }

  async tabAudience() {
    await this.roleTab[1].scrollIntoView();
    await this.roleTab[1].click();
  }

  async tabPengaturanMekanisme() {
    await this.roleTab[1].scrollIntoView();
    await this.roleTab[2].click();
  }

  async tabPreview() {
    await this.roleTab[2].scrollIntoView();
    await this.roleTab[3].click();
  }

  async NamaProgramSTW(nama_program) {
    await this.inputNamaProgram.scrollIntoView();
    await this.inputNamaProgram.setValue(nama_program);
  }

  async namaTradeProgram(nama_trade_program) {
    await this.selectNamaTradeProgram.click();
    await this.searchInputTradeProgram.setValue(nama_trade_program);
    await browser.pause(3000);
    await this.optionTradeProgram[0].click();
    await browser.pause(2000);
  }

  async tanggalMulai() {
    await setStartEndDate(
      this.calendarMulaiDari,
      this.calendarTanggalBerakhir,
      this.popUpCalendar
    );
    // await this.calendarMulaiDari.click()
    // await this.popUpCalendar.waitForDisplayed()
    // await this.popUpCalendar.$$('tr')[1].$$('td')[3].$('div').click();
    //await browser.pause(2000)
  }

  async tanggalBerakhir() {
    // await this.calendarTanggalBerakhir.click()
    // await this.popUpCalendar.waitForDisplayed()
    // await this.popUpCalendar.$$('tr')[2].$$('td')[0].$('div').click();
    //await browser.pause(2000)
  }

  async jamTerbit() {
    await this.popupJamTerbit.click();
    await this.jam8.click();
    await this.timebtnOK[1].click();
    //await browser.pause(2000)
  }

  async jamBerakhir() {
    await this.popupJamBerakhir.click();
    await this.jam8.click();
    await this.timebtnOK[1].click();
    await browser.pause(1000);
  }

  async simpanSTW() {
    await this.buttonSimpanSTW.click();
    await browser.pause(10000);
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

  async btnKirim() {
    await this.buttonKirim.click();
  }

  async btnCheck() {
    await this.buttonCheck[0].click();
  }

  async btnSimpanAudience() {
    await $("#btn-simpan").click();
    await browser.pause(2000);
  }

  async FixedPanel() {
    await this.radioButtonFixedPanel[1].scrollIntoView();
    await this.radioButtonFixedPanel[1].click();
    await browser.pause(5000);
  }

  async InsertGambar1() {
    await browser.pause(7000);
  }

  async frekuensiBelanja(frekuensi_belanja) {
    await this.frekuensiBelanjaMingguan.scrollIntoView();
    await this.frekuensiBelanjaMingguan.setValue(frekuensi_belanja);
  }

  async maksimalFrekuensi(maksimal_frekuensi) {
    await this.maksimalFrekuensiReward.setValue(maksimal_frekuensi);
  }

  async pembatasanProdukdanKategori() {
    await this.radioButtonPembatasanProdukdanKategori.click();
    await browser.pause(2000);
  }

  async batasiDenganKategori() {
    await this.ContainerPB[0].scrollIntoView();
    await this.radioButtonBatasidenganKategori[3].click();
    await browser.pause(2000);
  }

  async BatasanBerdasarkanKategori() {
    await this.dropdownBatasanBerdasarkanKategori.click();
    await this.optionBatasanBerdasarkanKategori[9].scrollIntoView();
    await this.optionBatasanBerdasarkanKategori[9].click();
    await browser.keys("Escape");
  }

  async nilaiTransaksiMinimal(nilai_transaksi_minimal) {
    await this.inputNilaiTransaksiMinimal[0].setValue(nilai_transaksi_minimal);
  }

  async minimumNilaiTransaksi(minimum_nilai_transaksi) {
    await this.inputMinimumNilaiTransaksi.scrollIntoView();
    await this.inputMinimumNilaiTransaksi.setValue(minimum_nilai_transaksi);
  }

  async nilaiTransaksiMinimal(nilai_transaksi_minimal) {
    await this.inputNilaiTransaksiMinimal[0].scrollIntoView();
    await this.inputNilaiTransaksiMinimal[0].setValue(nilai_transaksi_minimal);
    await browser.pause(1000);
  }

  async limitSpin(limit_spin) {
    await this.inputLimitSpin.scrollIntoView();
    await this.inputLimitSpin.setValue(limit_spin);
  }

  async jumlahVariasiCoin(jumlah_variasi_coin) {
    await this.inputJumlahVariasiCoin.setValue(jumlah_variasi_coin);
  }

  async btnRewardNonCoin() {
    await this.bunttonRewardNonCoin[0].click();
  }

  async Coin1(coin1) {
    await this.inputCoin[1].scrollIntoView();
    await this.inputCoin[1].setValue(coin1);
    await browser.pause(1000);
  }

  async Coin2(coin2) {
    await this.inputCoin[2].setValue(coin2);
    await browser.pause(1000);
  }

  async nonCoin(noncoin) {
    await this.inputCoin[3].setValue(noncoin);
    await browser.pause(1000);
  }

  async Coin3(coin3) {
    await this.inputCoin[3].setValue(coin3);
    await browser.pause(1000);
  }

  async Slice1(slice1) {
    await this.inputSlice[0].setValue(slice1);
    await browser.pause(1000);
  }

  async Slice2(slice2) {
    await this.inputSlice[1].setValue(slice2);
    await browser.pause(1000);
  }

  async Slice3(slice3) {
    await this.inputSlice[2].setValue(slice3);
    await browser.pause(1000);
  }

  async Probability1(probability1) {
    await this.inputProbability[0].setValue(probability1);
    await browser.pause(1000);
  }

  async Probability2(probability2) {
    await this.inputProbability[1].setValue(probability2);
    await browser.pause(1000);
  }

  async Probability3(probability3) {
    await this.inputProbability[2].setValue(probability3);
    await browser.pause(1000);
  }

  async simpanTabPengaturanMekanisme() {
    await this.btnSimpanPengaturanMekanisme.click();
    await browser.pause(2000);
  }

  async simpanTabPreview() {
    await this.buttonSimpanPreview.click();
  }

  async NamaProgramPreview(nama_program) {
    await this.inputNamaProgramPreview.scrollIntoView();
    await this.inputNamaProgramPreview.setValue(nama_program);
  }

  async simpanPreview() {
    await this.buttonSimpanSTW.scrollIntoView();
    await this.buttonSimpanSTW.click();
    await browser.pause(10000);
  }

  async publishTabPreview() {
    await this.buttonPublish.click();
    await browser.pause(5000);
  }
}

export default new stwBatasanKategori1();
