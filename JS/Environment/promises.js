// promises  -- pending state, fulfileed, rejected, settled -- when fulfilled or rejected 

// how to produce a promise 

// let mypromise = new Promise(function(resolve, reject){
//     const a = 4 ; 
//     const b = 4

//     setTimeout(()=>{
//         if (a==b){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     }, 2000)
// })

// this was for pending stage
// console.log(mypromise)

let mypromise = new Promise(function(resolve, reject){
    const a = 4 ; 
    const b = 89

    setTimeout(()=>{
        if (a==b){
            resolve("the values are equal")
        }
        else{
            reject('values are not equal')
        }
    }, 2000)
})

mypromise
    .then(function(result) {
        console.log(result);
        // fulfilled state
    })
    .catch(function(error) {
        console.log(error);
        // rejected state
    });

// this is working with this syntax only 

