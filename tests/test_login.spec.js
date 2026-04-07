import {test, expect} from "../fixture/fixtures"
import { credentials } from "../data/userTestData";

test('@regression test LogIn page by getBy... locators', async ({ page, basicPage, login }) => {
    await page.goto('wiki/Main_Page')
    await basicPage.wikiHeader.logInButton.click()
    await login.userLoginBox.waitFor()
    await login.enterUsernameAndPassword(credentials.invalidCredsWithNumbers.username, credentials.invalidCredsWithNumbers.password)
    await login.loginBtn.click()
    await expect (login.errorMsg).toContainText("Incorrect username or password entered. Please try again.")
    await login.enterUsernameAndPassword(credentials.invalidCredsWithSymbols.username, credentials.invalidCredsWithSymbols.password)
    await login.keepMeCHkBox.check()
    await login.loginBtn.click()
})