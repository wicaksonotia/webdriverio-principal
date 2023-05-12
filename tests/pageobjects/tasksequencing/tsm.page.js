import { expectChai } from 'chai';
import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class TaskSequencingPage extends Page {
    
    get MenuTaskSequencingPage () {return $('#menu-339')}
    //define selectors using getter methods
    get titlePage () { return $('#headerTaskSequencing') }
    get titlePage2 () { return $('[id="headerDte.task_sequencing.text1"]') }
    get btnCreate () { return $('#btnBuatTaskSequencing') }
    get searchInput () { return $('#search') }
    get tabMenu () { return $$('mat-tab-header div[role="tab"]') } // Default, Personalize
    get titleTab () { return $('mat-tab-body div> h2') }

    //Table
    get filterStatus () { return $('datatable-header-cell[title="Status"]')}
    get status () { return $$('#status') }
    get datatableBody () { return $('#datatable-body') }
    get dataRow () { return $('#data-row') }
    get dataCell () { return $$('#data-cell') }
    get btnDuplicate () { return $('#btn-duplikat') }
    get btnRequestFile () { return $('#btn-request_file') }
    get btnExport () { return $('#btn-export') }
    get btnEdit () { return $$('#btn-edit') }
    get btnDelete () { return $('#btn-delete') }
    get lastPage () { return $('a[aria-label="go to last page"]') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await browser.waitUntil(
            async () => (await (this.searchInput).isDisplayed()),
            {
                timeout: 3000000,
                timeoutMsg: 'expected search input not displayed after 3000s'
            }
        )
        // await expect(this.titlePage).toBeDisplayed({timeout:6000})
    }

    async page2 () {
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 300000,
                timeoutMsg: 'expected title page not displayed after 300s'
            }
        )
        await expect(this.titlePage).toBeDisplayed({timeout:6000})
    }
    
    async pageList () {
        // await this.searchInput.waitForExist();
        // await expect(this.searchInput).toBeExisting()
        // await expect(this.titlePage2).toHaveText('Task Sequencing')
        await this.MenuTaskSequencingPage.scrollIntoView()
        await this.MenuTaskSequencingPage.click()
        await expect(browser).toHaveUrlContaining('dte/task-sequencing')
    }

    async pageList2 () {
        //await this.searchInput.waitForExist();
        //await expect(this.searchInput).toBeExisting()
        await expect(this.titlePage).toHaveText('Task Sequencing')
        await browser.pause(3000)
        //await expect(browser).toHaveUrlContaining('dte/task-sequencing')
    }

    async getAlert () { 
        const alertSuccess = await browser.getAlertText();
        console.log(alertSuccess);
    }

    async tabDefault () {
        await this.tabMenu[0].click()
        await expect(this.titleTab).toHaveText('Task Sequencing Management')
    }

    async tabPersonalize () {
        await this.tabMenu[1].click()
        await expect(this.titleTab).toHaveText('Personalize Management')
    }
    
    async createTaskSequencing () {
        await this.btnCreate.waitForExist()
        await this.btnCreate.waitForClickable()
        await expect(this.btnCreate).toBeExisting()
        await expect(this.btnCreate).toBeClickable()
        await this.btnCreate.click()
    }

    async searchTaskSequencing (taskSequencingName) {
        //await expect(this.searchInput).toBeDisplayed()
        await this.searchInput.setValue(taskSequencingName)
        await browser.pause(1000)
        // await browser.pause(3000)
    }

    async searchResult (taskSequencingName) {
        await browser.waitUntil(
            async () => (await (this.dataCell[0].$('div > span')).isExisting()),
            {
                timeout: 20000,
                timeoutMsg: 'expected search result not displayed after 20s'
            }
        )
        await browser.pause(3000)
        // await this.dataCell[1].$('div > span').waitForExist();
        await expect(this.dataCell[0].$('div > span')).toBeExisting();
        await expect(this.dataCell[0].$('div > span')).toHaveText(taskSequencingName);
    }

    async detailTask (taskSequencingName) {  //click name
        await browser.pause(5000)
        //await expect(this.dataCell[0].$('div > span')).toBeExisting();
        //await expect(this.dataCell[0].$('div > span')).toHaveText(taskSequencingName);
        await this.dataCell[0].$('div > span').scrollIntoView();
        await this.dataCell[0].$('div > span').click();
    }

    async editTask () {           //click edit button
        // await browser.execute(() => document.body.style.zoom='70%')
        await browser.pause(9000)
        //await expect(this.btnEdit[0]).toBeExisting()
        await this.btnEdit[0].scrollIntoView()
        await this.btnEdit[0].click()
    }

    async editStatus (statusTsm) {    //click edit button by status
        // await this.filterStatus.waitForExist();
        // await expect(this.filterStatus).toBeClickable()
        // await this.filterStatus.click()
        // await browser.pause(2000)
        // await expect(this.lastPage).toBeClickable()
        // await this.lastPage.click()
        // await browser.pause(2000)
        await expect(this.status[0]).toHaveText(statusTsm)
        await expect(this.btnEdit[0]).toBeExisting()
        await this.btnEdit[0].click()
    }

    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('dte/task-sequencing');
    }
}

export default new TaskSequencingPage();