import { expect } from "@playwright/test"

export class MainMenuWP {
    constructor(page) {
        this.page = page
        this.mainMenuContainer = this.page.locator('div.vector-dropdown-content div#vector-main-menu-unpinned-container')

        this.currentEvents = page.locator('li').getByText('Current events').first()

        this.contactUs = page.locator('.vector-menu-content-list li').getByText('Contact us')

        this.moveToSideBarButton = this.page.locator('button').filter({ hasText: 'move to sidebar' }).first()
        this.mainMenuOnSideBar = page.locator('.vector-column-start')
        this.mainMenuOnSideBarLI = this.mainMenuOnSideBar.locator('li')
        this.HideButtonOnMainMenuOnSideBar = this.page.locator('button').filter({ hasText: 'hide' }).first()

        this.recentChanges = this.page.locator('li').filter({ hasText: 'Recent changes' }).first()
        this.filterButton = this.page.locator('.oo-ui-tagMultiselectWidget-input oo-ui-widget oo-ui-widget-enabled oo-ui-inputWidget oo-ui-iconElement oo-ui-textInputWidget oo-ui-textInputWidget-type-text span')
        this.filterDropdown = this.page.locator('.mw-rcfilters-ui-menuSelectWidget-group')
        this.filterOptCheckbox = this.filterDropdown.locator('.mw-rcfilters-ui-menuSelectWidget-group .oo-ui-fieldLayout-body').nth(4)
        this.panelWithBubbles = this.page.locator('.mw-rcfilters-ui-filterTagMultiselectWidget-wrapper-content-title oo-ui-widget oo-ui-widget-enabled oo-ui-labelElement oo-ui-labelElement-label oo-ui-labelWidget')

        this.specialPages = this.page.locator('li').filter({ hasText: 'Special pages' }).first()
        this.languageSettingButton = this.page.locator('.uls-settings-trigger')
        this.languageSettingDialog = this.page.locator('#language-settings-dialog')
        this.fontsButton = this.languageSettingDialog.locator('#uls-display-settings-fonts-tab')
        this.cancelButton = this.languageSettingDialog.locator('button').filter({ hasText: 'Cancel' })

         this.fontsButton = this.languageSettingDialog.locator('#uls-display-settings-fonts-tab')
        this.fontsButton = this.languageSettingDialog.locator('#uls-display-settings-fonts-tab')
        this.fontsButton = this.languageSettingDialog.locator('#uls-display-settings-fonts-tab')


    }


    async verifyAllMenuOptionsArePresent() {
        let arrayw = ['Main page', 'Contents', 'Current events', 'Random article', 'About Wikipedia', 'Contact us', 'Help', 'Learn to edit', 'Community portal', 'Recent changes', 'Upload file', 'Special pages']
        let numberOfMenuOptions = await this.mainMenuOnSideBarLI.count()
        console.log(numberOfMenuOptions)
        for (let el = 0; el < numberOfMenuOptions; el++) {
            await expect(await this.mainMenuOnSideBarLI.nth(el)).toContainText(arrayw[el])
        }
    }
}











       
