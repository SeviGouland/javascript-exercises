let person1 = {
    firstName: "Sevasti",
    lastName: "Gouland",
    age: 20,
    eyecolor: "green"
};

let person2 = {
    firstName: "Giorgos",
    lastName: "Anagnost",
    age: 30,
    eyecolor: "green"
};

let myArr = [];

myArr.push(person1);
myArr.push(person2);


// console.log(myArr);

function printArray(p1) {
    for (let j = 0; j < p1.length; j++) {
        console.log(p1[j].firstName); 
        console.log(p1[j].lastName); 
        console.log(p1[j].age); 
        console.log(p1[j].eyecolor); 
    }
}

printArray(myArr);