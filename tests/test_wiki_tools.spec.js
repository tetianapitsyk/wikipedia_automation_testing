import { test, expect } from "../testData/fixtures"


test('@UI test text radiobtns', async ({ page, tools }) => {
    await page.goto('/wiki/Main_Page')
    await tools.largeRB.click()
    await expect(tools.largeRB).toBeChecked()
    await tools.smallRB.click()
    await expect(tools.smallRB).toBeChecked()
    await tools.standartlRB.click()
    await expect(tools.standartlRB).toBeChecked()

})


test('@UI test color radiobtns', async ({ page, tools }) => {
    await page.goto('/wiki/Main_Page')
    await tools.automaticColor.click()
    await expect(tools.automaticColor).toBeChecked()
    await tools.lightColor.click()
    await expect(tools.lightColor).toBeChecked()
    await tools.darkColor.click()
    await expect(tools.darkColor).toBeChecked()

})