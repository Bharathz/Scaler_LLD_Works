const arr = [1,2,3,4,5];

//Add an element at the last index
arr.push(6);
console.log(arr);
//remove last element
arr.pop();
console.log(arr);
//add element to the start
arr.unshift(0);
console.log(arr);
//remove an element at the start of index
arr.shift();
console.log(arr);

//Splice
//add , remove, and replace
// [1,2,3,4,5]
//starting index and delete count --> removing example
// const arr1 = arr.splice(1,2);
// console.log(arr1);
// console.log(arr);

//starting index = 1, no of item to be deleted is 1, and 6,7,8
console.log(arr);
const arr1= arr.splice(1,1,6,7,8);
console.log(arr1);
console.log(arr);

//Slice --> Like slice a piece of cake
//starting index,last index (and last index val is not included)
const arr2 = arr.slice(1,4);
const arr3 = arr.slice(1,3);
console.log(arr2);
console.log(arr3);
console.log(arr);

//concatination
const arr4 =[9,10,11];
const res = arr.concat(arr4);
console.log(res);
console.log(arr4);
console.log(arr);

//split
const str = "Hi I am google";
const strArr = str.split(" ");
console.log(strArr);
//merge
const mergeStr = strArr.join("+");
console.log(mergeStr);


