// URL wiki media
//https://commons.wikimedia.org/wiki/Main_Page

export class MainMenuWM {
    constructor(page) {
        this.page = page
        this.mainMenuContainer = this.page.locator('div.vector-dropdown-content div#vector-main-menu-unpinned-container')
        //this.currentEvents = page.locator('li').getByText('Current events').first()
        this.contactUs = page.locator('.vector-menu-content-list li').getByText('Contact us')

        this.contactUsHeader = page.locator('.mw-content-container header h1')

        this.moveToSideBarButton = this.page.locator('button').filter({ hasText: 'move to sidebar' }).first()
        this.mainMenuOnSideBar = page.locator('.vector-column-start')
        this.mainMenuOnSideBarLI = this.mainMenuOnSideBar.locator('li')
        this.HideButtonOnMainMenuOnSideBar = this.page.locator('button').filter({ hasText: 'hide' }).first()
        this.specialPages = this.page.locator('li').filter({ hasText: 'Special pages' }).first()
        this.recentChanges = this.page.locator('li').filter({ hasText: 'Recent changes' }).first()
        
        
        

    }

    
   
}