const add = (a, b) => {
    return a + b;
};

console.log(add(10, 5));


// single parameter 

const student = {
    name: "Sakib",
    age: 25,

};


const greet = (users) => users.age;

const age = greet(student);
console.log(age);


const getThird = number => number[2];
const thrid = getThird([1,2,3,4,5]);
console.log(thrid)

//no perameter 
const getPI = () =>Math.PI;

// multiple line
const doMath = () => {
    const sum =2+3;
    const val =5;
    const avg = sum/val;
    return avg;
}
console.log(doMath());

const doMath2 = (num1=0,num2=0) =>{
    const sum =num1+num2;
    const avg = sum/2;
    return avg;
}
console.log(doMath2(3,1));
