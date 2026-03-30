import { test, expect } from "../testData/fixtures";

test('@regression test LogIn page by getBy... locators', async ({ page, wikiHeader, login }) => {
    await page.goto('wiki/Main_Page')
    await wikiHeader.logInButton.click()
    await login.userLoginBox.waitFor()
    await login.username.fill('taniausername')
    await login.password.fill('taniapassword')
    await login.keepMeCHkBox.check()
}
)