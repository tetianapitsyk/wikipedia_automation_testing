import { beforeEach } from "node:test"
import { test, expect } from "../testData/fixtures"


test.beforeEach(async ({page})=>{
    await page.goto('/wiki/Main_Page')


})
test('@regression test contents on page information', async ({ page, tools }) => {
    await tools.toolsButton.click()
    await tools.infoButton.waitFor()
    await tools.infoButton.click()
    await expect(await tools.infoPageTitle).toHaveText('Information for "Main Page"')
    await tools.verifyIfTableOfContentOpensNecessaryChapter()
})