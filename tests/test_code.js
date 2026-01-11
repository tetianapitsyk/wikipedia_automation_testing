const jsonFile = require('./example.json')

class Girl{
    constructor(){
                this.possibleSearchTerms = ['italian language', 'stepan bandera', 'vitruvian man']

    }
enterSearchTermNumberFromArrayVerifyItDynamiclyIsFound(number){

    const selectedSearchtermFromArray = this.possibleSearchTerms[number]
    console.log(selectedSearchtermFromArray)
}
}
const tania = new Girl()
tania.enterSearchTermNumberFromArrayVerifyItDynamiclyIsFound(1)

const jsonToStr = JSON.stringify(jsonFile)
console.log(jsonToStr)
console.log(typeof(jsonToStr))

const StrToObj = JSON.parse(jsonToStr)
console.log(StrToObj)
console.log(typeof(StrToObj))