// highest order functions 
let numarr = [1,2,3,4,5,6]
// write a function that will take this num arr as an arg and will return square of each element

// function square(array){
//     for(let i=0 ; i< array.length ; i++){
//         console.log(array[i]*array[i])
//     }
// }
// square(numarr)

// you dont need to write this func yourself
// high order func are the func that operates on another function 

// forEach

// higher order func only work with array

// numarr.forEach(function(num){
//     console.log(num*num)
// })

// map, filter, reduce , some every , find, find index of 

// Map will loop through every element of your arr and will perform specific operation that you have provided
// let square = numarr.map(function(num){
//                             return num*num
//                         })
// console.log(square)
// map method will always return you a new arr with your results 

//  .toFixed(0) -- will not give decimal values 

// filter method below 
// works on conditions 
// filter returns a new array and basically it will return all those elements that matches the specific conditon 
// if the condn stands true, it will return the element for that condition , 
// if it is false it will discard the element 

// let evenarr = numarr.filter(function(num){
//                     return num%2 == 0 
//                 })

// console.log(evenarr)

// chaining  method below 

// let arr = [
//     {name: 'A', age : 12 , gender: 'M'},
//     {name: 'B', age : 14, gender: 'F'},
//     {name: 'C', age : 23 , gender: 'M'},
//     {name: 'D', age : 24 , gender: 'M'},
//     {name: 'E', age : 26 , gender: 'F'},
//     {name: 'F', age : 12 , gender: 'F'},
//     {name: 'G', age : 33 , gender: 'M'},
//     {name: 'H', age : 13 , gender: 'F'},
//     {name: 'I', age : 32 , gender: 'F'},
//     {name: 'J', age : 34 , gender: 'M'},
//     {name: 'K', age : 44 , gender: 'F'},
//     {name: 'L', age : 50 , gender: 'M'}
// ]

// let males = arr.filter(function(obj){
//     return (obj.gender) == 'M'
// }).map(function(obj){
//     return obj.age
// })
// console.log(males)

// find method ----- 
// find will return the first element statisfying that condition 
// let first = numarr.find(function(amt){
//     return amt < 0
// })
// console.log(first)

// some method --- it will return true if one or more element statify the condition
// let ans = numarr.some(function(amt){
//     return amt >0
// })
// console.log(ans)

// every method --- if all elements goes condn then true
// let and = numarr.every(function(amt){
//     return amt > 0
// })
// console.log(and)

// IMP  --- reduce method 
// it will help us to sum all likewise
// // reduce all the element in an arr into a single value acc to operation
// let mulitiplication = numarr.reduce(function(acc, value){
//     let updatedprd= acc * value
//     return updatedprd
// },1)
// console.log(mulitiplication)