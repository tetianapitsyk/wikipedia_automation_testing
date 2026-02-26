export class PageWithContent {
    constructor(page) {
        this.page = page
        this.sectionWithContent = this.page.locator('div.mw-body-content div.mw-content-ltr')
        this.banner1 = this.sectionWithContent.locator('div#mp-topbanner')
        this.bannerLeft = this.sectionWithContent.locator('div#mp-upper div#mp-left')
        this.linkOnBannerLeft = this.bannerLeft.locator('a').nth(5)
        this.bannerLeftUp = this.bannerLeft.locator('div#mp-tfa')
        this.bannerLeftUpButton1 = this.bannerLeftUp.locator('ul li').nth(0)
        this.bannerLeftDown = this.bannerLeft.locator('div#mp-dyk')
        this.bannerRight = this.sectionWithContent.locator('div#mp-upper div#mp-right')
        this.bannerRightUp = this.bannerRight.locator('div#mp-itn')
        this.bannerRightDown = this.bannerRight.locator('div#mp-otd')
        this.bannerLower = this.sectionWithContent.locator('div#mp-lower')
        this.bannerBottom = this.sectionWithContent.locator('div#mp-bottom')
        this.linkPreviewFrame = this.page.locator('div.mwe-popups-container')
        this.settingsOnLinkPreviewFrame = this.linkPreviewFrame.locator('footer a')
        this.previewsDialog = this.page.locator('div section#mwe-popups-settings')
        this.enablePreviewBtn = this.previewsDialog.locator('input')
        this.savePreviewSettings = this.previewsDialog.locator('button').filter({ hasText: 'Save' })
        this.finishPreviewSettings = this.page.locator('button').getByText('Done')
        this.onThisDayTitle = this.page.locator('h2#mp-otd-h2')
    }

}


