import { test, expect } from "../fixture/fixtures"
import { MainMenu } from '../pageObgect/MainMenu'
import { WikiHeader } from '../componentObject/WikiHeader'
import { BasicPage } from "../compositeObject/BasicPage"
import { wikiUrl } from "../data/wikiUrl"



test('@regression test Move main menu before refactoring', async ({ page }) => {
    await page.goto(wikiUrl.wikipediaUrl)
    let mainMenu = new MainMenu(page)
    let header = new WikiHeader(page)
    await header.mainMenuBtn.click()
    await mainMenu.moveToSideBarButton.click()
    await expect(mainMenu.mainMenuOnSideBar).toBeVisible()
    await mainMenu.verifyAllMenuOptionsArePresent()
})



test('@regression test Move main menu after refactoring', async ({ page, mainMenu }) => {
    let basicPage = new BasicPage(page)
    await page.goto(wikiUrl.wikipediaUrl)
    await basicPage.wikiHeader.mainMenuBtn.click()
    await mainMenu.moveToSideBarButton.click()
    await expect(mainMenu.mainMenuOnSideBar).toBeVisible()
    await mainMenu.verifyAllMenuOptionsArePresent()

})


test('@regression test Hide main menu', async ({ page, mainMenu }) => {
    let basicPage = new BasicPage(page)
    await page.goto(wikiUrl.wikipediaUrl)
    await basicPage.wikiHeader.mainMenuBtn.click()
    await mainMenu.moveToSideBarButton.click()
    await mainMenu.HideButtonOnMainMenuOnSideBar.click()
    await expect(mainMenu.mainMenuOnSideBarLI).toBeHidden()

})


test('@regression test Current event from main menu', async ({ page, mainMenu, currentEventsPage }) => {
    let basicPage = new BasicPage(page)
    await page.goto(wikiUrl.wikipediaUrl)
    await basicPage.wikiHeader.mainMenuBtn.click()
    await mainMenu.currentEvents.click()
    await currentEventsPage.calendarDay.waitFor()
    await currentEventsPage.calendarDay.click()
    await currentEventsPage.checkCorrespondingChapterIsOpenedPerDay()
})


test('@regression test contactUs from main menu', async ({ page, mainMenu, contactUsPage }) => {
    let basicPage = new BasicPage(page)
    await page.goto(wikiUrl.wikipediaUrl)
    await basicPage.wikiHeader.mainMenuBtn.click()
    await mainMenu.contactUs.click()
    await contactUsPage.contactUsHeader.waitFor()
    await expect(contactUsPage.contactUsHeader).toHaveText('Wikipedia:Contact us')
})


test.skip('@regression test Language Settings from special pages', async ({ page, mainMenu, specialPages }) => {
    let basicPage = new BasicPage(page)
    await page.goto(wikiUrl.wikipediaUrl)
    await basicPage.wikiHeader.mainMenuBtn.click()
    await mainMenu.specialPages.click()
    await page.locator('h1.firstHeading').waitFor()
    await expect(page.locator('h1.firstHeading')).toContainText('pecial page')
    await specialPages.specialPagesMainMenu.waitFor()
    await specialPages.specialPagesMainMenu.click()
    try {
        await specialPages.languageSettingButton.click()
        await specialPages.languageSettingDialog.waitFor()
        await specialPages.fontsButton.click()
        await expect(specialPages.languageSettingDialog).toContainText('Download fonts when needed')
        await specialPages.cancelButton.click()
        await expect(specialPages.languageSettingDialog).toBeHidden()
    }
    catch (e) {
        console.log(e.message)
    }

})