
>>>>>>> 1436ed7f4ddecddd1274941c31308a608f0ce26d
export class PageWithContent {
    constructor(page) {
        this.page = page
        this.sectionWithContent = this.page.locator('div.mw-body-content div.mw-content-ltr')
        this.banner1 = this.sectionWithContent.locator('div#mp-topbanner')
        this.bannerLeft = this.sectionWithContent.locator('div#mp-upper div#mp-left')
        this.bannerLeftUp = this.bannerLeft.locator('div#mp-tfa')
        this.bannerLeftUpButton1 = this.bannerLeftUp.locator('ul li').nth(0)
        this.bannerLeftDown = this.bannerLeft.locator('div#mp-dyk')
        this.bannerRight = this.sectionWithContent.locator('div#mp-upper div#mp-right')
        this.bannerRightUp = this.bannerRight.locator('div#mp-itn')
        this.bannerRightDown = this.bannerRight.locator('div#mp-otd')
        this.bannerLower = this.sectionWithContent.locator('div#mp-lower')
        this.bannerBottom = this.sectionWithContent.locator('div#mp-bottom')
        this.linkPreviewFrame = this.page.locator('div.mwe-popups-container')
        this.previewsDialog = this.page.locator('div section#mwe-popups-settings')
    }
<<<<<<< HEAD
}
//comment
=======
}
>>>>>>> 1436ed7f4ddecddd1274941c31308a608f0ce26d
