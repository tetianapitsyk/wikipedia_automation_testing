// 1 smoke 
const {test, expect} = require("@playwright/test")
const {Tabs} = require('../pageObgect/Tabs')

// 2 regression
// -	 Search
// -	Light/dark theme
// -	Page preview settings
// -	- tools printable version

test('wiki search', async({page})=>{
  await page.goto('https://en.wikipedia.org/wiki/Main_Page')
  await page.locator('button.cdx-search-input__end-button').first().click()

const searchInput =  page.locator('div.cdx-text-input input.cdx-text-input__input').first()
await searchInput.fill('lvi')

 await page.locator('ul.cdx-menu__listbox li').filter({hasText: 'Lviv'}).first().click()
 await page.locator('ul #ca-nstab-main').waitFor()
 await page.locator('div').locator('.switcher-container label').filter({hasText: 'Show all'}).click()
 let numberOfMap = await page.locator('tbody tr td div div.center').count()
expect(numberOfMap).toBe(3) 



await page.locator('button.cdx-search-input__end-button').first().click()
const possibleSearchTerms = ['italian language', 'stepan bandera', 'vitruvian man']

const selectedSearchtermFromArray = possibleSearchTerms[2]
await searchInput.fill(selectedSearchtermFromArray)
await expect(page.locator('a.cdx-menu-item__content span span').last()).toContainText('Search for pages containing '+selectedSearchtermFromArray)
await page.locator('a.cdx-menu-item__content span span').last().filter({hasText: selectedSearchtermFromArray}).click()





  
})