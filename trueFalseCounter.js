let arr = [true, false, true, true];

function trueFalse(param1) {
    let counterOfTrue = 0;
    let counterOfFalse = 0;

    for (let i = 0; i < param1.length; i++) {
        if (param1[i] === true) {
            counterOfTrue = counterOfTrue + 1;
        } else if (param1[i] === false) {
            counterOfFalse = counterOfFalse + 1;
        }
    };

    let arr1 = [counterOfFalse, counterOfTrue];
    return arr1;
}

let result = trueFalse(arr);

console.log("Τα True είναι", result[1]);
console.log("Τα false είναι", result[0]);







// let arr = [true, false, true, true];

// function trueFalse(param1) {
//     let counterOfTrue = 0;

//     for (let i = 0; i < param1.length; i++) {
//         if (param1[i] === true) {
//             counterOfTrue = counterOfTrue + 1;
//         } 
//     };

//     return counterOfTrue;
// }

// let counterOfTrue = trueFalse(arr);

// console.log("Τα True είναι", counterOfTrue);
// console.log("Τα false είναι", arr.length - counterOfTrue);




