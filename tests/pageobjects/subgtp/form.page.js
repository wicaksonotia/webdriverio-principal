import ChromeDriverService from 'wdio-chromedriver-service';
import Page from '../page';
const path = require('path');

//sub page containing specific selectors and methods for a specific page
class FormSubGTPPage extends Page {

    //define selectors using getter methods
    get titlePage () { return $('#contentTitle') }
    
    get btnSimpan () { return $('#btnSave') }

    get inpName () { return $('#field-name') }
    get inpWbs () { return $('#field-wbs') }
    get inpCostCenter () { return $('#field-cost_center') }
    get inpGLAccount () { return $('#field-gl_account') }
    get inpPPH () { return $('#field-rate_pph') }
    get inpApprover () { return $('[id="field-approvers[0].approver_name"]') }
    get drpdwnValueApprover () { return $('[value="sisda"][aria-activedescendant="field-approver_name-option-1"][aria-controls="field-approver_name-popup"]') }
    get toggleStatus () { return $('#fieldSwitch') }
    
    //Notifikasi Tambahan
    get notif () { return $('#notifMessage') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await browser.switchToParentFrame()
        await browser.pause(3000)
        await browser.switchToFrame(0)
        await browser.pause(5000)
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 60000,
                timeoutMsg: 'expected title page not displayed after 60s'
            }
        )
        await expect(this.titlePage).toBeDisplayed({timeout:6000})
    }

    async pageCreate () {
        await expect(this.titlePage).toHaveText('Buat Sub Group Trade Program')
        await expect(browser).toHaveUrlContaining('dte/sub-group-trade-program/create')
    }

    async pageDetail () {
        await expect(this.titlePage).toHaveText('Sub Group Trade Program')
        // await expect(browser).toHaveUrlContaining('dte/sub-group-trade-program/detail')
    }

    async pageEdit () {
        await browser.switchToParentFrame()
        await browser.pause(3000)
        await browser.switchToFrame(0)
        await browser.pause(5000)
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 60000,
                timeoutMsg: 'expected title page not displayed after 60s'
            }
        )
        await expect(this.titlePage).toHaveText('Ubah Sub Group Trade Program')
        // await expect(browser).toHaveUrlContaining('dte/sub-group-trade-program/edit')
    }

    async name (employeeName) {
        await this.inpName.setValue(employeeName)
        await browser.pause(2000)
    }

    async clearName () {
        await this.inpName.clearValue()
    }

    async wbs (wbs) {
        await this.inpWbs.setValue(wbs)
    }

    async cost (cost) {
        await this.inpCostCenter.setValue(cost)
    }

    async gl (gl) {
        await this.inpGLAccount.setValue(gl)
    }

    async pph (pph) {
        await this.inpPPH.setValue(pph)
    }

    async approver (approver) {
        await this.inpApprover.scrollIntoView()
        await this.inpApprover.addValue(approver)
        await browser.pause(5000)
        await browser.keys("Enter")
        // await this.drpdwnValueApprover.waitForExist()
        // await this.drpdwnValueApprover.click()
    }

    async status () {
        await this.toggleStatus.click()
    }

    async submitForm () {
        await this.btnSimpan.waitForClickable();
        await expect(this.btnSimpan).toBeClickable()
        await this.btnSimpan.click()
        await browser.pause(5000)
    }

    async notification () {
        await this.notif.waitForExist();
    }

    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('dte/sub-group-trade-program/create');
    }
}

export default new FormSubGTPPage();
