let arr1 = [1, 21, 0, 5, 4];
let arr2 = [15, 5 ,3 ,51];




function fun(param1) {
    let max = param1[0];
    for (let i = 1; i < param1.length; i++) {
        if (param1[i] > max) {
            max = param1[i];
        } 
    }
    return max;
}

let result = fun(arr1);
let result1 = fun(arr2);

console.log(result);
console.log(result1);






































