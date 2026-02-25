import { test, expect } from '@playwright/test'
import SearchObject from '../pageObgect/SearchObject'

test(' @smoke wiki search', async ({ page }) => {
  await page.goto('/wiki/Main_Page')
  const searchBlock = new SearchObject(page)
  await searchBlock.searchAndOpenLvivPageFromDropdown()
  await searchBlock.testShowAllBtnForImages()
  await searchBlock.enterAWordNumber(2)
  await expect(page.locator('a.cdx-menu-item__content span span').last()).toContainText('Search for pages containing ' + selectedSearchtermFromArray)
  await page.locator('a.cdx-menu-item__content span span').last().filter({ hasText: selectedSearchtermFromArray }).click()

})
