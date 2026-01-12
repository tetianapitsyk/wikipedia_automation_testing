import {test, expect}  from '@playwright/test'
import {MainMenu} from'../pageObgect/MainMenu'


test('@regression test Current event from main menu', async({page})=>{
    await page.goto('https://en.wikipedia.org/wiki/Main_Page')
    const mainMenu = new MainMenu(page)
    await mainMenu.mainMenuBtn.click()
    await mainMenu.currentEvents.click()
    await mainMenu.calendarBackBtn.click()
    const day = '18'
    await mainMenu.calendarDay.filter({hasText: day}).click()
    await expect( page.locator('.current-events span.summary').filter({hasText:day})).toBeInViewport()

    

})