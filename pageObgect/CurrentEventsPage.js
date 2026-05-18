import { expect } from "@playwright/test"
import { BasicPage } from "../compositeObject/BasicPage"

export class CurrentEventsPage extends BasicPage {
    constructor(page) {
        super(page)
        this.page = page
        this.calendar = this.page.locator('table.current-events-calendar')
        this.calendarDay = this.calendar.locator('tbody tr td a').filter({ hasText: /\d/ }).first()
        this.article = this.page.locator('.current-events span.summary')
        this.monthy = this.calendar.locator('a[title^="Portal:Current events"]').nth(1)
    }

    async rememberMonth() {
        let month = await this.monthy.textContent()
        return month
    }

    async checkCorrespondingChapterIsOpenedPerDay() {
        let day = await this.calendarDay.textContent()
        let monthAndYearText = await this.rememberMonth()
        let arrayOfmonthAndYearText = monthAndYearText.split(' ')
        await expect(this.article.filter({ hasText: day + ',' }).filter({ hasText: arrayOfmonthAndYearText[0] })).toBeVisible()
    }
}