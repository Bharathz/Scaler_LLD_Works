const {runMLAlgo,promiseRunMLAlgo}=require('./lib');

//Inversion of Control 
//  when we pass a function as an argument to another function, 
// then we are giving the control of that function to the other function. 
// This is known as inversion of control.

let amount=1000;
const priceOfItem = 10;

function cb(){
    amount=amount-priceOfItem;
    console.log("Remaining amount: " , amount);
}

runMLAlgo(amount,cb);

promiseRunMLAlgo().then(()=>{
    cb();
}).catch((err)=>{
    console.log("Error: " , err);
}).finally(()=>{
    console.log("ML Algo is done");
});