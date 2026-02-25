import { test, expect } from '@playwright/test'
import Tools from '../pageObgect/Tools'


test('@regression test tools dropd', async ({ page }) => {
    await page.goto('/wiki/Main_Page')
    const tools = new Tools(page)
    await tools.toolsButton.click()
    await tools.infoButton.waitFor()
    await tools.infoButton.click()
    //await tools.infoTable.waitFor()
    await expect(await tools.infoPageTitle).toHaveText('Information for "Main Page"')
    await tools.verifyIfTableOfContentOpensNecessaryChapter()
})


test('@UI test text radiobtns', async ({ page }) => {
    await page.goto('/wiki/Main_Page')
    const tools = new Tools(page)
    await tools.largeRB.click()
    await expect(tools.largeRB).toBeChecked()
    await tools.smallRB.click()
    await expect(tools.smallRB).toBeChecked()
    await tools.standartlRB.click()
    await expect(tools.standartlRB).toBeChecked()

})


test('@UI test color radiobtns', async ({ page }) => {
    await page.goto('/wiki/Main_Page')
    const tools = new Tools(page)
    await tools.automaticColor.click()
    await expect(tools.automaticColor).toBeChecked()
    await tools.lightColor.click()
    await expect(tools.lightColor).toBeChecked()
    await tools.darkColor.click()
    await expect(tools.darkColor).toBeChecked()

})