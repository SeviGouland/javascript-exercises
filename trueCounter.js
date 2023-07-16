let myArr = [true, false, true, true];

function trFl(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            counter = counter + 1;
        };
    };
    return counter;
};

let sum = trFl(myArr);

console.log(sum);