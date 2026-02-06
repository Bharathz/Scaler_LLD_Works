// Function to demonstrate non-primitive data types in JavaScript

function fn(param){
    console.log("hello world " , param);
}

const argument = "bharath";
fn(argument); // Passing a string as an argument
fn(); // Calling function without an argument -> 
// output : undefined (reference error: when variable is not defined at all)

//why we need funtions? - to avoid code reusability

let dummy;

fn(dummy); // passing undefined as argument


// ----------------------------------------------------

//Objects: key-value pairs

const captainAmerica = {
    name: "Steave Rogers",
    address:{
        city:"Brooklyn",
        state:"New York"
    },
    movies: ["First Avenger","Winter Soldier","Civil War","Endgame"],
    saveTheWorld:function(){
        console.log("Saving the world...");
    },
    true: 1,
    1:2,
}

//key: String or number
//Value: any premitive or non-premitive data type

console.log(captainAmerica);
console.log(captainAmerica.name);
console.log(captainAmerica.movies[0]);
const movies = "movies"; // key as variable
console.log(captainAmerica[movies]); // accessing using variable

for (let key in captainAmerica){
    if (key === "movies"){
        console.log(Array.isArray(captainAmerica.movies));
        console.log(typeof captainAmerica.movies);
    }
    console.log(typeof captainAmerica[key], " ", key);
}
