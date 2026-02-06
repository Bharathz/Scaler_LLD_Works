var a = 10;

function fn(){
    console.log ("Im am fn");

    function innerfn(){
        console.log("I am inner fn");
    }
    innerfn();
}

fn(); 
// Output: 
// Im am fn
// I am inner fn

//--------------------------------------------------------------

//call Stack - LIFO (Last In First Out)
// GEC -> fn() -> innerfn() -> innerfn() is popped out -> fn() is popped out -> GEC is popped out
//GEC - global execution context
// LEC - local execution context

//memoriy creation and code execution happens in two phases
//memory creation phase - memory is allocated for all the variables and functions
//code execution phase - code is executed line by line and values are assigned to variables 
// and functions are stored in memory

//hoisting - the process of moving function and variable declarations to the top of their scope before code execution

console.log(c); // Output: undefined
var c = 50;
// During memory creation phase, var c is hoisted and initialized with undefined
// During code execution phase, c is assigned the value 50
console.log(c); // Output: 50

// Note: Hoisting only works with var keyword. let and const are not hoisted in the same way.
// console.log(d); // This will throw an error: Cannot access 'd' before initialization
console.log(d);
let d = 60;
console.log(d); // Output: 60

console.log(e); // This will throw an error: Cannot access 'e' before initialization
const e = 70;
console.log(e); // Output: 70

// var,let,const --> hoisted
// var -> hoisted normally
// let,const -> temporal deadzone -> its hoisted but not accessible until it is declared in the code

//--------------------------------------------------------------