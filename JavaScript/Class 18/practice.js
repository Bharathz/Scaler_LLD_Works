// Promise.resolve(1)
//   .then(() => {
//     return Promise.resolve(2);
//   })
//   .then(() => 3)
//   .then(3)
//   .then((value) => console.log(value * 3))
//   .then(Promise.resolve(4));

  //output: 9 - as 3 is passed to the next then and 3*3 is printed. 
  // The last then is not executed as it is not a function but a promise object. 
  // Hence, the output is 9 and not 12.


let p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error(300));
  }, 2000);
  //   resolve(100);
  //   setTimeout(function () {
  //     reject(new Error(401));
  //   }, 200);
  //   resolve(200);
  setTimeout(function () {
    reject(new Error(500));
  }, 2000);
});

//output: 2 and Error: 300. 
// The first reject is executed after 2 seconds and the promise is rejected with the error message "Error: 300". 
// The second reject is also executed after 2 seconds but it does not change the state of the promise as it is already rejected. 
// Hence, the output is "2" and "Error: 300".



p.then(function (data) {
  console.log(1);
  console.log(data);
})
  .catch(function (err) {
    console.log(2);
    console.log(err);
  })
  .finally(function () {
    console.log(3);
  });