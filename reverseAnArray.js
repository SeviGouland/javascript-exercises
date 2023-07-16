let arr = [24, 54, 6, 6, 8];


function myFun(param) {
    let myArray = [];
    for (let i = param.length - 1; i >= 0; i--) {
        console.log(param[i]);
        myArray.push(param[i]);
    };
    return myArray;
};

let result = myFun(arr);
console.log(result);