const number1 = [2,3,4,5]
const number2 = [2,13,24,35]

const combineArray = (Numbers1,Numbers2) => {
    const finalArray = [...Numbers1,...number2];
    //let max = finalArray[0];
    // for(const num of finalArray){
    //     if(num>max){
    //         max = num;
           
    //     }
    // }
    let max = Math.max(...finalArray);
     return max;

}
const combine = combineArray(number1,number2)
console.log(combine);