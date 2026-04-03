import { BasicPage } from "./BasicPage"
export class SearchBlock extends BasicPage {
    constructor(page) {
    super(page)
        this.page = page
        this.proposedContent = page.locator('a.cdx-menu-item__content span span').last()
    }


    async enterAWordIntoSearch(word)
    {
        await this.wikiHeader.searchInput.fill(word)
    }
}