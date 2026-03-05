class Person{
//name , age

constructor (name,age){
    this.name = name;
    this.age = age;
}

greet(){
    console.log(`Hi my name is ${this.name} and I am ${this.age} years old.`);
}
}

const person = new Person ("Bharath", "26");
const person1 = new Person ("Ben","10")

console.log(person);
person.greet();

// Reusable objects -> Constructor function
// Function should always starts with caps
function PersonFun(name,age){
    this.name=name;
    this.age=age;

}

PersonFun.prototype.greet = function(){
    console.log(`Hi my name is ${this.name} and I am ${this.age} years old.`);
}

const person2 = new PersonFun("Bharath1","26");
console.log(person2);
person2.greet();

//Class is syntatic sugar over constructor function

class Animal {
    constructor(name){
        this.name = name;
    }

    makeSound(){
        console.log(`${this.name} makes sound`);
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name); // utilize parent function
        this.breed = breed;
    }
    makeSound(){
        console.log(`${this.name}, this ${this.breed} barks` );
    }
}

const dog = new Dog("Jacky","Indie");
console.log(dog);
dog.makeSound();


function AnimalFun(name){
    this.name=name;
}

AnimalFun.prototype.makeSound = function(){
        console.log(`${this.name} makes sound`);
    };

    

function Cat (name,breed){
    AnimalFun.call(this,name); // using call function where as in class we use extend
    this.breed=breed;
};

Cat.prototype.makeSound = function(){
        console.log(`${this.name} makes sound its breed is ${this.breed}`);
    };

//inheritance == extends
// Object.setPrototypeOf(Cat.prototype,AnimalFun.prototype);

Cat.prototype = Object.create(AnimalFun.prototype);
Cat.prototype.constructor=Cat;
const cat = new Cat("Jikky","Billy");
console.log(cat);
cat.makeSound();

// Static 
//static method or variable is shared across all the instances of the class and can be accessed without creating an instance of the class.
//Static method or variables are available on class directly
//Array.isArray()

class MathHelper{
    static add(a,b){
        return a+b;
    }
    static subtract (a,b){
        return a-b;
    }
}

console.log(MathHelper.add(3,5));
console.log(MathHelper.subtract(7,3));

//using function

function MathHelperFun(){};

MathHelperFun.add = function(a,b){
return a+b;
}
MathHelperFun.subtract = function(a,b){
return a-b;
}

console.log(MathHelperFun.add(3,5));
console.log(MathHelperFun.subtract(7,3));

class Counter{
    static count = 0;
    static increment (){
        Counter.count+=1;
    }
}

for(let i=0; i<5; i++){ 
Counter.increment();
}

console.log(Counter.count);