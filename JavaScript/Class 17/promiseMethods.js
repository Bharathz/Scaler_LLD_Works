// const promise1 = Promise.resolve(3);
// const promise2 =Promise.reject(2);
// const promise3 = Promise.resolve("any random string");

// Promise.all([promise1, promise2, promise3]).then((data)=>{
//     console.log(data); // [3, 2, "any random string"]
// })
// .catch((err)=>{
//     console.log("Error: " , err);
// })
// .finally(()=>{
//     console.log("Promise is settled");
// });



// Promise.allSettled([promise1, promise2, promise3]).then((data)=>{
//     console.log(data); // [3, 2, "any random string"]
// })
// .catch((err)=>{
//     console.log("Error: " , err);
// })
// .finally(()=>{
//     console.log("Promise is settled");
// });

const promise4 = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("promise 4 resolved");
    }, 500);
  } catch (error) {
    reject(error);
  }
});
const promise5 = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("promise 5 resolved");
    }, 1000);
  } catch (error) {
    reject(error);
  }
});

// Promise.race([promise4, promise5])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("error: ", error);
//   })
//   .finally(() => {
//     console.log("code executed");
//   });

Promise.any([promise4, promise5])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error: ", error);
  })
  .finally(() => {
    console.log("code executed");
  });