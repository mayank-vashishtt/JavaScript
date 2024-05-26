function person(name,age){
    this.name = name
    this.age = age


   
}


person.prototype.getmyage = function(){
    console.log(` and my age is ${age}`)
}

let person1 = new person('Adam',32)
let person2 = new person('anur',23)
// console.log(person1)


console.log(person1.getmyage())


// ERROR

