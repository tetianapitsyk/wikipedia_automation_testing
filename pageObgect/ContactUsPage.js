import { BasicPage } from "../compositeObject/BasicPage"

export class ContactUsPage extends BasicPage {
    constructor(page) {
        super(page)
        this.page = page
        this.contactUsHeader = page.locator('.mw-content-container header h1')
    }
}