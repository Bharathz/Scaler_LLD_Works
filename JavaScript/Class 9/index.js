console.log("Hello World",this); // this will refer to the global object (window in browser, global in node.js)

//this -> it is a keyword that refers to the current execution context. 
// It can refer to different objects depending on how a function is called. 
// In the global context, it refers to the global object (window in browser, global in node.js). 
// In a function context, it refers to the object that is calling the function. 
// In an arrow function, it refers to the enclosing lexical context.

this.console.log("Hello World", this); // Output: Hello World [object Window]
window.console.log("Hello World", this); // Output: Hello World [object Window]

//--------------------------------------------------------------

function fn(){
    console.log("I am fn", this); // this will refer to the global object (window in browser, global in node.js)
}

fn(); // Output: I am fn [object Window]

//--------------------------------------------------------------



//                   non-strict	            strict
// GEC	              Window Object	          window
// Function call	    Window Object	          undefined
// Method call	      Current object	        current object
// Arrow function	  this from outer scope	  this from outer scope

// this -> window object when called from root file
// In Global Execution context this refers to window object
"use strict";

console.log("hello from ", this);

// . || []

// 2. for execution context created with method call
// (calling with object), then this will point to object itself
const captainAmerica = {
  name: "Steve Rogers",
  isAvenger: true,
  address: {
    city: "brooklyn",
    state: "new york",
  },
  movies: ["first avenger", "civil war", "infinity war"],
  saveTheWorld: function () {
    console.log("On the way ! consider it done", this);
  },
};

captainAmerica.saveTheWorld();

// 3. For execution context created with function call(calling without object),
// this will point to window
// in strict mode this point to undefined
function abc() {
  console.log("Inside abc", this);
}

abc();

const saveTheWorld1 = function () {
  console.log("On the way ! consider it done", this);
};

saveTheWorld1();

const captainAmerica1 = {
  name: "Steve Rogers",
  isAvenger: true,
  address: {
    city: "brooklyn",
    state: "new york",
  },
  movies: ["first avenger", "civil war", "infinity war"],
  saveTheWorld: function () {
    console.log("On the way ! consider it done", this); // 1 - captainAmerica1
    function abc() {
      console.log("Inside abc captain america object", this); // 2 - window
    }
    // const abc = () => {
    //   console.log("Inside abc arrow func", this); // 2 - captainAmerica1
    // };
    abc();
  },
};

captainAmerica1.saveTheWorld();

// arrow function

//4. arrow function doesnt have this, how does this in this context
// it refers to parent context this
const cde = () => {
  console.log("arrow function", this);  // output: arrow function [object Window]
  //this will refer to the global object (window in browser, global in node.js) 
  // because arrow function does not have its own this, 
  // it takes this from the parent context which is the global context in this case
};

cde();