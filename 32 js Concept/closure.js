function stopWatch (){
    let counter = 0 ; 
    return function(){
        counter++;
        return counter;
    }
}
const watch1 = stopWatch();
const watch2 = stopWatch();
// console.log(stop); ekhane return taw ekta function tai 
// stop e () dite hobe 
console.log(watch1);
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch2());
console.log(watch2());
console.log(watch2());
console.log(watch1());
console.log(watch1());
