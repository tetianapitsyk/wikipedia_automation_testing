import { WikiHeader } from "./WikiHeader"

export class SearchBlock extends WikiHeader {
    constructor(page) {
                super(searchInput)

        this.page = page
        this.searchFooter = page.locator('a.cdx-menu-item__content span span').last()
    }


    async enterAWordIntoSearch(word)
    {
        await searchInput.fill(word)

    }

}

