const number = [2,3,4,54,6,4];
for (const num of number){
    console.log(num)
}

const glass = {
    name: 'glass',
    color : 'golden',
    price : 12,
    isCleaned : true
}

for(const item in glass){
    console.log(item,glass[item]);
}