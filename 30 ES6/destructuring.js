const actor = {
    name : 'Ananta',
    age : 30,
    phone: '0178372122',
    money: 12342323
}
// use property name as a variable that contains property value
//const {phone} = actor; 
const {phone,age:boyosh} = actor; 
console.log(phone)
console.log(boyosh)

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;


// array destructuring
const numbers = [45,99];
const [fist,second] = numbers;
console.log(fist)


// function 
function doubleThem (a,b){
    return [a*2 , b*2];
}
const [prothom,ditiyo] = doubleThem(2,3);
console.log(prothom)