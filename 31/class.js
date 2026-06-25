class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1 = new Person("Sakib", 25);
const person2 = new Person("Rahim", 30);

console.log(person1.name);
console.log(person2.age);
console.log(person2);
console.log(person1.introduce());