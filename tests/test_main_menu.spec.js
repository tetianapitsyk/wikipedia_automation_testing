import { test, expect } from '../testData/fixtures'

test('@regression test Move main menu', async ({ page, wikiHeader, mainMenuWP }) => {
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



test('@regression test Current event from main menu', async ({ page, wikiHeader,mainMenuWP, currentEventsPage }) => {

    await page.goto('/wiki/Main_Page')
    await wikiHeader.mainMenuBtn.click()
    await mainMenuWP.currentEvents.click()
    await currentEventsPage.calendarBackBtn.click()
    const day = '5'
    await currentEventsPage.calendarDay.filter({ hasText: '11' }).click()
    await expect(currentEventsPage.article).toBeInViewport()
})


test('@regression test contactUs from main menu', async ({ page, wikiHeader,mainMenuWP, contactUsPage }) => {
    await page.goto('/wiki/Main_Page')
    await wikiHeader.mainMenuBtn.click()
    await mainMenuWP.contactUs.click()
    await contactUsPage.contactUsHeader.waitFor()
    await expect(contactUsPage.contactUsHeader).toHaveText('Wikipedia:Contact us')
})


test('@regression test Language Settings from special pages', async ({ page, wikiHeader,mainMenuWP, specialPages }) => {
    await page.goto('/wiki/Main_Page')
    await wikiHeader.mainMenuBtn.click()
    await mainMenuWP.specialPages.click()
    await specialPages.specialPagesMainMenu.waitFor()
    await specialPages.mainMenuBtn.click()
    await specialPages.languageSettingButton.click()
    await specialPages.languageSettingDialog.waitFor()
    await specialPages.fontsButton.click()
    await expect(specialPages.languageSettingDialog).toContainText('Download fonts when needed')
    await specialPages.cancelButton.click()
    await expect(specialPages.languageSettingDialog).toBeHidden()

})


// test.skip('@regression test Recent changes page from Main Menu', async ({ page }) => {
// //wiki restrictions cant automate
//     await page.goto('/wiki/Main_Page')
//     const mainMenu = new MainMenu(page)
//     await mainMenu.mainMenuBtn.click()
//     await mainMenu.recentChanges.click()
//     await mainMenu.panelWithBubbles.waitFor({ state: 'visible' })
//     await mainMenu.filterButton.click()
//     await mainMenu.filterOptCheckbox.click()

// })