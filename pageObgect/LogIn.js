import { BADHINTS } from "node:dns"

export class LogIn {
    constructor(page) {
        this.page = page
        this.userLoginBox = page.locator('[name="userlogin"]')
        this.username = this.page.getByPlaceholder("Enter your username")
        this.password = this.page.getByLabel("Password")
        this.keepMe = this.page.locator('.cdx-checkbox').getByText('Keep me logged in')
    }
}


