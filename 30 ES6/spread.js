const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
console.log(...fruits);

// use spread operator to copy
const nums = [2,3,4,5,6];
const nums2 = nums;  // point sem array not copy
nums2.push(12);
console.log(nums)  // 2,3,4,5,6,12 


// spread operator
const num = [2,3,14,5,6];
const num2 = [...num]; // value copy
num2.push(12);
console.log(num)
console.log(num2)

// advanced 
const sonkha = [...num,999]  // value copy and assign new value
console.log(sonkha)