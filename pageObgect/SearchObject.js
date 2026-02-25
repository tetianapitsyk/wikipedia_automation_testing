export default class SearchObject {
    constructor(page) {
        this.page = page

        this.images = this.page.locator('tbody tr td div div.center')
        this.possibleSearchTerms = ['italian language', 'stepan bandera', 'vitruvian man']
    }

    enterSearchTermNumberFromArray(number) {
        return this.possibleSearchTerms[number]
    }
}

//comm