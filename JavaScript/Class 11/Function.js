//Function Defination VS Function Expresstion


//function definition
// function abc(){
//     console.log("abc");
// }

//function expression
const abc = function(){
    console.log("abc");
}

const abc1 = function abc(){
    console.log("abc");
    console.log(this);
}

const abc2 = () =>{
    console.log("abc");
    console.log(this);
}

const obj = {
    abc1,
};

const obj1={
    abc2,
};

obj.abc1();
obj1.abc2();

//HOF : Higher order function
//Function which can either or both accept and return function

// the function which is passed as an argument is called callback function
//abc -> callback function
//HOF -> cdf 

function cdf(abc){
    abc();
}

cdf(abc1);


// Array -> map, filter , reduce , find -> HOF operations


const cap = {
  name: "steve",
  sayHi: function () {
    console.log("Hi from", this.name);
  },
};
cap.sayHi(); // steve
const sayHiAdd = cap.sayHi;
sayHiAdd();