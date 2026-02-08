// const arr=[1,2,3,4,5];

// console.log(typeof arr); // Output: object

// arr.push(6);

// console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

//reuseability of code is one of the main advantages of OOP
//save memory - we can create multiple objects from a class and they will share the same properties and methods
//inheritance - the process by which one class can inherit properties and methods from another class

//parent class - the class that is being inherited from
//child class - the class that inherits from the parent class


//What if i want to create reusable method.

Array.prototype.sum = function(){
    let sum=0;
    for (let i=0; i<this.length;i++){
        sum+=this[i];
        
    }
    console.log(sum);
}

const arr=[1,2,3,4,5];
arr.sum(); // Output: 15

const arr2=[10,20,30];
arr2.sum(); // Output: 60