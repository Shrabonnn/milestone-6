console.log(1);
console.log(2);
console.log(3);
//setTimeout(doSomething)
doSomething
console.log(5);
console.log(6);
console.log(7);

function doSomething(){
    console.log(4);

}
let num = 0;
const intervalID = setInterval(()=>{
    num++;
    console.log(num)
    if(num > 20){
        clearInterval(intervalID);
    }
},400)