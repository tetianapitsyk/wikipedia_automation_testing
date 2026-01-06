const {test, expect} = require("@playwright/test")

// 2 regression
// -	 Search
// -	Light/dark theme
// -	Page preview settings
// -	- tools printable version

test('observe  link preview', async({page})=>{
    await page.goto('https://en.wikipedia.org/wiki/Main_Page')
    await page.locator('h2#mp-otd-h2').waitFor()

    await page.locator('div#mp-left').filter({hasText:'s featured article'}).locator('a').nth(5).hover()
    const linkPreviewFrame = page.locator('div.mwe-popups-container')
    await expect(linkPreviewFrame).toBeVisible()
    await linkPreviewFrame.locator('footer a').click()
    await expect (page.locator('div section#mwe-popups-settings')).toContainText('Get quick previews of a topic while reading a page.')
    await linkPreviewFrame.locator('button').filter({hasText: 'Save'}).click()
    await page.pause()


  
})