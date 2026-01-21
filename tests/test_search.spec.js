//const {test, expect} = require("@playwright/test")
import { test, expect } from '@playwright/test'
import SearchObject from '../pageObgect/SearchObject'
//const SearchObject = require("../pageObgect/SearchObject")


test(' @smoke wiki search', async ({ page }) => {
  await page.goto('/wiki/Main_Page')
  const searchBlock = new SearchObject(page)
  await searchBlock.searchAndOpenLvivPageFromDropdown()
  await searchBlock.testShowAllBtnForImages()
  await searchBlock.enterAWordNumber(2)
  
  

  //verify entered word combination appear in search results, you can select the word combination from array of 3 elements which is in pageObject
 
  await expect(page.locator('a.cdx-menu-item__content span span').last()).toContainText('Search for pages containing ' + selectedSearchtermFromArray)
  await page.locator('a.cdx-menu-item__content span span').last().filter({ hasText: selectedSearchtermFromArray }).click()

})


test('debug baseURL', async ({ page, baseURL }) => {
  console.log(baseURL);
  await page.goto('/wiki/Main_Page');
});
