export class LogInPage {
    constructor(page) {
        this.page = page
        this.userLoginBox = page.locator('[name="userlogin"]')
        this.username = this.page.getByPlaceholder("Enter your username")
        this.password = this.page.getByLabel("Password")
        this.keepMeCHkBox = this.page.locator('.cdx-checkbox').getByText('Keep me logged in')
    }


    async enterUsernameAndPassword(username, password){
        await this.username.fill(username)
    await this.password.fill(password)
    }
}


