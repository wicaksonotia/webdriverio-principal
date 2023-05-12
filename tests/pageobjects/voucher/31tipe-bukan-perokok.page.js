import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class voucherBukanPerokok extends Page {

    //define selectors using getter methods
    get titlePage () {return $('#headerTambahB2cVoucher')}
    get titleFormPage (){return $$('[class="mat-tab-label-content"]')}
    get titleFormPage2 () {return $$('[class="mat-tab-label-content"]')}
    get titleFormPage3 () {return $('#mat-tab-content-0-2 > div > app-panel-consumer-voucher > div')}
    
    get tabList () {return $('[role="tablist"]')}
    get tabPanelCustomer () {return $$('[role="tab"]')}
    get inputNamaVoucher () {return $('[placeholder="Nama Voucher"]')}
    get inputNamaLainVoucher () {return $('[placeholder="Nama Lain Voucher"]')}
    get inputNilaiVoucher () {return $('[placeholder="Nilai Voucher"]')}
    get inputJumlahVoucher () {return $('[placeholder="Jumlah Voucher per Consumer"]')}
    get calendarTglAwalProgram () {return $('[placeholder="Tanggal Awal Program"]')}
    get popUpCalendar () { return $('mat-datepicker-content tbody.mat-calendar-body')}
    get calendarTglAkhirProgram () {return $('[placeholder="Tanggal Akhir Program"]')}
    get calendarTglAwalVoucher () {return $('[placeholder="Tanggal Awal Pemakaian Voucher"]')}
    get calendarTglKadaluarsaVoucher () {return $('[placeholder="Tanggal Kedaluwarsa Voucher"]')}
    get checkboxPesanAntar () {return $$('[class="mat-checkbox mat-accent ng-star-inserted"]')}
    get checkboxLangsungkeToko () {return $$('[class="mat-checkbox mat-accent ng-star-inserted"]')}
    get buttonSimpan () {return $('button.confirmation-button.mat-raised-button')}
    get customer () {return $('[class="mt-12"]')}
    get checkboxBukanPerokok () {return $$('#mat-checkbox-19')}
    get checkboxCustomer () {return $$('[class="mat-checkbox-layout"]')}
    get inputDari () {return $('[placeholder="Dari"]')}
    get inputSampai () {return $('[placeholder="Sampai"]')}
    get scrollJenisKelamin (){return $('[formcontrolname="gender"]')}
    get radioButtonSemua () {return $$('#mat-radio-2')} 
    get scrollReimburs() {return $('[class="pb-24 px-12"]')}
    get checkboxReimbursment () {return $$('[class="mat-checkbox-inner-container"]')}
    get cbReimburs () {return $$('[class="pb-24 px-12"]')}
    get coloumPV () {return $$('[class="ayo-middle p-24"]')} 
    get calendarTglAwalTukarVoucher () {return $('[placeholder="Tanggal Awal Penukaran Voucher"]')}
    get popUpCalendar2 () {return $('#cdk-overlay-8')}
    get popUpCalendar3 () {return $$('mat-datepicker-content tbody.mat-calendar-body')}
    get calendarTglAkhirTukarVoucher () {return $('[placeholder="Tanggal Berakhir Penukaran Voucher"]')}
    get checkboxVoucherB2B () {return $$('[formcontrolname="isVoucherB2B"]')}
    get textGambar () {return $('#mat-tab-content-0-4 > div > app-design-voucher > div > div > form > div.pb-24.px-24 > div:nth-child(6) > div')}
    get insertVoucher () {return $('[class="banner-image-custom "]')}
    get inputIsiHalaman () {return $$('[spellcheck="true"]')}
    get buttonSaveSetting () {return $('[class="save-button mat-raised-button ng-star-inserted"]')}
    get buttonPocesstoApproval () {return $('[class="publish-button mat-raised-button ng-star-inserted"]')}
    get buttonApprove () {return $('[class="publish-button mat-raised-button ng-star-inserted"]')}
    get buttonYaLanjutkan () {return $('#btn-confirm-import')}
    get buttonPublish1 () {return $('[class="publish-button mat-raised-button ng-star-inserted"]')}
    get buttonPublish2 () {return $('button.confirm.mat-button.ng-star-inserted')}
                         
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
        await expect(this.titleFormPage[0]).toBeDisplayed()
    }
    
    async formPage2 () {
        await expect(this.titleFormPage[1]).toBeDisplayed()
    }
    
    async formPage3 (){
        await expect(this.titleFormPage[2]).toBeDisplayed()
    }
    
    async formPage4 (){
        await expect(this.titleFormPage[3]).toBeDisplayed()
    }
    
    async formpagepenukaranVoucher (){
        await expect(this.coloumPV[0]).toBeDisplayed()
    }
    
    async formPage5 (){
        await expect(this.titleFormPage[4]).toBeDisplayed()
    }
    
    async formPage6 (){
        await expect(this.titleFormPage[5]).toBeDisplayed()
    }
    
    async namaVoucher (nama_voucher) {
        await this.inputNamaVoucher.setValue(nama_voucher);
    }
    
    async namaLainVoucher (nama_lain_voucher) {
        await this.inputNamaLainVoucher.setValue(nama_lain_voucher);
    }
    
    async nilaiVoucher (nilai_voucher) {
        await this.inputNilaiVoucher.setValue(nilai_voucher)
    }
    
    async jumlahVoucher (jumlah_voucher) {
        await this.inputJumlahVoucher.setValue(jumlah_voucher)
    }
    
    async tanggalAwalProgram () {
        await this.calendarTglAwalProgram.click()
        await this.popUpCalendar.waitForDisplayed()
        await this.popUpCalendar.$$('tr')[1].$$('td')[2].$('div').click();
    }
    
    async tanggalAkhirProgram () {
        await this.calendarTglAkhirProgram.click()
        await this.popUpCalendar.waitForDisplayed()
        await this.popUpCalendar.$$('tr')[4].$$('td')[0].$('div').click();
    }
    
    async tanggalAwalPemakaianVoucher () {
        await this.calendarTglAwalVoucher.scrollIntoView()
        await this.calendarTglAwalVoucher.click()
        await this.popUpCalendar.waitForDisplayed()
        await this.popUpCalendar.$$('tr')[1].$$('td')[2].$('div').click();
    }
    
    async tanggalKadaluarsaVoucher () {
        await this.calendarTglKadaluarsaVoucher.click()
        await this.popUpCalendar.waitForDisplayed()
        await this.popUpCalendar.$$('tr')[4].$$('td')[0].$('div').click();
    }
    
    async pesanAntar (){
        await this.checkboxPesanAntar[0].scrollIntoView()
        await this.checkboxPesanAntar[0].click()
    }
    
    async langsungkeToko (){
        await expect(this.checkboxLangsungkeToko[0]).toBeClickable()
        await this.checkboxLangsungkeToko[0].click()
    }
    
    async tombolSimpan1 (){
        await this.buttonSimpan.click()
        await browser.pause(5000);
    }
    
    async tombolSimpan2 (){
        await this.buttonSimpan.scrollIntoView()
        await this.buttonSimpan.click()
        await browser.pause(15000);
    }
    
    async tipeCustomer (){
        await expect(this.checkboxBukanPerokok[0]).toBeClickable()
        await this.checkboxBukanPerokok[0].click()
    }
    
    async batasUmurDari (input_dari){
        await this.inputDari.scrollIntoView()
        await this.inputDari.setValue(input_dari);
    }
    
    async batasUmurSampai (input_sampai){
        await this.inputSampai.setValue(input_sampai);
    }
    
    async jenisKelamin (){
        await this.scrollJenisKelamin.scrollIntoView()
        await this.radioButtonSemua[0].click()
    }
    async tombolSimpan3 (){
        await this.buttonSimpan.scrollIntoView()
        await this.buttonSimpan.click()
    }
    
    async cbReimbursment (){
        await this.checkboxReimbursment[0].scrollIntoView()
        await expect(this.checkboxReimbursment[0]).toBeClickable()
        await this.checkboxReimbursment[0].click()
        await browser.pause(5000);
    }
    
    async tanggalAwalPenukaranVoucher (){
        await this.calendarTglAwalTukarVoucher.click()
        await this.popUpCalendar.waitForDisplayed()
        await this.popUpCalendar.$$('tr')[1].$$('td')[2].$('div').click();
    }
    
    async tanggalBerakhirPenukaranVoucher (){
        await this.calendarTglAkhirTukarVoucher.click()
        await this.popUpCalendar.waitForDisplayed()
        await this.popUpCalendar.$$('tr')[4].$$('td')[0].$('div').click();
    }
    
    async opsiPenukaranVoucher (){
        await this.checkboxVoucherB2B[0].scrollIntoView()
        await this.checkboxVoucherB2B[0].click()
    }
    
    async tombolSimpan4 (){
        await this.buttonSimpan.scrollIntoView()
        await this.buttonSimpan.click()
    }
    
    async gambarVoucher () {
        await this.insertVoucher.scrollIntoView();
        await expect(this.insertVoucher).toBeClickable()
        await this.insertVoucher.click()
        await browser.pause(10000);
    }
    
    async isiHalaman (isi_halaman){
        await this.inputIsiHalaman[0].scrollIntoView()
        await this.inputIsiHalaman[0].setValue(isi_halaman);
    }
    
    async tombolSimpan5 (){
        await this.buttonSimpan.scrollIntoView()
        await this.buttonSimpan.click()
    }
    
    async tombolSaveSetting (){
        await this.buttonSaveSetting.scrollIntoView()
        await expect(this.buttonSaveSetting).toBeClickable()
        await this.buttonSaveSetting.click()
    }
    
    async tombolProcesstoApproval (){
        await this.buttonPocesstoApproval.scrollIntoView()
        await expect(this.buttonPocesstoApproval).toBeClickable()
        await this.buttonPocesstoApproval.click()
    }
    
    async tombolApprove (){
        await this.buttonApprove.scrollIntoView()
        await expect(this.buttonApprove).toBeClickable()
        await this.buttonApprove.click()
    }
    
    async tombolyaLanjutkan (){
        await this.buttonYaLanjutkan.scrollIntoView()
        await expect(this.buttonYaLanjutkan).toBeClickable()
        await this.buttonYaLanjutkan.click()
    }
    
    async tombolPublish1 (){
        await this.buttonPublish1.scrollIntoView()
        await expect(this.buttonPublish1).toBeClickable()
        await this.buttonPublish1.click()
    }
    
    async tombolPublish2 (){
        await this.buttonPublish2.scrollIntoView()
        await expect(this.buttonPublish2).toBeClickable()
        await this.buttonPublish2.click()
    }
}
export default new voucherBukanPerokok ();