import Page from '../page';
const path = require('path');

//sub page containing specific selectors and methods for a specific page
class FormPrincipalNotesforRetailerPage extends Page {

    //define selectors using getter methods
    get titlePage () { return $('#headerCreateNotes') }
    get titlePageEdit () { return $('#headerEditNotes') }

    get name () { return $('[name="notesMdl.name"]') }
    get description () { return $('[placeholder="Description Notes"]') }
    get startDate () { return $$('[aria-label="Open calendar"]') }
    get endDate () { return $$('[aria-label="Open calendar"]') }
    get popUpCalendar () { return $('mat-datepicker-content tbody.mat-calendar-body') }
    get option () { return $$('[role="option"]') }
    get zone () { return $('[formcontrolname="division"]') }
    get region () { return $('[formcontrolname="region"]') }
    get area () { return $('[formcontrolname="area"]') }
    get salespoint () { return $('[formcontrolname="salespoint"]') }
    get district () { return $('[formcontrolname="district"]') }
    get territory () { return $('[formcontrolname="territory"]') }
    get status () { return $('[class="mat-slide-toggle-bar"]') }
    get btnSimpan () { return $('[class="confirmation-button mat-raised-button"]') }

    //a method to encapsule automation code to interact with the page
    async page () {
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
        await expect(this.titlePage).toHaveText('Create Notes')
        await expect(browser).toHaveUrlContaining('notesretailer/notes-retailer-create')
    }

    async pageEdit () {
        await expect(this.titlePageEdit).toBeDisplayed()
        await expect(this.titlePageEdit).toHaveText('Edit Notes')
        // await expect(browser).toHaveUrlContaining('user-management/field-force/edit/')
    }

    async createNotes (name, desc) {
        await browser.pause(25000)
        await this.name.setValue(name)
        await browser.pause(5000)
        await this.description.setValue(desc)
        await browser.pause(5000)
        await this.startDate[0].click()
        await this.popUpCalendar.waitForExist();
        await this.popUpCalendar.$$('tr')[4].$$('td')[3].$('div').click(); //baris x kolom, contoh: 1,4: 6 Januari 2022
        await this.endDate[1].click()
        await this.popUpCalendar.waitForExist();
        await this.popUpCalendar.$$('tr')[5].$$('td')[0].$('div').click(); //contoh: 4,6: 29 Januari 2022
        await browser.pause(25000)
        await this.zone.click()
        await this.option[5].click()
        await browser.keys("Escape")
        await browser.pause(10000)
        await this.region.click()
        await this.option[2].click()
        await browser.keys("Escape")
        await browser.pause(10000)
        await this.area.click()
        await this.option[4].click()
        await browser.keys("Escape")
        await browser.pause(10000)
        await this.salespoint.click()
        await this.option[2].click()
        await browser.keys("Escape")
        await browser.pause(10000)
        await this.district.click()
        await this.option[0].click()
        await browser.keys("Escape")
        await browser.pause(10000)
        await this.territory.click()
        await this.option[1].click()
        await browser.keys("Escape")
        await browser.pause(10000)
    }

    async editNotes () {
        await this.status.click()
    }

    async submitNotes () {
        await this.btnSimpan.scrollIntoView();
        await expect(this.btnSimpan).toBeClickable()
        await this.btnSimpan.click()
    }
    
    open () {
        return super.open('');
    }
}

export default new FormPrincipalNotesforRetailerPage();