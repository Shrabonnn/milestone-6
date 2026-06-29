function delayGreeting(name,time){

    
    setInterval(()=>{
        console.log("Hello, "+name+"!")
    },time)
    
}
delayGreeting("Alice",5000)