import { expect } from "@playwright/test"
import { BasicPage } from "../compositeObject/BasicPage"



export class PageInformation {
    constructor(page) {
        this.page = page
        this.infoTable = this.page.locator('.wikitable mw-page-info')
        this.infoPageTitle = this.page.locator('h1#firstHeading')
        this.tableOfContentOnSideBar = this.page.locator('.vector-sticky-pinned-container nav')
        this.showTableOfContentButton = this.page.locator('#vector-page-titlebar-toc-checkbox')
        this.basicInformation = this.tableOfContentOnSideBar.locator('ul a').nth(1)
        this.pageProtection = this.tableOfContentOnSideBar.locator('ul a').nth(2)
        this.editHistory = this.tableOfContentOnSideBar.locator('ul a').nth(3)
        this.pageProperties = this.tableOfContentOnSideBar.locator('ul a').nth(4)
        this.externalTools = this.tableOfContentOnSideBar.locator('ul a').nth(5)
        this.basicInformationTable = this.page.locator('table.wikitable').nth(0)
        this.pageProtectionTable = this.page.locator('table.wikitable').nth(1)
        this.editHistoryTable = this.page.locator('table.wikitable').nth(2)
        this.pagePropertiesTable = this.page.locator('table.wikitable').nth(3)
        this.lintErrorsTable = this.page.locator('table.wikitable').nth(4)
        this.externalToolsTable = this.page.locator('.mw-heading')
        this.shortenedUrlDialog = this.page.locator('//div[@class="oo-ui-window-body"]')
        this.copyBtn = this.page.locator('//span[@class="oo-ui-actionFieldLayout-button"]')
        this.confirmationMessage = this.page.locator('//div[@class="mw-notification-content"]')
        this.basicPage = new BasicPage(page)    
        
    }

    async verifyIfTableOfContentOpensNecessaryChapter() {
        let buttons = [this.basicInformation, this.pageProtection, this.editHistory, this.pageProperties, this.externalTools]
        let tables = [this.basicInformationTable, this.pageProtectionTable, this.editHistoryTable, this.pagePropertiesTable, this.externalToolsTable]
        for (let n = 0; n < buttons.length; n++) {
            await buttons[n].click()
            await expect(tables[n]).toBeInViewport()
        }
    }
}