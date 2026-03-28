const fs = require("fs");

console.log("Before");

fs.readFile("./f1.txt", function (err, data) {
    if(err) {
        console.log("Error: " , err);
    } else {
        console.log(data.toString());
    }
});
console.log("After");
fs.readFile("./f2.txt", function (err, data) {
    if(err) {
        console.log("Error: " , err);
    } else {
        console.log(data.toString());
    }
});
fs.readFile("./f3.txt", function (err, data) {
    if(err) {
        console.log("Error: " , err);
    } else {
        console.log(data.toString());
    }
});
fs.readFile("./f4.txt", function (err, data) {
    if(err) {
        console.log("Error: " , err);
    } else {
        console.log(data.toString());
    }
});

//Pyramid of Done / Callback Hell - 
// when we have to do some task after the completion of another task, 
// then we have to write the code in the callback function of the first task. 
// This leads to a pyramid of done, which is also known as callback hell. 
// It makes the code difficult to read and maintain.

console.log("--------------------------");

fs.readFile("./f1.txt", function (err, data) {
    if(err) {
        console.log("Error: " , err);
    } else {
        console.log(data.toString());
        fs.readFile("./f2.txt", function (err, data) {
    if(err) {
        console.log("Error: " , err);
    } else {
        console.log(data.toString());
        fs.readFile("./f3.txt", function (err, data) {
    if(err) {
        console.log("Error: " , err);
    } else {
        console.log(data.toString());
        fs.readFile("./f4.txt", function (err, data) {
    if(err) {
        console.log("Error: " , err);
    } else {
        console.log(data.toString());
    }
});
    }
});
    }
});
    }
});