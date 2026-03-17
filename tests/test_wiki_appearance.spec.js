import { test, expect } from "../testData/fixtures"


test('@UI test Appearance - text radiobtns', async ({ page, wikiAppearance }) => {
    await page.goto('/wiki/Main_Page')
    await wikiAppearance.largeRB.click()
    await expect(wikiAppearance.largeRB).toBeChecked()
    await wikiAppearance.smallRB.click()
    await expect(wikiAppearance.smallRB).toBeChecked()
    await wikiAppearance.standartlRB.click()
    await expect(wikiAppearance.standartlRB).toBeChecked()

})


test('@UI test Appearance - color radiobtns', async ({ page, wikiAppearance }) => {
    await page.goto('/wiki/Main_Page')
    await wikiAppearance.automaticColor.click()
    await expect(wikiAppearance.automaticColor).toBeChecked()
    await wikiAppearance.lightColor.click()
    await expect(wikiAppearance.lightColor).toBeChecked()
    await wikiAppearance.darkColor.click()
    await expect(wikiAppearance.darkColor).toBeChecked()
})