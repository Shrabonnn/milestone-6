const number = [2,3,4,5]

const squreFunction = (Numbers) => {
    const squareArray = [];
    let sum = 0;
    let avg ;
    for(const num of Numbers){
        squareArray.push(num*num);
    }

    for(const i of squareArray){
        sum = sum +i ;
    }
    avg =sum/squareArray.length;
    return avg;

}
const squre = squreFunction(number)
console.log(squre);