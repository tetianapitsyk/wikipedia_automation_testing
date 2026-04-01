import { expect } from "@playwright/test"
export class CurrentEventsPage {
    constructor(page) {
        this.page = page
        this.calendar = this.page.locator('table.current-events-calendar')
        this.calendarDay = this.calendar.locator('tbody tr td a').filter({ hasText: /\d/ }).first()
        this.article = this.page.locator('.current-events span.summary')
    }

    async checkCorrespondingChapterIsOpenedPerDay() {
        let day = await this.calendarDay.textContent()
        await expect(this.article.filter({ hasText: day })).toBeInViewport()
    }
}