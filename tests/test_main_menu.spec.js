import { test, expect } from '../testData/fixtures'
import { MainMenuWP } from '../pageObgect/MainMenuWP'
import { WikiHeader } from '../componentObject/WikiHeader'


test('@regression test Move main menu before refactoring', async ({ page }) => {
    await page.goto('/wiki/Main_Page')
    let mainMenu = new MainMenuWP(page)
    let header = new WikiHeader(page)
    await header.mainMenuBtn.click()
    await mainMenu.moveToSideBarButton.click()
    await expect(mainMenu.mainMenuOnSideBar).toBeVisible()
    await mainMenu.verifyAllMenuOptionsArePresent()
})



test('@regression test Move main menu after refactoring', async ({ page, wikiHeader, mainMenuWP }) => {
    await page.goto('/wiki/Main_Page')
    await wikiHeader.mainMenuBtn.click()
    await mainMenuWP.moveToSideBarButton.click()
    await expect(mainMenuWP.mainMenuOnSideBar).toBeVisible()
    await mainMenuWP.verifyAllMenuOptionsArePresent()

})


test('@regression test Hide main menu', async ({ page, wikiHeader, mainMenuWP }) => {
    await page.goto('/wiki/Main_Page')
    await wikiHeader.mainMenuBtn.click()
    await mainMenuWP.moveToSideBarButton.click()
    await mainMenuWP.HideButtonOnMainMenuOnSideBar.click()
    await expect(mainMenuWP.mainMenuOnSideBarLI).toBeHidden()

})


test('@regression test Current event from main menu', async ({ page, wikiHeader, mainMenuWP, currentEventsPage }) => {
    await page.goto('/wiki/Main_Page')
    await wikiHeader.mainMenuBtn.click()
    await mainMenuWP.currentEvents.click()
    await currentEventsPage.calendarDay.waitFor()
    await currentEventsPage.calendarDay.click()
    await currentEventsPage.checkCorrespondingChapterIsOpenedPerDay()
})


test('@regression test contactUs from main menu', async ({ page, wikiHeader, mainMenuWP, contactUsPage }) => {

    await page.goto('/wiki/Main_Page')
    await wikiHeader.mainMenuBtn.click()
    await mainMenuWP.contactUs.click()
    await contactUsPage.contactUsHeader.waitFor()
    await expect(contactUsPage.contactUsHeader).toHaveText('Wikipedia:Contact us')
})


test('@regression test Language Settings from special pages', async ({ page, wikiHeader, mainMenuWP, specialPages }) => {
    await page.goto('/wiki/Main_Page')
    await wikiHeader.mainMenuBtn.click()
    await mainMenuWP.specialPages.click()
    await page.locator('h1.firstHeading').waitFor()
    await expect(page.locator('h1.firstHeading')).toContainText('pecial page')
    await specialPages.specialPagesMainMenu.waitFor()
    await specialPages.specialPagesMainMenu.click()
    await specialPages.languageSettingButton.click()
    await specialPages.languageSettingDialog.waitFor()
    await specialPages.fontsButton.click()
    await expect(specialPages.languageSettingDialog).toContainText('Download fonts when needed')
    await specialPages.cancelButton.click()
    await expect(specialPages.languageSettingDialog).toBeHidden()
})