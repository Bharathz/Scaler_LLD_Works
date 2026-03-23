function runMLAlgo(amount,cb){
    console.log("Running Algorithm....");
    console.log("Processing the payment....");
    setTimeout(function(){
        console.log("Payment done");
        cb();
        cb();
        cb();
        cb();
        cb();
    },1000);
}

module.exports = {runMLAlgo };