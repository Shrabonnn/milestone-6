const number = [2,3,4,5,6];
function doubleIt(num){
    console.log("num now",num)
    return num*2;
}
const result = number.map(doubleIt)
console.log(result)

const output = number.map( n=> n*2)
console.log(output);