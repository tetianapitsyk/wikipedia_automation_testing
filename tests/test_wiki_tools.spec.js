import { test, expect } from "../testData/fixtures";


test('@regression test contents on page information', async ({ page, basicPage, pageInformation }) => {
    await page.goto('/wiki/Main_Page')
    await basicPage.toolsDropdown.toolsButton.click()
    await basicPage.toolsDropdown.infoButton.waitFor()
    await basicPage.toolsDropdown.infoButton.click()
    await expect(await pageInformation.infoPageTitle).toHaveText('Information for "Main Page"')
    await pageInformation.verifyIfTableOfContentOpensNecessaryChapter()
})


test('@regression test get Shortened URL by XPASS', async ({ page, basicPage, pageInformation }) => {
    await page.goto('/wiki/Main_Page');
    await basicPage.toolsDropdown.toolsButton.click()
    await basicPage.toolsDropdown.getShortenedUrl.waitFor()
    await basicPage.toolsDropdown.getShortenedUrl.click()
    await expect (pageInformation.shortenedUrlDialog).toBeVisible()
    await pageInformation.copyBtn.waitFor()
    await pageInformation.copyBtn.click()
    await expect(pageInformation.confirmationMessage).toHaveText("URL copied to clipboard.")
}
)


