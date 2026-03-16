//Map and Set in JavaScript

//Map:
//Map and Set are built-in data structures in JavaScript that allow you to store and manipulate collections of data.
//Map is a collection of key-value pairs where keys can be of any data type. 
//It maintains the order of insertion and allows duplicate values but not duplicate keys.

const map = new Map();

//adding values to map

map.set("name","Bharath");
map.set("age",25);
map.set("city","Bangalore");
console.log(map);

//set,get, has, delete, clear, size, keys, values, entries, forEach

//Set:
//set: adds a new key-value pair to the map
//Set is a collection of unique values where values can be of any data type.
//It does not maintain the order of insertion and does not allow duplicate values.
const set = new Set();
//adding values to set
set.add("Bharath");
set.add(25);
set.add("Bangalore");
set.add("Bharath"); //op: will not be added because set does not allow duplicate values
console.log(set);

//get:
//has: checks if a value exists in the set
console.log(set.has("Bharath")); //op: true
console.log(set.has("Sanji")); //op: false

//delete: removes a value from the set
set.delete("Bharath");
console.log(set); //op: Set(2) { 25, 'Bangalore' }

//clear: removes all values from the set
set.clear();
console.log(set); //op: Set(0) {}

//size: returns the number of values in the set
set.add("Bharath");
set.add(25);
console.log(set.size); //op: 2

//keys: returns an iterator of the values in the set
console.log(set.keys()); //op: SetIterator { 'Bharath', 25 }
//values: returns an iterator of the values in the set
console.log(set.values()); //op: SetIterator { 'Bharath', 25 }
//entries: returns an iterator of the values in the set
console.log(set.entries()); //op: SetIterator { 'Bharath', 25 }
//forEach: executes a provided function once for each value in the set
set.forEach(value => console.log(value)); //op: Bharath 25


// weakmap
// weakmap is a collection of key-value pairs where keys are objects and values can be of any data type.
// It does not maintain the order of insertion and allows duplicate values but not duplicate keys.
// The keys in a weakmap are weakly referenced, which means that if there are no other references to the key object, it can be garbage collected.

// key : object
let obj = { key: "firtname" };
const obj1 = { key: "lastname" };
const map1 = new WeakMap();
map1.set(obj, "Sumedh");
map1.set(obj1, "Singh");
obj = 2;
console.log(map1.get(obj));
console.log(map1.get(obj1));
console.log(obj);

// weakset
// weakset is a collection of unique values where values can be of any data type.
// It does not maintain the order of insertion and does not allow duplicate values.
// The values in a weakset are weakly referenced, which means that if there are no other references to the value object, 
// it can be garbage collected.

let obj2 = { key: "firtname" };
const obj3 = { key: "lastname" };
const set1 = new WeakSet();
set1.add(obj2);
set1.add(obj3);
console.log(set1);
console.log(set1.has(obj2));
obj2 = 3;
console.log(set1.has(obj2));