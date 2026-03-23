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

//Pyramid of Done / Callback Hell

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