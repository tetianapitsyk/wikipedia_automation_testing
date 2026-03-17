import { test, expect } from "../testData/fixtures"


test('@regression test contents on page information', async ({ page, tools }) => {
    await tools.toolsButton.click()
    await tools.infoButton.waitFor()
    await tools.infoButton.click()
    await expect(await tools.infoPageTitle).toHaveText('Information for "Main Page"')
    await tools.verifyIfTableOfContentOpensNecessaryChapter()
})