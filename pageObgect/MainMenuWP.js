import { expect } from "@playwright/test"

export class MainMenuWP {
    constructor(page) {
        this.page = page
        this.mainMenuContainer = this.page.locator('div.vector-dropdown-content div#vector-main-menu-unpinned-container')
        this.linkFromMainMenuContainerPart1 = this.page.locator('#vector-main-menu #p-navigation ul li')
        this.linkFromMainMenuContainerPart2 = this.page.locator('#vector-main-menu #p-interaction ul li')
        this.currentEvents = page.locator('li').getByText('Current events').first()
        this.contactUs = page.locator('.vector-menu-content-list li').getByText('Contact us')
        this.recentChanges = this.page.locator('li').filter({ hasText: 'Recent changes' }).first()
        this.specialPages = this.page.locator('li').filter({ hasText: 'Special pages' }).first()
        this.moveToSideBarButton = this.page.locator('button').filter({ hasText: 'move to sidebar' }).first()
        this.mainMenuOnSideBar = page.locator('.vector-column-start')
        this.mainMenuOnSideBarLI = this.mainMenuOnSideBar.locator('li')
        this.HideButtonOnMainMenuOnSideBar = this.page.locator('button').filter({ hasText: 'hide' }).first()
    }


    async verifyAllMenuOptionsArePresent() {

        let container1 = ['Main page', 'Contents', 'Current events', 'Random article', 'About Wikipedia', 'Contact us']
        let container2 = ['Help', 'Learn to edit', 'Community portal', 'Recent changes', 'Upload file', 'Special pages']
        let numberOfMenuOptions = await this.linkFromMainMenuContainerPart1.count()
        console.log(numberOfMenuOptions)
        for (let el = 0; el < numberOfMenuOptions; el++) {
            await expect(await this.linkFromMainMenuContainerPart1.nth(el)).toContainText(container1[el])
        }

        numberOfMenuOptions = await this.linkFromMainMenuContainerPart2.count()
        console.log(numberOfMenuOptions)
        for (let el = 0; el < numberOfMenuOptions; el++) {
            await expect(await this.linkFromMainMenuContainerPart2.nth(el)).toContainText(container2[el])
        }
    }
}