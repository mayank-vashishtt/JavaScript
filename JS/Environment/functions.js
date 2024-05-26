// functions are just peice of code that runs when we call it 
// it can also take input 
// and do the function acc to instructions and give back output
// function declaration or creation 
// function greet(){
//     console.log('hello from scaler')
// }

// // function call or function invokation
// greet()

// function add(a,b){
//     // at this time a and b are parameters of func 
//     // that is wht is it expecting from you 
//     console.log(a+b)
// }
// add(2,'ds')
// here there is arguments which we are passing 

// first class citizen concept of function 
// function can be used as variable 
// function expressions

let sub = function(c,d){
    console.log(c-d)
}
sub(3,4)

// there are another type of function that are called arrow function

// IFFE (Immediate invoked function expressions)
let multiply = (function(a,b){
    console.log(a*b)
})(2,3)
// it will print it immediately above




