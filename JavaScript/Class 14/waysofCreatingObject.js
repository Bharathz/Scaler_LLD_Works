// Number of Creating Objects in JS

//1.Object Literals

const obj = {
    name:"Bharath",
    age:26,
};

console.log(obj);

//2.Object Constructor

const obj1=new Object();
obj1.country = "India";
obj1.state="Tamilnadu";

console.log(obj1)

//3.Constructor Function

function Person(name,age){
    this.name=name;
    this.age=age;
}

const person1 = new Person("Brax",25);
console.log(person1);
const person2 = new Person("Infinity",25);
console.log(person2);

//4.ES6 Classes

class Animal{
constructor(type,sound){
    this.type=type,
    this.sound=sound;
}
eat="grass";
makeSound(){
    // console.log(this.sound);
    return this.sound
}
};

const dog = new Animal("Dog","Bark");
const cow = new Animal("Cow","Moooo");

console.log(dog);
console.log(cow);
console.log(dog.makeSound());
console.log(cow.makeSound());
console.log(dog.eat);

//5.Object.create
const protoTypeObj={
    name:"Ram",
    Age:23,
};

const obj2=Object.create(protoTypeObj);
console.log("obj2",obj2);
obj2.name="Groot";
obj2.age=50;
console.log("obj2",obj2);

//6.Using factory functions

function createCar(make,model){
    return{
make,model,start(){
            console.log("Car Started");
        },
    
    }
        
}

const car = createCar("Toyata","Innova");
console.log(car);