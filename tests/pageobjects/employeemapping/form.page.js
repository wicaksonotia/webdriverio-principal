import ChromeDriverService from "wdio-chromedriver-service";
import Page from "../page";
const path = require("path");

//sub page containing specific selectors and methods for a specific page
class FormEmployeeMappingPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }

  get btnSimpan() {
    return $("#btnSave");
  }

  get inpName() {
    return $("#field-pic_name");
  }
  get clrName() {
    return $('[title="Clear"]');
  }
  get valueName() {
    return $(
      'input[class="MuiInputBase-input MuiInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd"]'
    );
  }
  get drpdwn() {
    return $$("#fieldSelect");
  }
  get drpdwnValue() {
    return $$("#checkbox");
  }
  get drpdwnMetode() {
    return $$("#field-payment_method");
  }
  get drpdwnMetodeValue() {
    return $$("#list-payment_method");
  }

  //Notifikasi Tambahan
  get notif() {
    return $$('div[class="MuiSnackbarContent-message"]');
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.switchToParentFrame();
    await browser.pause(3000);
    await browser.switchToFrame(0);
    await browser.pause(5000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 60s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async pageCreate() {
    await expect(this.titlePage).toHaveText("Buat Employee Mapping");
    await expect(browser).toHaveUrlContaining("dte/employee-mapping/create");
  }

  async pageDetail() {
    await expect(this.titlePage).toHaveText("Employee Mapping");
    // await expect(browser).toHaveUrlContaining('dte/employee-mapping/detail')
  }

  async pageEdit() {
    await browser.switchToParentFrame();
    await browser.pause(3000);
    await browser.switchToFrame(0);
    await browser.pause(5000);
    await expect(this.titlePage).toHaveText("Ubah Employee Mapping");
    // await expect(browser).toHaveUrlContaining('dte/employee-mapping/edit')
  }

  async name(employeeName) {
    await this.inpName.setValue(employeeName);
    await browser.pause(5000);
    await browser.keys("Enter");
  }

  async clearName() {
    await this.drpdwnMetode[1].scrollIntoView();
    await this.inpName.click();
    await this.clrName.click();
  }

  async zone() {
    await expect(this.drpdwn[1]).toBeExisting();
    await this.drpdwn[1].click();
    await this.drpdwnValue[5].waitForExist();
    await expect(this.drpdwnValue[5]).toBeExisting();
    await this.drpdwnValue[5].click();
    await browser.pause(3000);
    await browser.keys("Escape");
    await this.titlePage.scrollIntoView();
  }

  async region() {
    await expect(this.drpdwn[2]).toBeExisting();
    await this.drpdwn[2].click();
    await this.drpdwnValue[2].waitForExist();
    await expect(this.drpdwnValue[2]).toBeExisting();
    await this.drpdwnValue[2].click();
  }

  async area() {
    await expect(this.drpdwn[3]).toBeExisting();
    await this.drpdwn[3].click();
    await this.drpdwnValue[4].waitForExist();
    await expect(this.drpdwnValue[4]).toBeExisting();
    await this.drpdwnValue[4].click();
  }

  async metodeTB() {
    await this.drpdwnMetode[1].scrollIntoView();
    await browser.pause(5000);
    // await expect(this.drpdwnMetode).toBeExisting()
    await this.drpdwnMetode[1].click();
    // await browser.pause(3000)
    await this.drpdwnMetodeValue[0].waitForExist();
    await expect(this.drpdwnMetodeValue[0]).toBeExisting();
    await this.drpdwnMetodeValue[0].click();
  }

  async metodePB() {
    await this.drpdwnMetode[1].scrollIntoView();
    await browser.pause(5000);
    // await expect(this.drpdwnMetode).toBeExisting()
    await this.drpdwnMetode[1].click();
    // await browser.pause(3000)
    await this.drpdwnMetodeValue[1].waitForExist();
    await expect(this.drpdwnMetodeValue[1]).toBeExisting();
    await this.drpdwnMetodeValue[1].click();
  }

  async submitForm() {
    // await (await browser.getActiveElement()).click()
    await this.btnSimpan.waitForClickable();
    await expect(this.btnSimpan).toBeClickable();
    await this.btnSimpan.click();
    await browser.pause(5000);
  }

  async notification() {
    await this.notif.waitForExist();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("");
  }
}

export default new FormEmployeeMappingPage();
