// var : no reasone to use
// let : allow it to reassign
// const : do not allow it to reassign

function add(a, b=0) {
    return a + b;
}

function name(fist,last='') {
    personName = fist+last;
    return personName;
}

console.log(add(5, 3));      
console.log(add(5,)); 
console.log(name("John",));   