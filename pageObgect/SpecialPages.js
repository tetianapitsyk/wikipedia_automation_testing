export class SpecialPages {
    constructor(page) {
        this.page = page
        this.specialPagesMainMenu = this.page.locator('.vector-main-menu-dropdown input')
        this.languageSettingButton = this.page.locator('.uls-settings-trigger')
        this.languageSettingDialog = this.page.locator('#language-settings-dialog')
        this.fontsButton = this.languageSettingDialog.locator('#uls-display-settings-fonts-tab')
        this.cancelButton = this.languageSettingDialog.locator('button').filter({ hasText: 'Cancel' })
    }
}