import { expect } from "@playwright/test"
export class ToolsDropdown {
    constructor(page) {
        this.page=page
        this.toolsButton = this.page.locator('#vector-page-tools-dropdown-checkbox')
        this.toolsDropdownContainer = this.page.locator('#p-tb .vector-menu-content')
        this.infoButton = this.page.locator('a').filter({ hasText: 'Page information' })
        this.getShortenedUrl = this.page.locator('//li[@id="t-urlshortener"]')
    }

    async checkIfOptionIsPresentInContainer(optionName){
        await expect(this.toolsDropdownContainer).toContainText(optionName)
    }
}