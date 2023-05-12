import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class VerificationApprovalPage extends Page {
    
    //define selectors using getter methods
    get titlePage () { return $('#contentTitle') }
    get searchInput () { return $('input[placeholder="Cari"]') }

    get columnTitle () { return $('#columnTitle') }
    get cellNamaTSM () { return $$('#cellTSM') } 
    get cellStatus () { return $$('#cellStatus') } 
    get btnSetujui () { return $$('#btnApprove') } 

    get dialogTitle () { return $('#dialogTitle') }
    get dialogCaption () { return $('#dialogCaption') }
    get btnConfirm () { return $('#btnConfirm') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await browser.switchToFrame(0)
        await browser.pause(3000)
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 60000,
                timeoutMsg: 'expected title page not displayed after 10s'
            }
        )
        await expect(this.titlePage).toBeDisplayed({timeout:60000})
    }
    
    async pageList2 () {
        await browser.switchToParentFrame()
        await browser.pause(10000)
        await browser.switchToFrame(0)
        await browser.pause(3000)
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 10000,
                timeoutMsg: 'expected title page not displayed after 10s'
            }
        )
        await expect(this.titlePage).toBeDisplayed({timeout:6000})
    }
    
    async searchTaskVerif (taskVerifName) {
        await expect(this.searchInput).toBeDisplayed()
        await this.searchInput.click()
        await this.searchInput.setValue(taskVerifName)
        // await browser.pause(5000)
    }

    async searchResult (taskVerifName, status) {
        await this.cellNamaTSM[0].waitForExist();
        await expect(this.cellNamaTSM[0]).toBeExisting();
        await expect(this.cellNamaTSM[0]).toHaveText(taskVerifName);
        // await expect(this.cellStatus[0]).toHaveText(status);
    }

    async approve () {
        await this.btnSetujui[0].click()
    }

    async dialogConfirm (){
        await this.dialogTitle.waitForExist();
        await expect(this.dialogCaption).toHaveTextContaining('Apakah Anda yakin menyetujui verifikasi misi ini?')
        await this.btnConfirm.click()
    }

    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('dte/verification-approval');
    }
}

export default new VerificationApprovalPage();