const promise1 = () =>{
return new Promise((resolve, reject) =>{
    try{
        setTimeout(()=>{
            reject(5);
        }, 5000);
    } catch (error) {
        reject(error);
    }
});
}

console.log(3);
// promise1()
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("Promise is settled");
// });

const data = async()=>{
     try {
    const result = await promise1();
    console.log(result);
    return result;
     }
     catch (error) {
        console.log("From Error",error);
    }
};

data();
console.log(4);