const {test} = require('@playwright/test')
const {MainMenu} = require('../pageObgect/MainMenu')


test('test Current event from main menu', async({page})=>{
    await page.goto('https://en.wikipedia.org/wiki/Main_Page')
    const mainMenu = new MainMenu(page)
    await mainMenu.mainMenuBtn.click()
    await mainMenu.currentEvents.click()
})