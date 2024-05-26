// // JS is a single threaded synchronous lang by default
// // lets understand callback 
// // function are kinda objects 
// // callback is a function that can be passed to another func as a argument 
// // function printName(name, cb, cb2){
// //     console.log(name)
// //     cb2()
// //     cb('create Impact')
// //     cb2()

// // }

// // printName('Scaler', printTagline, printnum)

// // function printTagline(tagline){
// //     console.log(tagline)
// // }
// // function printnum(num){
// //     console.log(Math.random())
// // }

// // if i needed to print one function only and print both the 

// // calculator 

// function calculator(add, sub, div, mul){
//     add(2,3)
//     sub(2,3)
//     div(2,3)
//     mul(2,3)

// }
// function addition(a,b){
//     console.log(a+b)
// }
// function subtraction(a,b){
//     console.log(a-b)
// }
// function divison(a,b){
//     console.log(a/b)
// }
// function multiplication(a,b){
//     console.log(a*b)
// }

// calculator(addition,subtraction,divison,multiplication)



// synchronous nature -- JS doubt wla clss me eg
// JS will do linewise task -- synchronously 

//Asynchoronously -- let the doubt one wait and solve their at the end 

console.log("hello")

console.log('scaler')

function test(){
    console.log(Math.random())

}
test()

console.log('after')

// everything above is in order, synchoronously



