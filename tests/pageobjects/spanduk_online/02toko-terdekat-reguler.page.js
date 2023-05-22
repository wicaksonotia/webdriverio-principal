import Page from "../page";
import { setEndDate } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class tokoTerdekatReguler extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerSpandukOnline");
  }
  get titleFormPage() {
    return $(
      "#wrapper > div > fuse-content > app-banner-create > div > div.content.p-24 > div > form > div.px-24 > h2"
    );
  }
  get inputNamaSpanduk() {
    return $('[placeholder="Nama Spanduk"]');
  }
  get calendarSampai() {
    return $('[placeholder="Sampai"]');
  }
  get calendar() {
    return $("#cdk-overlay-0");
  }
  get popUpCalendar() {
    return $("mat-datepicker-content tbody.mat-calendar-body");
  }
  get selectDate() {
    return $(
      "#mat-datepicker-1 > div > mat-month-view > table > tbody > tr:nth-child(5) > td.mat-calendar-body-cell.mat-calendar-body-active.ng-star-inserted > div"
    );
  }
  get textGambar() {
    return $(
      "#wrapper > div > fuse-content > app-banner-create > div > div.content.p-24 > div > form > div.ayo-middle > div:nth-child(6) > div:nth-child(6) > span"
    );
  }
  get insertBanner() {
    return $$(
      "#wrapper > div > fuse-content > app-banner-create > div > div.content.p-24 > div > form > div.ayo-middle > div:nth-child(6) > div:nth-child(6) > div > div"
    );
  }
  get radioButtonCustomer() {
    return $$("#mat-radio-6");
  }
  get radioButtonTokoTerdekat() {
    return $$("#mat-radio-25");
  }
  get scrollNamaHalaman() {
    return $(
      "#wrapper > div > fuse-content > app-banner-create > div > div.content.p-24 > div > form > div.ayo-middle > div:nth-child(12) > div:nth-child(2) > h3"
    );
  }
  get inputNamaHalaman() {
    return $('[formcontrolname="title"]');
  }
  get inputIsiHalaman() {
    return $$('[spellcheck="true"]');
  }
  get btnSimpan() {
    return $('[class="confirmation-button mat-raised-button"]');
  }
  get btnYa() {
    return $$('[class="confirm ng-star-inserted"]');
  }

  //a method to encapsule automation code to interact with the page
  async Page() {
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 600000,
      timeoutMsg: "expected title page not displayed after 600s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 600000 });
  }

  async formPage() {
    async () => {
      expect(this.titleFormPage).toHaveTextContaining("Buat Spanduk Online");
    };
  }

  async namaSpanduk(nama_spanduk) {
    await this.inputNamaSpanduk.setValue(nama_spanduk);
  }

  async dateSampai() {
    await setEndDate(this.calendarSampai, this.popUpCalendar);
  }

  async insertGambarBanner() {
    await this.textGambar.scrollIntoView();
    await this.insertBanner[0].click();
    await browser.pause(10000);
  }

  async grupPenggunaCustomer() {
    await expect(this.radioButtonCustomer[0]).toBeClickable();
    await this.radioButtonCustomer[0].click();
  }

  async tipeSpandukTokoTerdekat() {
    await expect(this.radioButtonTokoTerdekat[0]).toBeClickable();
    await this.radioButtonTokoTerdekat[0].click();
  }

  async namaHalaman(nama_halaman) {
    await this.inputNamaHalaman.scrollIntoView();
    await this.inputNamaHalaman.setValue(nama_halaman);
  }

  async isiHalaman(isi_halaman) {
    await this.scrollNamaHalaman.scrollIntoView();
    await this.inputIsiHalaman[0].setValue(isi_halaman);
  }

  async buttonSimpan() {
    await this.btnSimpan.scrollIntoView();
    await this.btnSimpan.click();
  }

  async buttonYa() {
    await this.btnYa[0].click();
    await browser.pause(15000);
  }

  open() {
    return super.open("advertisement/banner");
  }
}

export default new tokoTerdekatReguler();
