import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class koinPotonganBelanjaPage extends Page {

    //define selectors using getter methods
    get titlePage () {return $('#headerKoinPotonganBelanja')}
    get btnCreate () {return $('[class="mat-raised-button ng-star-inserted"]')}
    get btnEdit () {return $$('[class="secondary-text mat-icon material-icons"]')}


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

async Tambah(){
    await this.btnCreate.click()
    await browser.pause(2000);
}

async Edit(){
    await this.btnEdit[0].click()
    await browser.pause(2000);
}



}
export default new koinPotonganBelanjaPage();