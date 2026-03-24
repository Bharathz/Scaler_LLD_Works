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

function promiseRunMLAlgo(){
    return new Promise(function(resolve,reject){
        try{
        console.log("Running Algorithm....");
        console.log("Processing the payment....");
        setTimeout(function(){
            console.log("Payment done");
            resolve();
            resolve();
            resolve();
            resolve();
            resolve();
        },1000);
    }catch(err){
        reject(err);
    }
});
}



module.exports = {runMLAlgo, promiseRunMLAlgo};