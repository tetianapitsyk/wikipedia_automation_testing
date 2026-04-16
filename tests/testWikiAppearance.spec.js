import { test, expect } from "../fixture/fixtures"
import { BasicPage } from "../compositeObject/BasicPage"



test('@UI test Appearance - text radiobtns', async ({ page }) => {
    let basicPage = new BasicPage(page)

    await page.goto('/wiki/Main_Page')
    await basicPage.wikiAppearance.largeRB.click()
    await expect(page.locator('html')).toHaveClass(/clientpref-2/)
    await basicPage.wikiAppearance.smallRB.click()
    await expect(page.locator('html')).toHaveClass(/clientpref-0/)
    await basicPage.wikiAppearance.standartlRB.click()
    await expect(page.locator('html')).toHaveClass(/clientpref-1/)
})


test('@UI test Appearance - color radiobtns', async ({ page }) => {
    let basicPage = new BasicPage(page)
    await page.goto('/wiki/Main_Page')
    await basicPage.wikiAppearance.automaticColor.click()
    await expect(page.locator('html')).toHaveClass(/skin-theme-clientpref-os/)
    await basicPage.wikiAppearance.lightColor.click()
    await expect(page.locator('html')).toHaveClass(/skin-theme-clientpref-day/)
    await basicPage.wikiAppearance.darkColor.click()
    await expect(page.locator('html')).toHaveClass(/skin-theme-clientpref-night/)
})