const numbers = [1, 3, 5, 7, 9];
const result = numbers.map(n => n + 1);
console.log(result)

// loop 
const result1 = [];

for (const num of numbers) {
    result1.push(num + 1);
}

console.log(result);

const array = [33,50,79,78,90,101,30];
const filterArray = array.filter(n=> n%10==0);
console.log(filterArray)