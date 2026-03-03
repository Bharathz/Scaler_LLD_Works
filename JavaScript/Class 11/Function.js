//Function Defination VS Function Expresstion


//function definition
// function abc(){
//     console.log("abc");
// }

//function expression
const abc = function(){
    console.log("abc");
}

const abc1 = function abc(){
    console.log("abc");
    console.log(this);
}

const abc2 = () =>{
    console.log("abc");
    console.log(this);
}

const obj = {
    abc1,
};

const obj1={
    abc2,
};

obj.abc1();
obj1.abc2();