import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class bannerTidakBerlangganan extends Page {

    //define selectors using getter methods
    get titlePage () {return $('#headerSpandukOnline')}
    get titleFormPage () {return $('#wrapper > div > fuse-content > app-banner-create > div > div.content.p-24 > div > form > div.px-24 > h2')}
    get inputNamaSpanduk () {return $('[placeholder="Nama Spanduk"]')}
    get calendarSampai () {return $('[placeholder="Sampai"]')}
    get calendar () {return $('#cdk-overlay-0')}
    get nextButton () {return $('[class="mat-calendar-next-button mat-icon-button"]')}
    get popUpCalendar () { return $('mat-datepicker-content tbody.mat-calendar-body') }
    get selectDate () {return $('#mat-datepicker-1 > div > mat-month-view > table > tbody > tr:nth-child(5) > td.mat-calendar-body-cell.mat-calendar-body-active.ng-star-inserted > div')}
    get textGambar () {return $('#wrapper > div > fuse-content > app-banner-create > div > div.content.p-24 > div > form > div.ayo-middle > div:nth-child(6) > div:nth-child(6) > span')}
    get insertBanner () {return $$('#wrapper > div > fuse-content > app-banner-create > div > div.content.p-24 > div > form > div.ayo-middle > div:nth-child(6) > div:nth-child(6) > div > div')}
    get radioButtonCustomer () {return $$('#mat-radio-6')}
    get radioButtonCC () {return $$('#mat-radio-22')}
    get listBoxStatusTidakBerlangganan () {return $$('[formcontrolname="subscription"]')}
    get optionTipeTidakBerlangganan () {return $$('[role="option"]')} //berlangganan
    get scrollNamaHalaman () {return $('#wrapper > div > fuse-content > app-banner-create > div > div.content.p-24 > div > form > div.ayo-middle > div:nth-child(12) > div:nth-child(2) > h3')}
    get inputNamaHalaman () {return $('[formcontrolname="title"]')}
    get inputIsiHalaman () {return $$('[spellcheck="true"]')}
    get btnSimpan () {return $('[class="confirmation-button mat-raised-button"]')}
    get btnYa () {return $$('[class="confirm ng-star-inserted"]')}
    
    //a method to encapsule automation code to interact with the page
    async Page () {
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 600000,
                timeoutMsg: 'expected title page not displayed after 600s'
            }
        )
        await expect(this.titlePage).toBeDisplayed({timeout:600000})
    }
    
    async formPage () {
        async () => {
            expect(this.titleFormPage).toHaveTextContaining('Buat Spanduk Online');
        }
    }
    
    async namaSpanduk (nama_spanduk){
        await this.inputNamaSpanduk.setValue(nama_spanduk);
    }
    

    async dateSampai () {
        await this.calendarSampai.click()
        // await this.calendar.click()
        //await this.nextButton.click()
        await this.popUpCalendar.waitForDisplayed()
        await this.popUpCalendar.$$('tr')[2].$$('td')[0].$('div').click();
    }
    
    async insertGambarBanner () {
        await this.textGambar.scrollIntoView();
        await this.insertBanner[0].click()
        await browser.pause(10000);
    }
    
    async grupPenggunaCustomer () {
       await expect(this.radioButtonCustomer[0]).toBeClickable()
       await this.radioButtonCustomer[0].click()
    }

    async tipeKontenCC () {
        await expect(this.radioButtonCC[0]).toBeClickable()
        await this.radioButtonCC[0].click()
    }
    
    async tipeBerlangganan () {
        await expect(this.listBoxStatusTidakBerlangganan[0]).toBeClickable()
        await this.listBoxStatusTidakBerlangganan[0].click()
        await this.optionTipeTidakBerlangganan[34].click()
    }

    async namaHalaman (nama_halaman){
        await this.inputNamaHalaman.scrollIntoView()
        await this.inputNamaHalaman.setValue(nama_halaman);
    }
    
    async isiHalaman (isi_halaman){
        await this.scrollNamaHalaman.scrollIntoView()
        await this.inputIsiHalaman[0].setValue(isi_halaman);
    }
    
    async buttonSimpan (){
            await this.btnSimpan.scrollIntoView()
            await this.btnSimpan.click()
            //await browser.pause(15000);
    }
    
    async buttonYa (){
        await this.btnYa[0].click()
        await browser.pause(3000);
    }
    
    open (){
        return super.open('advertisement/banner');
    }
}

export default new bannerTidakBerlangganan ();