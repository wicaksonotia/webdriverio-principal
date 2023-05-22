import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class formKoinPotonganBelanjaPage extends Page {

    //define selectors using getter methods
    get titlePage() {return $('#headerKoinPotonganBelanja')}
    get inputNamaProgram() {return $('[formcontrolname="name"]')}

    get selectGroupTradeProgram() {return $('[formcontrolname="trade_creator_group_id"]')}
    get inputCariGTP() {return $$('[placeholder="Cari"]')}
    get optionGTP() {return $$('[role="option"]')}
    get checkBoxBatasiDenganProduk() {return $('[formcontrolname="limit_by_product"]')}
    get inputBatasanBerdasarkanProduk() {return $('[placeholder="Batasan Berdasarkan Produk"]')}
    get optionBatasan() {return $$('[role="option"]')}
    get btnSimpan() {return $('[class="confirmation-button mat-raised-button ng-star-inserted"]')}

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

}

export default new formKoinPotonganBelanjaPage();