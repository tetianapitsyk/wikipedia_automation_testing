import { BasicPage } from "../compositeObject/BasicPage"

export class SearchBlock extends BasicPage {
    constructor(page) {
    super(page)
        this.page = page
        this.proposedContent = page.locator('a.cdx-menu-item__content span span').last()
        this.basicPage = new BasicPage(page)    
        
    }


    async enterAWordIntoSearch(word)
    {
        await this.wikiHeader.searchInput.fill(word)
    }
}