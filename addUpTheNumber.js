let test = 20;

function myFun(param) {
    let tot = 0;
    for (let i = 1; i <= param; i++ ) {
        tot = tot + i;
    }
    return tot;
};

let result = myFun(test);

console.log(result);