import { test, expect } from "../fixture/fixtures"
import { BasicPage } from "../compositeObject/BasicPage"
import { wikiUrl } from "../data/wikiUrl"



test('@regression test contents on page information', async ({ page, pageInformation }) => {
    let basicPage = new BasicPage(page)
    await page.goto(wikiUrl.wikipediaUrl)
    await basicPage.toolsDropdown.toolsButton.click()
    await basicPage.toolsDropdown.infoButton.click()
    await expect(await pageInformation.infoPageTitle).toHaveText('Information for "Main Page"')
    await pageInformation.verifyIfTableOfContentOpensNecessaryChapter()
})


test('@regression test get Shortened URL by XPASS', async ({ page, pageInformation }) => {
    let basicPage = new BasicPage(page)
    await page.goto(wikiUrl.wikipediaUrl)
    await basicPage.toolsDropdown.toolsButton.click()
    await basicPage.toolsDropdown.getShortenedUrl.click(({ force: true }))
    await expect(pageInformation.shortenedUrlDialog).toBeVisible({ timeout: 15000 })
    await pageInformation.copyBtn.click()
    await expect(pageInformation.confirmationMessage).toHaveText("URL copied to clipboard.")
})

test('@regression test short tools list on Special pages', async ({ page, mainMenu }) => {
    let basicPage = new BasicPage(page)
    await page.goto(wikiUrl.wikipediaUrl)
    await basicPage.wikiHeader.mainMenuBtn.click()
    await mainMenu.specialPages.click()
    await basicPage.toolsDropdown.toolsButton.click()
    await basicPage.toolsDropdown.checkIfOptionIsPresentInContainer('Printable version')
    await basicPage.toolsDropdown.checkIfOptionIsPresentInContainer('Get shortened URL')
})