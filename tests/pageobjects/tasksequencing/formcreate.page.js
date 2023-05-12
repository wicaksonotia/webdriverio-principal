import Page from "../page";
const path = require("path");

//sub page containing specific selectors and methods for a specific page
class FormCreatePage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerTaskSequencing");
  }

  get btnExportCoin() {
    return $("#btn-export-coin");
  }
  get btnDownloadFile() {
    return $("#btnDownloadFile");
  }

  get btnImportCoin() {
    return $("#btn-import-coin");
  }
  get requestingImport() {
    return $("div.button-header > div > div:nth-child(3) > label");
  }

  get inputFileImportCoin() {
    return $("#upload-file-import");
  }
  get popUpDialogImport() {
    return $('[role="dialog"] ng-component div  mat-toolbar div div span');
  }
  get btnClosePopUpImportCoin() {
    return $('button[aria-label="Close Dialog"]');
  }
  get datatableHeaderImportCoin() {
    return $("datatable-header.datatable-header");
  }
  get rowTableImportedCoin() {
    return $$("datatable-row-wrapper > datatable-body-row");
  }
  get importedGTP() {
    return $("#data-cell-[GTP]");
  }
  get importedNamaProgram() {
    return $("#data-cell-[NamaProgram]");
  }
  get importedNamaAudience() {
    return $("#data-cell-[NamaAudience]");
  }
  get importedNamaRetailer() {
    return $("#data-cell-[NamaRetailer]");
  }
  get importedStatusRetailer() {
    return $("#data-cell-[StatusRetailer]");
  }
  get importedCurrentCoinTotal() {
    return $("#data-cell-[CurrentCoinTotal]");
  }
  get reasonImportCoin() {
    return $("#alasanAdjustmentCoin");
  }
  get dropdownUserPenerima() {
    return $("#name");
  }
  get searchUserPenerima() {
    return $("div > input#searchUserPenerima");
  }
  get listUserPenerima() {
    return $$('mat-option[role="option"] > span');
  }
  get emailPenerima() {
    return $("#emailPenerima");
  }
  get btnKirimImportCoin() {
    return $("div > #btn-submit-import");
  }
  get headerPopupConfirmImport() {
    return $("h1#headerPopupConfirmImport");
  }
  get btnConfirmImport() {
    return $("#btn-confirm-import");
  }
  get btnCancelImport() {
    return $("#btn-cancel-import");
  }
  get btnBatalImportCoin() {
    return $("#btnBatalImportCoin");
  }

  get inputNama() {
    return $("#input-nama");
  }
  get dropdownTradeProgram() {
    return $("#tradeCreatorId");
    // return $('[formcontrolname="trade_creator_id"]');
    // return $('mat-select[formcontrolname="trade_creator_id"]');
  }
  get searchTP() {
    return $("#select-search-trade > div > input");
  } //#select-search-trade > div > input
  get selectTradeProgram() {
    return $$('[role="option"]');
  }

  get dropdownGroupAudience() {
    return $("#tradeAudienceGroupId");
  }
  get searchGroupAudience() {
    return $("#select-search-audience > div > input");
  }
  get selectGroupAudience() {
    return $$('[role="option"]');
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

  get dataCell() {
    return $$("#data-cell");
  }
  get btnSubmit() {
    return $("button#btnSubmitTaskSequencing");
  }
  get btnSubmitEdit() {
    return $("#btn-edit");
  }
  get btnCekDetail() {
    return $("#btn-detail");
  }

  //Export

  //Import
  get btnKirim() {
    return $("#btn-submit-import");
  }
  get btnBatal() {
    return $("");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await this.titlePage.waitForExist();
    await this.titlePage.waitForDisplayed();
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async clickData() {
    await this.dataCell[0].scrollIntoView();
    await this.dataCell[0].click();
  }

  async pageCreate() {
    await expect(this.titlePage).toHaveText("Buat Task Sequencing");
    await expect(browser).toHaveUrlContaining("dte/task-sequencing/create");
  }

  async pageEdit() {
    await expect(this.titlePage).toHaveText("Ubah Task Sequencing");
    await expect(browser).toHaveUrlContaining("dte/task-sequencing/edit");
  }

  async pageDetail() {
    await expect(this.titlePage).toHaveText("Detail Task Sequencing");
    await expect(browser).toHaveUrlContaining("dte/task-sequencing/detail");
  }

  async formAddPage() {
    await this.titlePage.waitForExist();
    await this.titlePage.waitForDisplayed();
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
    await expect(browser).toHaveUrlContaining("dte/task-sequencing/create");
    await expect(this.titlePage).toHaveText("Buat Task Sequencing");
    // await browser.pause(5000)
  }

  async formEditPage() {
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
    await expect(this.titlePage).toHaveText("Ubah Task Sequencing");
    await expect(browser).toHaveUrlContaining("dte/task-sequencing/edit");
    // await browser.pause(5000)
  }

  async formDetailPage() {
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 20000,
      timeoutMsg: "expected title page page not displayed after 20s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
    await expect(browser).toHaveUrlContaining("dte/task-sequencing/detail");
    await expect(this.titlePage).toHaveText("Detail Task Sequencing");
    // await browser.pause(5000)
  }

  async createTSM(nameTSM, tradeProgram, groupAudience) {
    await this.inputNama.setValue(nameTSM);
    await browser.pause(3000);
    await this.dropdownTradeProgram.click();
    await this.searchTP.waitForExist();
    // await expect(this.searchTP).toBeExisting()
    await this.searchTP.setValue(tradeProgram);
    await browser.pause(5000);
    await this.selectTradeProgram[0].waitForExist();
    await browser.pause(3000);
    await this.selectTradeProgram[0].click();
    // console.log('List Trade Program: ')
    // const titleTP = await this.selectTradeProgram
    // titleTP.forEach(element => {
    //     const tasks = element.getText()
    //         // console.log(tasks)       //output: Promise { <pending> }
    //         tasks.then(function(result) {
    //         console.log(result)         //output: list Trade Program
    //         if (String(result) == tradeProgram) {
    //             element.click()
    //         }
    //     })
    // })
    await this.searchTP.waitForExist({ reverse: true });
    await this.dropdownGroupAudience.click();
    await this.searchGroupAudience.waitForExist();
    // await expect(this.searchGroupAudience).toBeDisplayed()
    // await browser.pause(2000)
    await this.searchGroupAudience.setValue(groupAudience);
    await browser.pause(8000);
    await this.selectGroupAudience[0].waitForExist();
    await browser.pause(3000);
    await this.selectGroupAudience[0].click();
    // console.log('List Audience: ')
    // const titleAudP = await this.selectGroupAudience
    // titleAudP.forEach(element => {
    //     const audience = element.getText()
    //         console.log(audience)       //output: Promise { <pending> }
    //         audience.then(function(result) {
    //         console.log(result)         //output: list Trade Program
    //         if (String(result) == groupAudience) {
    //             element.click()
    //         }
    //     })
    // })
    // await browser.pause(2000)
    // await this.searchGroupAudience.waitForExist({ reverse: true });
    await browser.pause(8000);
    await this.btnSubmit.scrollIntoView();

    // khusus untuk scenario 16
    // await this.startDate.click()
    // await this.popUpCalendar.waitForExist();
    // await this.popUpCalendar.$$('tr')[3].$$('td')[4].$('div').click(); //baris x kolom, contoh: 1,4: 6 Januari 2022
    // await this.startTime.click()
    // await this.popUpTimeStart.waitForExist();
    // await this.popUpTimeStart.$$('div')[2].$('span').click(); //baris x kolom, contoh: 1,4: 6 Januari 2022
    // await this.btnTimePicker[1].click()

    // await this.endDate.click()
    // await this.popUpCalendar.waitForExist();
    // await this.popUpCalendar.$$('tr')[3].$$('td')[4].$('div').click(); //baris x kolom, contoh: 1,4: 6 Januari 2022
    // await this.endTime.click()
    // await this.popUpTimeEnd.waitForExist();
    // await this.popUpTimeEnd.$$('div')[9].$('span').click(); //baris x kolom, contoh: 1,4: 6 Januari 2022
    // await this.btnTimePicker[1].click()

    // untuk scenario task sequencing selain scenario 16
    await this.startDate.click();
    await this.popUpCalendar.waitForExist();
    await this.popUpCalendar.$$("tr")[2].$$("td")[1].$("div").click(); //baris x kolom, contoh: 1,4: 6 Januari 2022
    await this.startTime.click();
    await this.popUpTimeStart.waitForExist();
    await this.popUpTimeStart.$$("div")[2].$("span").click();
    await this.btnTimePicker[1].click();

    await this.endDate.click();
    await this.popUpCalendar.waitForExist();
    await this.popUpCalendar.$$("tr")[3].$$("td")[1].$("div").click(); //contoh: 4,6: 29 Januari 2022
    await this.endTime.click();
    await this.popUpTimeEnd.waitForExist();
    await this.popUpTimeEnd.$$("div")[9].$("span").click();
    await this.btnTimePicker[1].click();

    await this.popUpCalendar.waitForExist({ reverse: true });
    await browser.pause(2000);
  }

  async exportFile() {
    await this.btnExportCoin.click();
    await browser.pause(5000);
    //alert "Request file berhasil."
  }

  async downloadExportFile() {
    await browser.waitUntil(
      async () => await this.btnDownloadFile.isDisplayed(),
      {
        timeout: 100000,
        timeoutMsg: "expected button Download File not displayed after 60s",
      }
    );
    await expect(this.btnDownloadFile).toBeDisplayed();
    await expect(this.btnDownloadFile).toBeClickable();
    await this.btnDownloadFile.click();
  }

  async importFile() {
    await this.btnImportCoin.waitForClickable();
    await this.btnImportCoin.click(); //Import xls
  }

  async uploadImportFile() {
    await this.popUpDialogImport.waitForExist();
    await expect(this.popUpDialogImport).toBeExisting();
    await expect(this.popUpDialogImport).toHaveText("Unggah File XLS");
    // await browser.execute(function () {
    //     document.querySelector('#import-coin > label').style="visibility: visible; overflow: visible;";
    //   });
    // await browser.pause(2000)
    // await this.inputFileImportCoin.waitForDisplayed()
    // const filePathAttach = path.join(__dirname, '../../files-to-upload/tasksequencing/6exportimport-coin-Adjustment-Coin.xlsx');
    // const remoteFilePathAddAttach = await browser.uploadFile(filePathAttach, {setTimeout:60000});
    // await (await this.inputFileImportCoin).setValue(remoteFilePathAddAttach, {setTimeout:60000});
    await browser.pause(40000);
  }

  async userPenerimaCoinAdj(reasonImportCoin, namaPenerimaImported) {
    await this.datatableHeaderImportCoin.scrollIntoView();
    await this.rowTableImportedCoin[0].waitForExist(); //row 1 list imported xls, di-command karna window size terlalu lebar sehingga hanya tampil sedikit
    await this.reasonImportCoin.setValue(reasonImportCoin);
    await this.dropdownUserPenerima.click();
    await this.searchUserPenerima.waitForExist();
    await this.searchUserPenerima.setValue(namaPenerimaImported);
    await browser.pause(3000);
    await this.listUserPenerima[0].waitForExist();
    await this.listUserPenerima[0].waitForDisplayed();
    await expect(this.listUserPenerima[0]).toBeDisplayed();
    await this.listUserPenerima[0].click();
    // await this.emailPenerima.waitForExist()
    // await this.emailPenerima.toHaveText(emailPenerimaImported)
    await browser.pause(2000);
    //alert ""
  }

  async closePopUpImport() {
    await this.btnClosePopUpImportCoin.click();
    await browser.pause(3000);
  }

  async sendImportFile() {
    await this.btnKirimImportCoin.click();
    //alert "Data berhasil dimsimpan/"
  }

  async confirmImport() {
    await this.headerPopupConfirmImport.waitForExist();
    await this.headerPopupConfirmImport.waitForDisplayed();
    await expect(this.headerPopupConfirmImport).toBeDisplayed();
    await this.btnConfirmImport.click();
  }

  async cancelConfirmImport() {
    await this.headerPopupConfirmImport.waitForExist();
    await this.headerPopupConfirmImport.waitForDisplayed();
    await expect(this.headerPopupConfirmImport).toBeDisplayed();
    await this.btnCancelImport.click();
  }

  async successImportFile() {
    await this.btnImportCoin.waitForEnabled({ reverse: true });
    await expect(this.btnImportCoin).toBeDisabled();
    await expect(this.requestingImport).toHaveText("Requesting IMPORT");
  }

  async cancelImportFile() {
    await this.btnBatalImportCoin.click();
  }

  async submitTsm() {
    await this.btnSubmit.scrollIntoView();
    await this.btnSubmit.waitForClickable();
    await expect(this.btnSubmit).toBeClickable();
    await this.btnSubmit.click();
    await browser.pause(5000);
  }

  async submitEditTsm() {
    await this.btnSubmitEdit.waitForClickable();
    await expect(this.btnSubmitEdit).toBeClickable();
    await this.btnSubmitEdit.click();
    await browser.pause(5000);
  }

  async cekDetail() {
    await expect(this.btnCekDetail).toBeClickable();
    await this.btnCekDetail.click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("");
  }
}

export default new FormCreatePage();
