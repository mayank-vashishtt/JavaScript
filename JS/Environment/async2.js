// const fs = require('fs')
// // inside fs module there is a read file sync method, we can read a file
// console.log("before")

// let data = fs.readFileSync('objects.js')

// console.log("the data is" + data)
// console.log('after')

// // imagine a file having a huge amt of data
// // then the ahead operation will be not done untill the data is not read
// // so wht to do 

// this is how read file async
// this is read file in parallel order 

// console.log('before')

// fs.readFile('objects.js', cb)

// function cb(error, data){
//     if(error){
//         console.log(error)
//     }
//     console.log(data)
// }

// fs.readFile('functions.js', cb)

// function cb2(error, data2){
//     if(error){
//         console.log(error)
//     }
//     console.log(data2)
// } 

// console.log('after')


// Call stack -- every code line by line go here 
// Node APIs -- async method things , will push it into this with cb
// Callback queue -- from Node APIs, things will come here in any order
// Event loop -- if call stack is empty, will pick one cb from cbq and put it there
// between call stack and callback queue, there is an event loop 


// if we wanna have a order in sync order , see down
//making them in a serial order
// console.log('before')
// fs.readFile('objects.js', cb)
// function cb(error, data){
//     if(error){
//         console.log(error)
//     }
//     console.log(data)
//     fs.readFile('functions.js', cb)
// }
// function cb2(error, data2){
//     if(error){
//         console.log(error)
//     }
//     console.log(data2)
// } 
// console.log('after')


