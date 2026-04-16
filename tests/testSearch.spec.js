import {test, expect} from "../fixture/fixtures"
import { WORD } from "../data/searchData";

test('@smoke wiki search', async ({ page, searchBlock }) => {
  await page.goto('/wiki/Main_Page')
  //let word = "Lviv"
  await searchBlock.enterAWordIntoSearch(WORD)
  await expect(searchBlock.proposedContent).toContainText('Search for pages containing ' + WORD)
  await searchBlock.proposedContent.filter({ hasText: WORD }).click()
  await expect(page).toHaveURL(/wikipedia/);
  expect(page.url()).toContain(WORD);
})