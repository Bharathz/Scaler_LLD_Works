let iamINGEC = 200;
function getFirstName(firstName) {
  console.log("I have got your first Name");
  return function getLastName(lastName) {
    console.log("I have got Your last Name");
    return function greeter() {
      console.log(`Hi I am ${firstName} ${lastName}`);
      console.log("Hi GEC", iamINGEC);
    };
  };
}

getFirstName("Bharath")("Thangam")();

//Output
// I have got your first Name
// I have got Your last Name
// Hi I am Bharath Thangam
// Hi GEC 200



// Function Currying
// currying invloves splitting up a function that accepts multiple arguments
// into several functions that only accept one parameter each time or
// multiple arguments at multiple level


// function a(d) {
//   return function b(e) {
//     return function c(f) {
//       return d + e + f;
//     };
//   };
// }

// console.log(a(2)(3)(4)); // 9


// setTimout (HOF)
// whatever function you pass it down it executes after some delay
// setTimeout(fn, delay);

// let a = 10;
// console.log("Before");
// function cb() {
//   console.log("I will explode ", a);
// }
// setTimeout(cb, 1000);
// console.log("After");

// function outer() {
//   var arrFn = [];
//   for (let i = 0; i < 3; i++) {
//     // block level scope
//     arrFn.push(function fn() {
//       console.log(i);
//     });
//   }
//   return arrFn;
// }

// const arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

// 0,1,2 = up (if Let used :corret)
// 3,3,3 = down (if Var used :corret)
//Cause let is a block scope variable and var is a function scope variable

// infinite currying

// counter(0) // op: 1
// counter()(0) // op:2
// counter()()(0) // op:3
// counter()()()(0) // op: 4

// function counter(args) {
//   let count = 0;
//   if (args == 0) {
//     return count;
//   } else {
//     return function innerCounter(args) {
//       count++;
//       if (args == 0) {
//         return count;
//       } else {
//         return innerCounter;
//       }
//     };
//   }
// }

// console.log(counter(0));
// console.log(counter()(0));
// console.log(counter()()(0));
// console.log(counter()()()(0));

// function calc(n) {
//   console.log("n : ", n);
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calc(10));
// console.log(calc(3));

// create a memoized function
//momoization is an optimization technique used to speed up function execution by caching the results of 
// expensive function calls and returning the cached result when the same inputs occur again

// function memoize(fn) {
//   const cache = {};
//   return function (param) {
//     if (cache[param] == undefined) {
//       cache[param] = fn(param);
//       console.log("cache", cache);
//       return cache[param];
//     } else {
//       return cache[param];
//     }
//   };
// }

// const optimizedFunction = memoize(calc);
// console.log(optimizedFunction(100));
// console.log(optimizedFunction(30));
// console.log(optimizedFunction(100));
// console.log(optimizedFunction(30));

// private variable
// closure can be used to create private variables that are not accessible from outside the function scope.

// function createEventStack() {
//   var items = [];
//   return {
//     push(item) {
//       if (item % 2 == 0) {
//         items.push(item);
//         console.log(`is pushed ${item}`);
//       } else {
//         console.log(`${item} is not a even number,please push even number`);
//       }
//     },
//     pop() {
//       console.log(`${items[items.length - 1]} is popped`);
//       return items.pop();
//     },
//     getValue() {
//       return JSON.parse(JSON.stringify(items));
//     },
//   };
// }

// const stack = createEventStack();
// stack.push(10);
// stack.push(11);
// stack.push(12);
// stack.pop();
// console.log(stack.getValue());

// How to implement a(1)(2)(3) a(1)(4) using only one inner closure function

// a(1)(2)(3) = 6

function a(param) {
  let sum = param;
  return function abc(newParam) {
    if (newParam == undefined) {
      return sum;
    }
    sum += newParam;
    return abc;
  };
}
console.log(a(1)(2)(3)(4)());