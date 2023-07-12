// Create a function that takes a number as its only argument and returns true
// if it's less than or equal to zero, otherwise return false.

// Examples
// lessThanOrEqualToZero(5) ➞ false
// lessThanOrEqualToZero(0) ➞ true
// lessThanOrEqualToZero(-2) ➞ true

let x = 5;
let y = 0;
let s = -2;

function lessThanOrEqualToZero(param1) {
    if (param1 <= 0) {
        return true;
    } else {
        return false;
    };
};

let result = lessThanOrEqualToZero(x);
let result2 = lessThanOrEqualToZero(y);
let result3 = lessThanOrEqualToZero(s);

console.log(result, result2, result3);