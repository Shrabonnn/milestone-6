const glass = {
    name: 'glass',
    color : 'golden',
    price : 12,
    isCleaned : true
}
const key = Object.keys(glass);
const value = Object.values(glass);
const entires = Object.entries(glass);
console.log(key,value,entires);

// delete glass.isCleaned;
// console.log(glass)

const {isCleaned , ...shortGlass} = glass;
console.log(shortGlass);

//Object.freeze(glass);
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 60;
delete glass.name;
console.log(glass)

const Glass = {...glass};
console.log(Glass)