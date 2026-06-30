// const isVerified = true;

// // if(isVerified === true){
// //     console.log("Is Varified");
// // }else{
// //     console.log("Not Varified");
// // }

// console.log(`${isVerified ===true ? "IS VARIFIED" : "NOT VARIFIED"}`)


function convetSecondToTime(sec){
    const hour = parseInt(sec/3600);
    const min = parseInt(sec / 60);
    const remainSec = parseInt(sec % 60);
     console.log(hour+" hour "+min+" min "+remainSec+" sec ago")
}
convetSecondToTime(120)