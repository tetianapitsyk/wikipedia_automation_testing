export class CurrentEventsPage {
    constructor(page) {
        this.page = page
        this.calendar = this.page.locator('table.current-events-calendar')//calendar is on current events
        this.calendarBackBtn = this.calendar.locator('.noprint a').first()
        this.calendarDay = this.calendar.locator('tr td')
        this.article = this.page.locator('.current-events span.summary').filter({ hasText: '11' })




    }
}//comm