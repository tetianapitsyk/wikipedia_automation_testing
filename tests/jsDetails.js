

class Parent {
    constructor(age, name) {
        this.age = age
        this.name = name
    }
    showAge() {
        return this.age + 20
    }
}


class Child extends Parent {
    constructor(age, name, games) {
        super(age, name)                  //super is used here
        this.games = games
    }
    parentTrueAge() {
        let parentAge = super.showAge()   //super is used here
        console.log(parentAge)
    }
}



let me = new Child(6, 'tania', 'tt')
me.parentTrueAge()


const users = [
  { name: 'Anna', age: 25 },
  { name: 'John', age: 30 }
];
const names = users.map(u => u.name + " lox");
console.log(names)  // [ 'Anna lox', 'John lox' ]



const users2 = [
  { name: 'Anna', active: true, age: 23 },
  { name: 'John', active: false, age:50 }
];
const activeUsers = users2.filter(u => u.active);
console.log(activeUsers) //  [ { name: 'Anna', active: true, age: 23 } ]
const activeUsers2 = users2.filter(u => u.age<40);
console.log(activeUsers2) // [ { name: 'Anna', active: true, age: 23 } ]



function Circle (radius){
this.name = radius+" name"
let bigRadius = radius * 10 //private, not avail outside this func
this.showbigRadiusOutside = function(){
    return bigRadius
}

}
const c = new Circle(5)
console.log(c.name) //5 name
console.log(c.bigRadius) //undefined
console.log(c.showbigRadiusOutside()) //50








