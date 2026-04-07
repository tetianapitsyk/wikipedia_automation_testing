import { BasicPage } from "../compositeObject/BasicPage"

export class ContactUsPage {
    constructor(page) {
        this.page = page
        this.contactUsHeader = page.locator('.mw-content-container header h1')
        this.basicPage = new BasicPage(page)
    }
}