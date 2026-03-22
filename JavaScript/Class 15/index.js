// Syncronous code => this code executes line by line

// console.log("before");



// function fn(){
// // for(let i=0; i<1000000000; i++){
// //     // some heavy task
// //     console.log("From Loop : ",i);
// // }
//     console.log("inside function");
// }
// fn();
// console.log("after");


// Asyncronous code => this code does not execute line by line, it executes when the event loop is empty

// console.log("before");
// function fn(){
// for(let i=0; i<100000; i++){
//     // some heavy task
//     if(i === 99999){
//         console.log("From Loop : ",i);
//     }
// }
//     console.log("inside function");
// }

// setTimeout(fn, 1000); 
// // setTimeout is an asynchronous function that executes the callback function 
// // after the specified time (in milliseconds) has elapsed.
// console.log("after");


//call back function => a function that is passed as an argument to another function and is executed after some operation is completed.

// let a=true;
// console.log("before");
// setTimeout(()=>{
//     a=false;
//     console.log("inside setTimeout I will break the while");
// },1000);
// console.log("after");

// while(a){
//     a=false;
// }


console.log("Before");
const cb2 = () => {
    console.log("set timeout 1");
    let timeInFuture = Date.now() + 5000;
    while(Date.now() < timeInFuture){
        // do nothing
    }
    // while(1){}
     console.log("set timeout 2");
};

const cb1 = () => console.log("Hello");
setTimeout(cb2, 1000);
setTimeout(cb1, 2000);
console.log("After");