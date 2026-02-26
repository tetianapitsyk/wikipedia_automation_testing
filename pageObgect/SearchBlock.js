import { WikiHeader } from "./WikiHeader"

export class SearchBlock extends WikiHeader {
    constructor(page) {
    super(page)

        this.page = page
        this.searchFooter = page.locator('a.cdx-menu-item__content span span').last()
        this.proposedContent = page.locator('a.cdx-menu-item__content span span').last()
    }


    async enterAWordIntoSearch(word)
    {
        await this.searchInput.fill(word)

    }

}

