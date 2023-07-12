let x = 60;
let y = 50;



function lessThan100(num1, num2) {
    if (num1 + num2 < 100) {
        return true;
    } else {
        return false;
    };
}

let result = lessThan100(x, y);

console.log(result);