
class MainMenu{
    constructor(page){
    this.page = page
    this.mainMenuBtn = this.page.locator('header input#vector-main-menu-dropdown-checkbox')
    this.mainMenuContainer = this.page.locator('div.vector-dropdown-content div#vector-main-menu-unpinned-container')
    this.currentEvents=page.locator('li').getByText('Current events').first()

}

}

module.exports = {MainMenu}