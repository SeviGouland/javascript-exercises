let myArray = [1, 10, 20, 30, 50];

function myFan(param) {
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
        sum = sum + param[i];
    }
    return sum;
}
let result = myFan(myArray);

console.log(result);