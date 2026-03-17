export class WikiAppearance {
    constructor(page) {
        this.page = page
        
        this.appearanceBlock = this.page.locator('div.vector-appearance')
        this.largeRB = this.appearanceBlock.locator('input#skin-client-pref-vector-feature-custom-font-size-value-2')
        this.smallRB = this.appearanceBlock.locator('input#skin-client-pref-vector-feature-custom-font-size-value-0')
        this.standartlRB = this.appearanceBlock.locator('input#skin-client-pref-vector-feature-custom-font-size-value-1')

        this.automaticColor = this.appearanceBlock.locator('input#skin-client-pref-skin-theme-value-os')
        this.lightColor = this.appearanceBlock.locator('input#skin-client-pref-skin-theme-value-day')
        this.darkColor = this.appearanceBlock.locator('input#skin-client-pref-skin-theme-value-night')
    }
}