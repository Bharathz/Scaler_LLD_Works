const {runMLAlgo}=require('./lib');

let amount=1000;
const priceOfItem = 10;

function cb(){
    amount=amount-priceOfItem;
    console.log("Remaining amount: " , amount);
}

runMLAlgo(amount,cb);