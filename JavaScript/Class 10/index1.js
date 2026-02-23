//JS is neither pass by value nor pass by reference, it is pass by sharing.
// When we pass a primitive value (like a number or a string) to a function, a copy of the value is created and passed to the function. 
// This means that changes to the parameter inside the function do not affect the original variable outside the function.

function func(param1,param2){
    param1 = 45;
    param2.a=50;
}
const a=20;
const b={
    a:35,
};
func(a,b);
console.log(a); // 20 - because a is a primitive value, and when it is passed to the function, a copy of the value is created.
console.log(b); // { a: 50 } - because b is an object, and when it is passed to the function, a reference to the object is created.
// When we modify the object inside the function, we are modifying the same object that is referenced by b,
//  so the changes are reflected outside the function as well.





