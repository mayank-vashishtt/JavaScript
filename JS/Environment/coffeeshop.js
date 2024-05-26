function placeorder(drink){
    return new Promise(function(resolve,reject){
        if(drink === 'coffee'){
            resolve('order for coffee recieved')
        }
        else{
            reject('order rejected')
        }
    })
}

function processorder(order){
    return new Promise(function(resolve){
        console.log('order is being processed')
        resolve(`${order} and is served`)
    })
}

// placeorder('coffee')
//     .then(function(orderplaced){
//         console.log(orderplaced)
//         let orderIsprocessed = processorder(orderplaced)
//         return orderIsprocessed

// }).then(function(processorder){
//     console.log(processorder)
// }).catch(function(err){
//     console.log(err)
// })

// this is called chaining of promise ; above


// Async await comes in a picture noww, to avoid this

// these both are keywords
// try and catch ones

async function serveorder(){
    try{
        let orderplaced = await placeorder('coffee')
        console.log(orderplaced)
        let processedorder = await processorder(orderplaced)
        console.log(processedorder)

    }catch(err){
        console.log(err)
    }
   
}
serveorder()



