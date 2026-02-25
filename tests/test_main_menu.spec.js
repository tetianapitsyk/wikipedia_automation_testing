import { test, expect } from '@playwright/test'
import { MainMenu } from '../pageObgect/MainMenu'

test('@regression test Hide\Move main menu', async ({ page }) => {
    await page.goto('/wiki/Main_Page')
    const mainMenu = new MainMenu(page)
    await mainMenu.mainMenuBtn.click()
    await mainMenu.moveToSideBarButton.click()
    await expect(mainMenu.mainMenuOnSideBar).toBeVisible()
    await mainMenu.verifyAllMenuOptionsArePresent()
    await mainMenu.HideButtonOnMainMenuOnSideBar.click()
    await expect(mainMenu.mainMenuOnSideBarLI).toBeHidden()

})


test('@regression test Current event from main menu', async ({ page }) => {

    await page.goto('/wiki/Main_Page')
    const mainMenu = new MainMenu(page)
    await mainMenu.mainMenuBtn.click()
    await mainMenu.currentEvents.click()
    await mainMenu.calendarBackBtn.click()
    const day = '18'
    await mainMenu.calendarDay.filter({ hasText: day }).click()
    await expect(page.locator('.current-events span.summary').filter({ hasText: day })).toBeInViewport()
})


test('@regression test contactUs from main menu', async ({ page }) => {
    await page.goto('/wiki/Main_Page')
    const mainMenu = new MainMenu(page)
    await mainMenu.mainMenuBtn.click()
    await mainMenu.contactUs.click()
    await mainMenu.contactUsHeader.waitFor()
    await expect(mainMenu.contactUsHeader).toHaveText('Wikipedia:Contact us')
})


test('@regression test Language Settings from main menu', async ({ page }) => {
    await page.goto('/wiki/Main_Page')
    const mainMenu = new MainMenu(page)
    await mainMenu.mainMenuBtn.click()
    await mainMenu.specialPages.click()
    await mainMenu.mainMenuBtn.click()
    await mainMenu.languageSettingButton.click()
    await mainMenu.languageSettingDialog.waitFor()
    await mainMenu.fontsButton.click()
    await expect(mainMenu.languageSettingDialog).toContainText('Download fonts when needed')
    await mainMenu.cancelButton.click()
    await expect(mainMenu.languageSettingDialog).toBeHidden()

})


test.skip('@regression test Recent changes page from Main Menu', async ({ page }) => {
//wiki restrictions cant automate
    await page.goto('/wiki/Main_Page')
    const mainMenu = new MainMenu(page)
    await mainMenu.mainMenuBtn.click()
    await mainMenu.recentChanges.click()
    await mainMenu.panelWithBubbles.waitFor({ state: 'visible' })
    await mainMenu.filterButton.click()
    await mainMenu.filterOptCheckbox.click()

})