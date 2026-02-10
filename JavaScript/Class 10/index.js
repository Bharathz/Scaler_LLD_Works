
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

//Deep cloning 
// Deep cloning means creating a new object or array that is completely independent of the original, including all nested objects and arrays. 
// This can be achieved using JSON.parse() and JSON.stringify() methods, or using a library like Lodash.
// JSON.stringify() converts a JavaScript object or array into a JSON string, and 
// JSON.parse() converts a JSON string back into a JavaScript object or array.

const arr7 = [1,[2,3],4,5];
const arr8 = JSON.parse(JSON.stringify(arr7));
arr8[1].push(6);
console.log(arr7); // [1,[2,3],4,5]
console.log(arr8); // [1,[2,3,6],4,5]
arr7[1].push(7);
console.log(arr7); // [1,[2,3,7],4,5]
console.log(arr8); // [1,[2,3,6],4,5]

console.log(typeof JSON.stringify(arr7), typeof JSON.parse(JSON.stringify(arr7)), typeof arr7, arr7); // string object object

//--------------------------------------------------------------

//rest parameter - allows a function to accept an indefinite number of arguments as an array, 
// providing a way to represent variadic functions in JavaScript.
//array , object - rest parameter must be the last parameter in the function definition, and it will collect all remaining arguments into an array.

function func(param1,...param2){
    console.log("Hi Params are", param1, param2); // output: Hi Params are Hello [ 'Welcome', 'to', 'JavaScript', [ 1, 2, 3, 4, 5 ] ]
}
func("Hello", "Welcome", "to", "JavaScript", [1,2,3,4,5]);

//--------------------------------------------------------------

const obj={
    name:"steave",
    age:30,
    great: function(){
        console.log("Hello Everyone");
    },
};
const jsonString = JSON.stringify(obj);
console.log(jsonString); 
// {"name":"steave","age":30} - function is not included in the JSON string because functions cannot be serialized to JSON.
console.log(typeof jsonString); // string
console.log(JSON.parse(jsonString)); // { name: 'steave', age: 30 } 
console.log(typeof JSON.parse(jsonString)); // object