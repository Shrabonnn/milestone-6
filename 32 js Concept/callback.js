function greeting(greetingHandler,name){
    greetingHandler(name);
}

function greetingMorning(name){
    console.log("Good Morning "+name);
}

function greetEvening(name){
    console.log("Good Evening "+name);
}
const name = 'Halim mama'
greeting(greetingMorning,name);

greeting(greetEvening,"Rakib");
