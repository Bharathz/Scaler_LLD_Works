
//default paramenter value
function fn(param1, param2, param3 = "defaultvalue")
{
    console.log("I am fn", param1, param2, param3 );
    }

    //optional either you can pass or ignore
fn ("hi" , "hello");
fn ("hi" , "hello", "welcome");

const arr = [1,2,3,4,5];
const arr2 = arr;
arr2.pop();
// both arr and arr2 will be changed because they are pointing to the same array in memory
console.log(arr);
console.log(arr2);

const num1=10;
let num2=num1;
// num2 is a copy of num1, so changing num2 will not affect num1
num2 +=10;
console.log(num1); // 10
console.log(num2); // 11

// Spread operator
// ... is used to create a shallow copy of an array or object - Destructuring
//shallow copy means that if the original array or object contains nested objects or arrays, 
// the nested objects or arrays will still be shared between the original and the copy.
const arr3 = [1,2,3];
const arr4 = [...arr3];
arr4.push(4);
console.log(arr3); // [1,2,3]
console.log(arr4); // [1,2,3,4]
arr3.push(0);
console.log(arr3); // [1,2,3,0]
console.log(arr4); // [1,2,3,4]


const arr5=[1,[2,3],4,5];
const arr6=[...arr5];
arr6[1].push(6);
console.log(arr5); // [1,[2,3,6],4,5]
console.log(arr6); // [1,[2,3,6],4,5]
arr5[1].push(7);
console.log(arr5);  // [1,[2,3,6,7],4,5]
console.log(arr6);  // [1,[2,3,6,7],4,5]
arr5.push(0);
arr6.push(200);
console.log(arr5);  // [1,[2,3,6,7],4,5,0] 
console.log(arr6);  // [1,[2,3,6,7],4,5,200] 
//  arr6 is not affected by the push to arr5 because it is a shallow copy, 
// but the nested array is shared between arr5 and arr6, so changes to the nested array will affect both arr5 and arr6.