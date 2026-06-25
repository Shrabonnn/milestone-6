function threeParameter(num1,num2,num3){
    return num1*num2*num3;

}
console.log(threeParameter(3,4,5))

const line1 = 'I am a web developer';
const line2 = 'L love to code';
const line3 = 'I love to eat biryani';
console.log(line1+line2+line3);


function defaultFunction(num1,num2=5){
    return num1+num2;
}
console.log(defaultFunction(4));