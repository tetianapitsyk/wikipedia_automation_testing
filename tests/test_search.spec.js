// 1 smoke 
const {test, expect} = require("@playwright/test")
import SearchObject from "../pageObgect/SearchObject"
// const searchDataset = JSON.parse(JSON.stringify(require("../utils/data"))) doesnt work
// console.log(searchDataset)

// 2 regression
// -	Search
// -	Light/dark theme
// -	Page preview settings
// -	tools printable version



//for (const data of searchDataset){  doesnt work
test('@smoke wiki search', async({page})=>{
  await page.goto('https://en.wikipedia.org/wiki/Main_Page')
  const searchBlock = new SearchObject(page)
  await searchBlock.searchIcon.click()
  await searchBlock.searchInput.fill('lvi')

 await page.locator('ul.cdx-menu__listbox li').filter({hasText: 'Lviv'}).first().click()
 await page.locator('ul #ca-nstab-main').waitFor()

  //verify that 3 img are shown when show all is selected
  await page.locator('div').locator('.switcher-container label').filter({hasText: 'Show all'}).click()
  let numberOfMap = await searchBlock.images.count()
  expect(numberOfMap).toBe(3)

   //verify entered word combination appear in search results, you can select the word combination from array of 3 elements which is in pageObject
    const selectedSearchtermFromArray = searchBlock.enterSearchTermNumberFromArray(2)  //data
    await searchBlock.searchInput.fill(selectedSearchtermFromArray)
    await expect(page.locator('a.cdx-menu-item__content span span').last()).toContainText('Search for pages containing '+selectedSearchtermFromArray)
    await page.locator('a.cdx-menu-item__content span span').last().filter({hasText: selectedSearchtermFromArray}).click()






  
})
//}