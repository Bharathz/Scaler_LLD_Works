const obj ={
    A: "Abi",
    B: "Bharath",
    C:{
        first: "Cathrine",
        last : "Smith",
    },
    D: function abc() {
        console.log("abc");
    }
};

//Shallow copy

const obj1 ={...obj}; // c -> same ref
const obj2= Object.assign({},obj); // object.assign will also create shallow copy
obj2.C.last ="Teresa";
obj2.A = "Aswini";

//Deep copy
const obj3= JSON.parse(JSON.stringify(obj)); // this will create deep copy but it has some limitations like it will not copy functions and it will not copy undefined values
obj3.C.last ="Hatake";
obj3.A = "akatsuki";
console.log(obj);
console.log(obj1);
console.log(obj2);
console.log(obj3);

// Polyfill for deepcopy of array or object

const superClone = (object)=>{
    const cloning = Array.isArray(object) ? [] : {};
    for (let prop in object){
        //1.what if value of key is an array
        if (Array.isArray(object[prop])){
            cloning[prop]=superClone(object[prop]);
        }
        //2. what if value of key is an object
            else if (typeof object[prop] === "object"){
                cloning[prop]=superClone(object[prop]);
            }

        //3.what if value of key is a primitive value (not array or object)
        else{
            cloning[prop]=object[prop];
        }
    }
    return cloning;
}

const obj4 = superClone(obj);
obj4.C.firstname = "uttam-1";
obj4.A = "sharma-1";
obj4.D = function def() {
  console.log("def");
};
console.log("obj", obj);
console.log("obj4", obj4);
console.log(obj.D());
console.log(obj4.D());