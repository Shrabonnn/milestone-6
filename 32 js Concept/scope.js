// Global Scope
let name = "Shrabon";

function showName() {
    console.log(name);
}

showName();      // Shrabon
console.log(name); // Shrabon


// function scope
function test() {
    var age = 22;
    console.log(age);
}

test(); // 22

console.log(age); // ReferenceError

// Block Scope
{
    let city = "Dhaka";
    const country = "Bangladesh";

    console.log(city);
    console.log(country);
}

console.log(city); // ❌ ReferenceError
console.log(country); // ❌ ReferenceError