import { BasicPage } from "../compositeObject/BasicPage"


export class LogInPage extends BasicPage {
    constructor(page) {
        super(page)
        this.page = page
        this.userLoginBox = page.locator('[name="userlogin"]')
        this.username = this.page.getByPlaceholder("Enter your username")
        this.password = this.page.getByLabel("Password")
        this.keepMeCHkBox = this.page.locator('.cdx-checkbox').getByText('Keep me logged in')
        this.loginBtn = this.page.locator('button').getByText('Log in')
        this.errorMsg = this.page.locator('.cdx-message--block').first()
    }


    async enterUsernameAndPassword(username, password) {
        await this.username.fill(username)
        await this.password.fill(password)
    }
}


