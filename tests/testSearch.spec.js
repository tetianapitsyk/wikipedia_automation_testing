import {test, expect} from "../fixture/fixtures"

test(' @smoke wiki search', async ({ page, searchBlock }) => {
  await page.goto('/wiki/Main_Page')
  let word = "Lviv"
  await searchBlock.enterAWordIntoSearch(word)
  await expect(searchBlock.proposedContent).toContainText('Search for pages containing ' + word)
  await searchBlock.proposedContent.filter({ hasText: word }).click()
  await expect(page).toHaveURL(/wikipedia/);
  expect(page.url()).toContain(word);
})