import { test, expect } from '../testData/fixtures'

test('@smoke all default sections are present on main screen', async ({ page, pageWithContent }) => {
    await page.goto('/wiki/Main_Page')
    await expect(pageWithContent.banner1).toContainText('Welcome')
    await expect(pageWithContent.bannerLeft).toBeVisible()
    await expect(pageWithContent.bannerLeftUp).toBeVisible()
    await expect(pageWithContent.bannerLeftDown).toBeVisible()
    await expect(pageWithContent.bannerRight).toBeVisible()
    await expect(pageWithContent.bannerRightUp).toBeVisible()
    await expect(pageWithContent.bannerRightDown).toBeVisible()

})


test('@regression observe link preview', async ({ page, pageWithContent  }) => {
    await page.goto('/wiki/Main_Page')
    await pageWithContent.onThisDayTitle.waitFor()
    await pageWithContent.linkOnBannerLeft.hover()
    await expect(pageWithContent.linkPreviewFrame).toBeVisible()
    await pageWithContent.settingsOnLinkPreviewFrame.click()
    await expect(pageWithContent.previewsDialog).toContainText('Get quick previews of a topic while reading a page.')
    
})

test('@regression disable link preview', async ({ page, pageWithContent  }) => {
    await page.goto('/wiki/Main_Page')
    await pageWithContent.onThisDayTitle.waitFor()
    await pageWithContent.linkOnBannerLeft.hover()
    await expect(pageWithContent.linkPreviewFrame).toBeVisible()
    await pageWithContent.settingsOnLinkPreviewFrame.click()
    //disable page preview
    await pageWithContent.enablePreviewBtn.uncheck()
    await pageWithContent.savePreviewSettings.click()
    await pageWithContent.finishPreviewSettings.click()
    await pageWithContent.linkOnBannerLeft.hover()    
    await expect(pageWithContent.linkPreviewFrame).toBeHidden()
    await page.pause()
})