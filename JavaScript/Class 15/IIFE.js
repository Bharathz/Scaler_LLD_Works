// IIFE - Immediately Invoked Function Expression
// A function that is defined and immediately executed
(function abc(){
    var x=10;
    console.log("Inside IIFE : ",x);

})();
console.log("Outside IIFE : ",x); // ReferenceError: x is not defined
// console.log(x); // ReferenceError: x is not defined

// IIFE is used to create a new scope and avoid polluting the global scope. 
// It is also used to create a private scope for variables and functions. 
// It is also used to create a closure. 
// It is also used to create a module pattern. 
// It is also used to create a singleton pattern. 
// It is also used to create a factory pattern. 
// It is also used to create a revealing module pattern. 
// It is also used to create a namespace pattern. 
// It is also used to create a mixin pattern. 
// It is also used to create a decorator pattern. 
// It is also used to create a proxy pattern. 
// It is also used to create a flyweight pattern. 
// It is also used to create a facade pattern. 
// It is also used to create a mediator pattern. 
// It is also used to create a observer pattern. 
// It is also used to create a state pattern.
// It is also used to create a strategy pattern. 
// It is also used to create a template method pattern. 