import { expect } from "@playwright/test"

export default class SearchObject {
    constructor(page) {
        this.page = page
        this.searchIcon = this.page.locator('button.cdx-search-input__end-button').first()
        this.searchInput = this.page.locator('div.cdx-text-input input.cdx-text-input__input').first()
        this.images = this.page.locator('tbody tr td div div.center')
        this.searchReccomendation = this.page.locator('a.cdx-menu-item__content span span').last()
       
    }

    async searchAndOpenLvivPageFromDropdown() {
        await this.searchIcon.click()
        await this.searchInput.fill('lvi')
        await this.page.locator('ul.cdx-menu__listbox li').filter({ hasText: 'Lviv' }).first().click()
    }

    async testShowAllBtnForImages(){
        //verify that 3 img are shown when show all is selected
          await this.page.locator('ul #ca-nstab-main').waitFor()          
          await this.page.locator('div').locator('.switcher-container label').filter({ hasText: 'Show all' }).click()
          let numberOfMap = await this.images.count()
          expect(numberOfMap).toBe(3)
    }

}

//module.exports = { SearchObject }
