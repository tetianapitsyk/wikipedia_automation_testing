import {test, expect} from "../fixture/fixtures"


test('@UI test Appearance - text radiobtns', async ({ page, basicPage }) => {
    await page.goto('/wiki/Main_Page')
    await basicPage.wikiAppearance.largeRB.click()
    await expect(basicPage.wikiAppearance.largeRB).toBeChecked()
    await basicPage.wikiAppearance.smallRB.click()
    await expect(basicPage.wikiAppearance.smallRB).toBeChecked()
    await basicPage.wikiAppearance.standartlRB.click()
    await expect(basicPage.wikiAppearance.standartlRB).toBeChecked()
})


test('@UI test Appearance - color radiobtns', async ({ page, basicPage }) => {
    await page.goto('/wiki/Main_Page')
    await basicPage.wikiAppearance.automaticColor.click()
    await expect(basicPage.wikiAppearance.automaticColor).toBeChecked()
    await basicPage.wikiAppearance.lightColor.click()
    await expect(basicPage.wikiAppearance.lightColor).toBeChecked()
    await basicPage.wikiAppearance.darkColor.click()
    await expect(basicPage.wikiAppearance.darkColor).toBeChecked()
})