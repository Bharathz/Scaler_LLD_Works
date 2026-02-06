var a=10;
var a= "adit";
// redeclaration is allowed with var keyword
console.log(a); // Output: adit

var b= 20;
b= "hello";
// redeclaration is not allowed with let keyword
console.log(b); // Output: hello

//ES6 - ecma 2015
let c= 30;
// let c= "world"; // This will throw an error: Identifier 'c' has already been declared
c= "world"; // Reassignment is allowed
console.log(c); // Output: world

const d= 40;
// const d= "constant"; // This will throw an error: Identifier 'd' has already been declared
// d= "constant"; // This will throw an error: Assignment to constant variable
console.log(d); // Output: 40   

