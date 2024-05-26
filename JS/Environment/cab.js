// call, apply and bind 
let person1 = {
    firstname : 'mayank',
    lastname : 'vashisht',
    age : 102,

    

}

let printDetails = function(city){
        console.log(`${this.firstname} and ${this.age} ans ${city}`)
    }
    // apply

let person2 = {
    firstname : 'myank',
    lastname : 'vsht',
    age : 12,

}

// person1.printDetails.call(person2)
// call method above


// printDetails.call(person2, 'New York')

printDetails.apply(person2, ['New York'])
// put inside an arr for apply mthd
// this is how apply works
// you can pass multiple arguments




// bind method 

let myfun = printDetails.bind(person2, 'New York')
console.log(myfun)
// to store a fxn
myfun()



// person1.printDetails()
// person2.printDetails()

