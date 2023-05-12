import ChromeDriverService from 'wdio-chromedriver-service';
import Page from '../page';
const path = require('path');

//sub page containing specific selectors and methods for a specific page
class FormMasterBrandPage extends Page {

    //define selectors using getter methods
    get titlePage () { return $('#contentTitle') }
    
    get btnSimpan () { return $('#btnSave') }

    get inpSKUName () { return $('#field-sku_name') }
    get inpGroupName () { return $('#field-brand_group_id') }
    get inpImage () { return $$('#uploadFile') }
    get toggleStatus () { return $('[name="status"]') }

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
                timeoutMsg: 'expected title page not displayed after 6s'
            }
        )
        await expect(this.titlePage).toBeDisplayed({timeout:6000})
    }

    async pageCreate () {
        await expect(this.titlePage).toHaveText('Buat Master Brand')
        await expect(browser).toHaveUrlContaining('dte/master-brand')
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
                timeoutMsg: 'expected title page not displayed after 6s'
            }
        )
        await expect(this.titlePage).toHaveText('Ubah Master Brand')
        await expect(browser).toHaveUrlContaining('dte/master-brand')
    }

    async SKU (SKUName) {
        await this.inpSKUName.setValue(SKUName)
    }

    async group (groupName) {
        await this.inpGroupName.addValue(groupName)
        await browser.pause(5000)
        await browser.keys("Enter")
    }

    async uploadImage () {
        // await this.inpImage[0].click()
        await browser.pause(15000)
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

    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('dte/master-brand');
    }
}

export default new FormMasterBrandPage();
