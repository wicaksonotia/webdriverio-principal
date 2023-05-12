import Page from '../page';
const path = require('path');

//sub page containing specific selectors and methods for a specific page
class FormCTAPage extends Page {

    //define selectors using getter methods
    get titlePage () { return $('#contentTitle') }

    get dialogTitle () { return $('[class="MuiTypography-root MuiTypography-h6"]') }
    get btnTutup () { return $('[class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary"]') }
    get btnKirim () {return $('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"]')}
    get nama () { return $('#field-name') }
    get deskripsi () { return $('#field-description') }
    get startDate () { return $$('[placeholder="DD-MM-YYYY"]') }
    get endDate () { return $$('[placeholder="DD-MM-YYYY"]') }
    get popUpCalendar () { return $('[class="MuiPickersSlideTransition-transitionContainer MuiPickersCalendar-transitionContainer"]') }
    get zona () { return $$('#fieldSelect') }
    get cbZona () { return $$('#checkbox') }
    get cbTargetAudience () { return $('[name="target_audience"]') }
    get cbRowTargetAudience () { return $$('[aria-label="Select Row checkbox"]') }
    get retailClassification () { return $('[role="button"][id="field-classification"]') }
    get selectRetailClassification () { return $$('[role="option"]') }
    get status () { return $('[name="status"]') }
    get btnExport () { return $('#btnExport') }
    get btnImport () { return $('#btnImport') }
    get btnSimpan () { return $('#btnSave') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await browser.switchToParentFrame()
        await browser.pause(3000)
        await browser.switchToFrame(0)
        await browser.pause(5000)
        await browser.waitUntil(
            async () => (await (this.titlePage).isExisting()),
            {
                timeout: 20000,
                timeoutMsg: 'expected title page not existing after 20s'
            }
        )
        await expect(this.btnSimpan).toBeDisplayed()
    }

    async pageCreate () {
        await expect(this.titlePage).toHaveText('Tambah CTA')
        await expect(browser).toHaveUrlContaining('user-management/call-to-action')
    }

    async pageEdit () {
        await expect(this.titlePage).toHaveText('Ubah CTA')
        await expect(browser).toHaveUrlContaining('user-management/call-to-action')
    }

    async createCTA (name, desc, mulai, selesai) {
        await this.nama.setValue(name)
        await this.deskripsi.setValue(desc)
        await this.startDate[0].setValue(mulai)
        // await this.popUpCalendar.waitForExist();
        // await this.popUpCalendar.$$('tr')[1].$$('td')[2].$('div').click();
        await this.endDate[1].setValue(selesai)
        // await this.popUpCalendar.waitForExist();
        // await this.popUpCalendar.$$('tr')[1].$$('td')[3].$('div').click();
    }

    async editCTA (name) {
        await this.nama.setValue(name)
    await browser.pause(5000)
    // await this.deskripsi.setValue(desc)
    }

    async selectTargetAudience () {
        await this.cbTargetAudience.scrollIntoView()
        await this.cbTargetAudience.click()
        await browser.pause(5000)
        await this.btnImport.scrollIntoView()
        await this.cbRowTargetAudience[0].click()
        await this.cbRowTargetAudience[1].click()
        await this.cbRowTargetAudience[2].click()
        await this.btnExport.click()
        await browser.pause(15000)
        await this.cbRowTargetAudience[0].click()
        await this.cbRowTargetAudience[1].click()
        await this.cbRowTargetAudience[2].click()
        await this.btnImport.click()
        await browser.pause(25000)
        await this.btnKirim.click()
        await this.cbTargetAudience.scrollIntoView()
        await this.cbTargetAudience.click()
        await this.titlePage.scrollIntoView()
    }

    async selectZone () {
        await browser.pause(10000)
        await this.zona[1].scrollIntoView()
        await this.zona[1].click()
        await this.cbZona[5].click()
        await browser.keys("Escape")
        await browser.pause(10000)
        await this.zona[2].click()
        await this.cbZona[2].click()
        await browser.keys("Escape")
        await browser.pause(10000)
        await this.zona[3].click()
        await this.cbZona[4].click()
        await browser.keys("Escape")
        await browser.pause(10000)
        await this.zona[4].click()
        await this.cbZona[2].click()
        await browser.keys("Escape")
        await browser.pause(10000)
        await this.zona[5].click()
        await this.cbZona[0].click()
        await browser.keys("Escape")
        await browser.pause(10000)
        await this.zona[6].click()
        await this.cbZona[0].click()
        await this.cbZona[1].click()
        await this.cbZona[2].click()
        await browser.keys("Escape")
        await browser.pause(10000)
        await this.retailClassification.click()
        await this.selectRetailClassification[1].click()
        await this.retailClassification.click()
        await this.selectRetailClassification[0].click()
    }

    async switchStatus () {
        await this.status.click()
    }

    async submitCTA () {
        await this.btnSimpan.scrollIntoView();
        await expect(this.btnSimpan).toBeClickable()
        await this.btnSimpan.click()
    }
    
    open () {
        return super.open('');
    }
}

export default new FormCTAPage();