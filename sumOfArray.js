let myFavArr = [5, 5, 5, 5, 5];

function myFavFun(param) {
    let res = 0;
    for (let i = 0; i < param.length; i++) {
        res = res + param[i];
    };
    return res;
};

let sum = myFavFun(myFavArr);

console.log(sum);