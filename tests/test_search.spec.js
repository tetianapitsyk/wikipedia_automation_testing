import { test, expect } from '../testData/fixtures'

test(' @smoke wiki search', async ({ page, searchBlock }) => {
  await page.goto('/wiki/Main_Page')
  let word = "Lviv"
  await searchBlock.enterAWordIntoSearch(word)
  await expect(searchBlock.searchFooter).toContainText('Search for pages containing ' + word)
  await searchBlock.proposedContent.filter({ hasText: word }).click()
})