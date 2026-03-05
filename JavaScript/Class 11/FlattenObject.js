const input = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
    postCodes: {
      firstBlock: 10,
      secondBlock: 12,
    },
  },
};

const myflatObj= function(arr){
if (!arr || !Array.isArray(arr)){
    throw new Error("Expected Parameter should be an array");
}
const newArr = [];
for (let i=0; i<arr.length; i++){
    const elem = arr[i];
    if (Array.isArray(elem)){
        newArr.push(...myflat(elem));
    }else {
        newArr.push(elem);
    }
}
return newArr;
};


// code incomplete - yet to complete the function to flatten the object