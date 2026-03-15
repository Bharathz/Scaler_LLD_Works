//static function of object

const target={a:1};
const source={b:2,c:3};
Object.assign(target,source);

console.log("target",target); //op: {a:1,b:2,c:3}
console.log("source",source); //op: {b:2,c:3}

//key

console.log(Object.keys(target)); //op: ['a','b','c']
console.log(Object.keys(source));//op: ['b','c']

console.log(Object.values(target));//op: [1,2,3]
console.log(Object.values(source));//op: [2,3]

console.log(Object.entries(target));//op: [['a',1],['b',2],['c',3]]
console.log(Object.entries(source));//op: [['b',2],['c',3]]

// Seal() vs freeze()


//freeze() method freezes an object. 
// A frozen object can no longer be changed; 
// freezing an object prevents new properties from being added to it, 
// existing properties from being removed, prevents changing the enumerability, 
// configurability, or writability of existing properties, and prevents the values of 
// existing properties from being changed. In essence the object is made effectively immutable. 
// The freeze() method returns the passed object.
const obj ={name:"Bharath"};
Object.freeze(obj);
obj.name="Brax"; // op: name will not change because object is frozen
obj.age=25; //op: age will not be added because object is frozen    
console.log("Before delete",obj);
delete obj.name;
console.log("After delete",obj);


//seal() method seals an object, 
// preventing new properties from being added to it and marking all existing properties as non-configurable. 
// Values of present properties can still be changed as long as they are writable. 
// The seal() method returns the passed object.

const obj1 ={name:"Dominic"};
Object.seal(obj1);
obj1.name="Dante";
console.log(obj1);
obj1.name="Kemenari"; //op: name will change because object is sealed
console.log(obj1);
obj1.age=25; //op: age will not be added because object is sealed
console.log(obj1);
delete obj1.name; //op: name will not be deleted because object is sealed
console.log(obj1);

//Propertiy Description

const newObj ={name :"Monkey D Luffy"};
const desc=Object.getOwnPropertyDescriptor(newObj,"name");
console.log(desc);
//op: {value: 'Monkey D Luffy', writable: true, enumerable: true, configurable: true}

delete newObj.name; //op: name will be deleted because it is configurable
console.log(newObj); //op: {}
// for (let key in newObj){
//     console.log(key); //op: name
//     console.log(newObj[key]); //op: Monkey D Luffy
// }


//writable: true, //op: value can be changed
//enumerable: true, //op: property will be listed in for...in loop and Object.keys()
//configurable: true //op: property can be deleted or changed to accessor property


//1. writable: false, enumerable: true, configurable: true

//use case : when we want to create a property that cannot be changed but can 
// be listed in for...in loop and Object.keys() and 
// can be deleted or changed to accessor property

const obj2={};
Object.defineProperty(obj2,"name",{
    value:"Zoro",
    writable:false,
    enumerable:true,
    configurable:true
});
obj2.name="Sanji"; //op: name will not change because writable is false
console.log(" 1. writable:false,enumerable:true,configurable:true");
console.log(obj2); //op: Zoro

//2. writable: true, enumerable: false, configurable: true

//use case : when we want to create a property that can be changed but 
// cannot be listed in for...in loop and Object.keys() but can be 
// deleted or changed to accessor property

Object.defineProperty(obj2,"age",{
    value:25,
    writable:true,
    enumerable:false,
    configurable:true
});
console.log("2. writable:true,enumerable:false,configurable:true");
console.log(obj2); //op: 25

for (let key in obj2){
    console.log(key); //op: name
    console.log(obj2[key]); //op: Zoro
}

//3. writable: true, enumerable: true, configurable: false
//use case : when we want to create a property that can be changed and 
// can be listed in for...in loop and Object.keys() but cannot be 
// deleted or changed to accessor property

Object.defineProperty(obj2,"hobby",{
    value:"Swordsman",
    writable:true,
    enumerable:true,
    configurable:false
});
delete obj2.hobby; //op: hobby will not be deleted because configurable is false
console
console.log(obj2); //op: {name: 'Zoro', age: 25, hobby: 'Swordsman'}
