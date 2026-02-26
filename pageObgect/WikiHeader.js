export class WikiHeader {
    constructor(page) {
        this.page = page
        this.mainMenuBtn = this.page.locator('header input#vector-main-menu-dropdown-checkbox')
        this.searchIcon = this.page.locator('button.cdx-search-input__end-button').first()
        this.searchInput = this.page.locator('div.cdx-text-input input.cdx-text-input__input').first()

    }

}