/* truthy : 
1. true
2. any number (+ve, -ve) will be thruthy other than 0 
3 any sting other than empty string
4 '0' , 'false'
5 .{}
6. []

falsy.
1. false
2. 0 
3. ' ' empty string
4. undefined
5. null 
*/


// Example 1
let username = "Rahim";

if (username) {
  console.log("Welcome");
} else {
  console.log("Enter Username");
}

// Output: Welcome

// Example 2
let username2 = "";

if (username2) {
  console.log("Welcome");
} else {
  console.log("Enter Username");
}

// Output: Enter Username

// Example 3
let number = 10;

if (number) {
  console.log("Truthy");
}

// Output: Truthy

// Example 4
let number2 = 0;

if (number2) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// Output: Falsy

// Example 5
let arr = [];

if (arr) {
  console.log("Array is Truthy");
}

// Output: Array is Truthy

// Example 6
let obj = {};

if (obj) {
  console.log("Object is Truthy");
}

// Output: Object is Truthy