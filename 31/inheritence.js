class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, I am ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, age, subject) {
        super(name, age); // Parent class constructor call
        this.subject = subject;
    }

    study() {
        return `${this.name} is studying ${this.subject}`;
    }
}

const student1 = new Student("Sakib", 25, "JavaScript");

console.log(student1.introduce());
console.log(student1.study());


///------------
function Vehicle(brand) {
    this.brand = brand;
}

// Method added to Vehicle prototype
Vehicle.prototype.start = function () {
    return `${this.brand} vehicle started`;
};

function Car(brand, model) {
    Vehicle.call(this, brand); // Call parent constructor
    this.model = model;
}

// Setup inheritance
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Method added to Car prototype
Car.prototype.drive = function () {
    return `${this.brand} ${this.model} is driving`;
};

// Create object
const myCar = new Car("Toyota", "Corolla");

// Use methods
console.log(myCar.start());
console.log(myCar.drive());

// Check prototype chain
console.log(myCar.__proto__ === Car.prototype);
console.log(Car.prototype.__proto__ === Vehicle.prototype);

// View prototypes
console.log(myCar.__proto__);
console.log(myCar.__proto__.__proto__);