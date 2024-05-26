// class and objects in JS


// class Test{
//     // instance properties 
//     // name, properties , brand , topSpeed


//     // instance methods 
//     // drive() , speedUp(), slowDown()
// }



class Car{
    constructor(name,color,topSpeed){
        // here we are creating a multiple objects, instance properties
        console.log('hey i am the constructor')
        this.name  = name
        this.color = color
        this.topSpeed = topSpeed
    }

    // creating instance methods 
    drive(){
        console.log(`I am driving at ${this.topSpeed}`)
        // with dollar we use tilde ``
    }
}
let car1 = new Car('bmw','black',200)
let car2 = new Car('bmw','blue',300)
// console.log(car1)
// console.log(car2)
// this keyword here creates an empty object related to obj 
car1.drive()

