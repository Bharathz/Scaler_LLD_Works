// map | filter | reduce 
//these are higher order functions that are used to manipulate arrays in JavaScript.
// these dont mutate the original array but return a new array or a single value based 
// on the operation performed.

const arr = [1, 2, 3, 4, 5];

// map
const mappedArr = arr.map((num) => num * 2);
console.log(mappedArr);

// filter
const filteredArr = arr.filter((num) => num > 2);
console.log(filteredArr);

// reduce
const reducedValue = arr.reduce((acc, num) => acc + num, 0);
console.log(reducedValue);