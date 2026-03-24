const fs = require("fs");

//Promise -// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise is in one of three states:
// 1. Pending: The initial state of a promise. It is neither fulfilled nor rejected.
// 2. Fulfilled: The state of a promise representing a successful operation. The promise has a value.
// 3. Rejected: The state of a promise representing a failed operation. The promise has a reason for the failure.

console.log("Before");

const promise = fs.promises.readFile("./f1.txt");
console.log(promise);
console.log("After");

setTimeout(()=>{
    console.log(promise);
},2000);

// A promise is a proxy for a value not necessarily known when the promise is created. 
// It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 
// This lets asynchronous methods return values like synchronous methods: 
// instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

//to consume a promise, we can use the then() method. The then() method takes two arguments:
// 1. onFulfilled: A function that is called when the promise is fulfilled. It takes the value of the promise as an argument.
// 2. onRejected: A function that is called when the promise is rejected. It takes the reason for the rejection as an argument.

//then / catch / finally -
// The then() method returns a new promise, which is resolved with the return value of the onFulfilled or onRejected handler, 
// or rejected with any error thrown in the handler. This allows for chaining of promises.
// The catch() method is a shorthand for then(null, onRejected). It is used to handle errors in the promise chain.
// The finally() method is used to specify a callback function that will be executed regardless of the promise's outcome (fulfilled or rejected). 
// It is often used for cleanup actions that need to be performed after the promise has settled.

// promise.then(function(data){
//     console.log(data.toString());
// });
// promise.catch(function(err){
//     console.log("Error: " , err);
// });
// promise.finally(function(){
//     console.log("Promise is settled");
// });

//chaining of promises -
// The then() method returns a new promise, which is resolved with the return value of the onFulfilled or onRejected handler, 
// or rejected with any error thrown in the handler. This allows for chaining of promises.

promise.then(function(data){
    console.log(data.toString());
}).catch(function(err){
    console.log("Error: " , err);
}).finally(function(){
    console.log("Promise is settled");
});



function promiseReadFile(filePath){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,function(err,data){
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

promiseReadFile("./f1.txt").then((future)=>{
    console.log(future.toString());
    return promiseReadFile("./f2.txt")
})
.then(future=>{
    console.log(future.toString());
    return promiseReadFile("./f3.txt")
})
.then(future=>{
    console.log(future.toString());
    return promiseReadFile("./f4.txt")
})
.then(future=>{
    console.log(future.toString());
})
.catch(err=>{
    console.log("Error: " , err);
})