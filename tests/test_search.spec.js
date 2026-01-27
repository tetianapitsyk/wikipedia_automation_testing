import { test, expect } from '@playwright/test'
import SearchObject from '../pageObgect/SearchObject'

const searchTerms = ['italian language', 'stepan bandera', 'vitruvian man', 'java script']
for (const term of searchTerms) {
  test(`@smoke wiki searching for ${term}`, async ({ page }) => {
    await page.goto('/wiki/Main_Page')
    const searchBlock = new SearchObject(page)
    await searchBlock.searchAndOpenLvivPageFromDropdown()
    await searchBlock.testShowAllBtnForImages()
    await searchBlock.searchInput.fill(term)
    await expect(searchBlock.searchReccomendation).toContainText('Search for pages containing ' + term)
    await searchBlock.searchReccomendation.filter({ hasText: term }).click()

  })
}