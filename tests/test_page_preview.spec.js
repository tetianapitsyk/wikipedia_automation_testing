import { PageWithContent } from '../pageObgect/PageWithContent'

test('@smoke all default sections are present on main screen', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Main_Page')
    const pageWithContentt = new PageWithContent(page)
    await expect(pageWithContentt.banner1).toContainText('Welcome')
    await expect(pageWithContentt.bannerLeft).toBeVisible()
    await expect(pageWithContentt.bannerLeftUp).toBeVisible()
    await expect(pageWithContentt.bannerLeftDown).toBeVisible()
    await expect(pageWithContentt.bannerRight).toBeVisible()
    await expect(pageWithContentt.bannerRightUp).toBeVisible()
    await expect(pageWithContentt.bannerRightDown).toBeVisible()

})


test('@regression observe link preview', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Main_Page')
    const pageWithContent = new PageWithContent(page)
    await page.locator('h2#mp-otd-h2').waitFor()
    await pageWithContent.bannerLeftUp.locator('a').nth(5).hover()
    await expect(pageWithContent.linkPreviewFrame).toBeVisible()
    await pageWithContent.linkPreviewFrame.locator('footer a').click()
    await expect(pageWithContent.previewsDialog).toContainText('Get quick previews of a topic while reading a page.')
    //disable page preview
    await pageWithContent.previewsDialog.locator('input').uncheck()
    await pageWithContent.previewsDialog.locator('button').filter({ hasText: 'Save' }).click()
    await page.locator('button').getByText('Done').click()
    await pageWithContent.bannerLeftUp.locator('a').nth(5).hover()
    await expect(pageWithContent.linkPreviewFrame).toBeHidden()
    await page.pause()
})
