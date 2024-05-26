// contructor function in java

function Car(name, color, topSpeed){
    this.name = name
    this.color=  color
    this.topSpeed= topSpeed

    // method created like this
    this.drive = function(){
        console.log(`I am driving a ${this.name}`)
    }
}

let car1 = new Car('ferrari', 'red',212)
console.log(car1)
car1.drive()