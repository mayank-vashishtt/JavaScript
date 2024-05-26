// four pillars 
// abstraction , encapsulation , inheritance, polymorphism 
// JS is a prototype based lang , not object oriented
// classes and constructors 
// prototype and prototypal inheritance 
// call apply bind
// this keyword 

// this keyword

// in node non strict 

// console.log(this)
// you got empty object 


// function showvalue(){
//     console.log(this) --  global obect 
// }
// showvalue()
// you got global object

// let myobj = {
//     name : 'adam',
//     fn : function(){
//         console.log(this) -- returning the obj in which it is
//     }
// }
// myobj.fn()
// if this.name -- will give you name values i.e. adam

// function inside a function 
// let myobj = {
//     name : 'steve',
//     fn1 : function(){
//         function fn2(){
//             console.log(this) -- you will get global object
//         }
//         fn2()
//     }
// }
// myobj.fn1()

// in browser non strict mode
// when console log this  --- window object 
// inside  a function -- window object 
// when function in object -- refer to that object itself
// objct  -> function inside a function -- window object


// what is a strict mode 
// you have to write 'use strict' at the top 
// everything is strict -- like a = 10 give an err


// node strict mode 
// console log this -- gives empty object 
// inside a fxn --- undefined 
// inside a obj -- object itself 
//  objct  -> function inside a function -- undefined


// browser strict mode 
// console log this -- window object 
// inside a fxn ---  undefined 
// inside a obj -- object itself
//  objct  -> function inside a function -- undefined 

// thats how this keyword work in every mode above