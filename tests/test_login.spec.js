import { test, expect } from "../testData/fixtures";
const userTestData = require('../testData/userTestData')

test('@regression test LogIn page by getBy... locators', async ({ page, wikiHeader, login }) => {
    await page.goto('wiki/Main_Page')
    await wikiHeader.logInButton.click()
    await login.userLoginBox.waitFor()
    await login.enterUsernameAndPassword(userTestData.invalidCredsWithNumbers.username, userTestData.invalidCredsWithNumbers.password)
    await login.loginBtn.click()
    await expect (login.errorMsg).toContainText("Incorrect username or password entered. Please try again.")
    await login.enterUsernameAndPassword(userTestData.invalidCredsWithSymbols.username, userTestData.invalidCredsWithSymbols.password)
    await login.keepMeCHkBox.check()
    await login.loginBtn.click()
})

