function tellJoke(){
    console.log(`Why don't scientist trust atoms? Bcz they make up everyting!`)
}
const jokeInterval = setInterval(tellJoke,2000)

const stop = 0;
const timer = setTimeout(()=>{
 clearInterval(jokeInterval)
},10000)