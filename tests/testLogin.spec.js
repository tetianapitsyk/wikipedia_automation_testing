import {test, expect} from "../fixture/fixtures"
import { credentials } from "../data/userTestData";
import { BasicPage} from "../compositeObject/BasicPage";
import { errorMsg } from "../data/errorMessages";
import { wikiUrl } from "../data/wikiUrl"

test('@regression test LogIn page by getBy... locators', async ({ page, login }) => {
    let basicPage = new BasicPage(page)
    await page.goto(wikiUrl.wikipediaUrl)
    await basicPage.wikiHeader.logInButton.click()
    await login.userLoginBox.waitFor()
    await login.enterUsernameAndPassword(credentials.invalidCredsWithNumbers.username, credentials.invalidCredsWithNumbers.password)
    await login.loginBtn.click()
    await expect (login.errorMsg).toContainText(errorMsg)
    await login.enterUsernameAndPassword(credentials.invalidCredsWithSymbols.username, credentials.invalidCredsWithSymbols.password)
    await login.keepMeCHkBox.check()
    await login.loginBtn.click()
})