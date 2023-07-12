// You are counting points for a basketball game, given the amount of 2-pointers scored
// and 3-pointers scored, find the final points for the team and return that value.

// Examples
// points(1, 1) ➞ 5
// points(7, 5) ➞ 29
// points(38, 8) ➞ 100



let num = prompt("Enter two points baskets: ");
let s = prompt("Enter three points baskets: ");

function points(param1, param2) {
    let x = 2;
    let y = 3;
    return param1 * x + param2 * y;
}

let result = points(num, s);

console.log(result);