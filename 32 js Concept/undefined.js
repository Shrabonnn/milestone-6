/*
=========================================
8 Ways to Get Undefined in JavaScript
=========================================
*/

// 1. Variable that is not initialized
let studentName;
console.log("1. Uninitialized Variable:");
console.log(studentName); // undefined

console.log("--------------------------------");

// 2. Function with no return
function add(a, b) {
    let sum = a + b;
}
console.log("2. Function with no return:");
console.log(add(5, 3)); // undefined

console.log("--------------------------------");

// 3. Parameter that is not passed
function greet(name) {
    console.log("3. Parameter not passed:");
    console.log(name); // undefined
}
greet();

console.log("--------------------------------");

// 4. Return with nothing on the right side
function test() {
    return;
}
console.log("4. Empty return:");
console.log(test()); // undefined

console.log("--------------------------------");

// 5. Accessing a property that doesn't exist
const person = {
    name: "Shrabon",
    age: 23
};
console.log("5. Non-existing object property:");
console.log(person.address); // undefined

console.log("--------------------------------");

// 6. Accessing array elements outside the index range
const numbers = [10, 20, 30];
console.log("6. Array index out of range:");
console.log(numbers[5]); // undefined

console.log("--------------------------------");

// 7. Deleting an element inside an array
const fruits = ["Apple", "Banana", "Mango"];

delete fruits[1];

console.log("7. Delete array element:");
console.log(fruits);      // ['Apple', empty, 'Mango']
console.log(fruits[1]);   // undefined
console.log(fruits.length); // 3

console.log("--------------------------------");

// 8. Setting a value directly to undefined
let x = 100;
x = undefined;

console.log("8. Assign undefined manually:");
console.log(x); // undefined