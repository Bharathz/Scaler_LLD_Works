const fs=require("fs");

const promise=fs.promises.readFile("./f1.txt");

// promise.then((data)=>{
//     console.log(data.toString());
// }).catch((err)=>{
//     console.log("Error: " , err);
// }).finally(()=>{
//     console.log("Promise is settled");
// });



//when we return a value from the then() method, it is wrapped in a promise.
promise.then((data)=>{
    console.log(data.toString());
    //return promise;
    return data; //promise.resolve(data);
}).then((data)=>{
    console.log(data.toString());
    throw new Error("Error from then 2");
    return data;
}).catch((err)=>{
    console.log("Error from catch 1: " , err);  
}).catch((err)=>{
    console.log("Error from catch 2: " , err); // this catch will not be executed because the error is already handled in the first catch.
}).finally(()=>{
    console.log("Promise is settled 1");
}).finally(()=>{
    console.log("Promise is settled 2"); 
    // this finally will be executed after the first finally, 
    // because the promise is already settled in the first finally.
});