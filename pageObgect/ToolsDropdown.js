export class ToolsDropdown {
    constructor(page) {
        this.page=page
        this.toolsButton = this.page.locator('#vector-page-tools-dropdown-checkbox')
        this.infoButton = this.page.locator('a').filter({ hasText: 'Page information' })
        this.getShortenedUrl = this.page.locator('//li[@id="t-urlshortener"]')
    }
}