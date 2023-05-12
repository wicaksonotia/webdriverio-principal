import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class DetailVerificationAssignmentPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }
  get btnImport() {
    return $("#btnImport");
  }
  get popUpDialogImport() {
    return $('[class="MuiDialogTitle-root"]');
  }
  get btnCloseDialogImport() {
    return $('[class="MuiButtonBase-root MuiIconButton-root"]');
  }
  get inpApprover() {
    return $(
      '[class="MuiInputBase-input MuiInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd"]'
    );
  }
  get btnPreviewDialogImport() {
    return $("#btnPreview");
  }
  get btnSaveDialogImport() {
    return $("#btnSave");
  }
  get btnConfirmDialogImport() {
    return $("#btnConfirm");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.switchToParentFrame();
    await browser.pause(3000);
    await browser.switchToFrame(0);
    await browser.pause(5000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 10s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 60000 });
  }

  async pageList2() {
    await browser.switchToParentFrame();
    await browser.pause(10000);
    await browser.switchToFrame(0);
    await browser.pause(3000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 10000,
      timeoutMsg: "expected title page not displayed after 10s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async importData(approver) {
    await this.btnImport.click();
    await expect(this.popUpDialogImport).toBeExisting();
    await expect(this.popUpDialogImport).toHaveText("Unggah File CSV");
    await browser.pause(120000);
    await this.btnCloseDialogImport.click();
    await this.btnImport.click();
    // await this.inpApprover[1].scrollIntoView()
    await this.inpApprover.setValue(approver);
    await browser.pause(3000);
    await browser.keys("Enter");
    await this.btnPreviewDialogImport.click();
    await browser.pause(3000);
    await this.btnSaveDialogImport.click();
    await browser.pause(3000);
    await this.btnConfirmDialogImport.click();
    await browser.pause(3000);
  }

  async importData150(approver) {
    await this.btnImport.click();
    await expect(this.popUpDialogImport).toBeExisting();
    await expect(this.popUpDialogImport).toHaveText("Unggah File CSV");
    await browser.pause(480000);
    await this.btnCloseDialogImport.click();
    await this.btnImport.click();
    await this.inpApprover.scrollIntoView();
    await this.inpApprover.setValue(approver);
    await browser.pause(8000);
    await browser.keys("Enter");
    await this.btnPreviewDialogImport.click();
    await browser.pause(8000);
    await this.btnSaveDialogImport.click();
    await browser.pause(8000);
    await this.btnConfirmDialogImport.click();
    await browser.pause(8000);
    await expect(this.btnImport).toBeExisting();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("");
  }
}

export default new DetailVerificationAssignmentPage();
