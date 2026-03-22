// import * as fs from 'fs
const fs = require('fs');

// // Synchronous way
// console.log("Before");
// const buffer = fs.readFileSync('./f1.txt');
// console.log("buffer : ", buffer);
// console.log("data : ", buffer.toString());
// console.log("After");


// // Asynchronous way
// console.log("Before");
// const data = fs.readFile('./f1.txt', (err, data) => {
//     if(err){
//         console.log("Error : ", err);
//     }else{
//         console.log("data : ", data.toString());
//     }
// });

// console.log("After");


//Parallel execution of asynchronous code
// console.log("Before");
// const buffer1 = fs.readFileSync('./f1.txt');
// const buffer2 = fs.readFileSync('./f2.txt');
// console.log(buffer1.toString(), buffer2.toString());
// console.log("After");


//parallel and use the output and do some operation on it
console.log("Before");

const cb1=function(err, data){
    if(err){
        console.log("Error : ", err);
        return;
    }

    const content1 = data.toString();
    fs.readFile('./f2.txt', function(err, data){
        if(err){
            console.log("Error : ", err);
            return;
        }
        const content2 = data.toString();
        console.log(content1, content2);
    });
};

fs.readFile('./f1.txt', cb1);

console.log("After");
    