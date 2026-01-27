import { expect } from "@playwright/test"
export default class Tools {
    constructor(page){
        this.page=page
        this.toolsButton = this.page.locator('#vector-page-tools-dropdown-checkbox')
        this.infoButton = this.page.locator('a').filter({hasText:'Page information'})
        this.infoTable = this.page.locator('.wikitable mw-page-info')
        this.infoPageTitle = this.page.locator('h1#firstHeading')
        this.contentsLocation=this.page.locator('.hlist')
        this.basicInformation = this.contentsLocation.locator('ul a').first()
        this.pageProtection = this.contentsLocation.locator('ul a').nth(1)
        this.editHistory = this.contentsLocation.locator('ul a').nth(2)
        this.pageProperties = this.contentsLocation.locator('ul a').nth(3)
        this.lintErrors = this.contentsLocation.locator('ul a').nth(4)
        this.externalTools = this.contentsLocation.locator('ul a').nth(5)

        this.basicInformationTable = this.page.locator('table.wikitable').nth(0)
        this.pageProtectionTable = this.page.locator('table.wikitable').nth(1)
        this.editHistoryTable = this.page.locator('table.wikitable').nth(2)
        this.pagePropertiesTable = this.page.locator('table.wikitable').nth(3)
        this.lintErrorsTable = this.page.locator('table.wikitable').nth(4)
        this.externalToolsTable = this.page.locator('.mw-body-content ul').nth(6)

        this.appearanceBlock = this.page.locator('div.vector-appearance')
        this.largeRB = this.appearanceBlock.locator('input#skin-client-pref-vector-feature-custom-font-size-value-2')
        this.smallRB = this.appearanceBlock.locator('input#skin-client-pref-vector-feature-custom-font-size-value-0')
        this.standartlRB = this.appearanceBlock.locator('input#skin-client-pref-vector-feature-custom-font-size-value-1')

        this.automaticColor = this.appearanceBlock.locator('input#skin-client-pref-skin-theme-value-os')
        this.lightColor = this.appearanceBlock.locator('input#skin-client-pref-skin-theme-value-day')
        this.darkColor = this.appearanceBlock.locator('input#skin-client-pref-skin-theme-value-night')


    }

    async verifyIfTableOfContentOpensNecessaryChapter() {
        let buttons= [this.basicInformation, this.pageProtection , this.editHistory , this.pageProperties ,this.externalTools ]
        let tables = [this.basicInformationTable, this.pageProtectionTable , this.editHistoryTable , this.pagePropertiesTable ,this.externalToolsTable ]
        for(let n=0;n<buttons.length; n++){
            if(buttons[n].textContent()=='Basic information'){
            await buttons[n].click()
            await expect(tables[n]).toBeVisible()
            }
            await buttons[n].click()
            await expect(tables[n]).toBeInViewport()
        }
        
    }


}
