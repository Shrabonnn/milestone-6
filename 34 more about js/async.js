// console.log(1);
// console.log(2);
// console.log(3);
// //setTimeout(doSomething)
// doSomething
// console.log(5);
// console.log(6);
// console.log(7);

// function doSomething(){
//     console.log(4);

// }

const myLoader = () => {
    return new Promise((resolve, reject)=>{
        const success = true;
        if(success){
            resolve("Acepted")
        }else{
            reject("Rejected")
        }
    })
}
myLoader()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });