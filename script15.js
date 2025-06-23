// let arr = [3, 2, 6, 1, 4, 5];
// let arr = ['b', 'c', 'a'];

// console.log(arr.sort((a, b) => b - a));

// const products = [
//     { name: 'Product 1', price: 100, quantity: 5 },
//     { name: 'Product 2', price: 50, quantity: 10 },
//     { name: 'Product 3', price: 200, quantity: 2 },
//     { name: 'Product 4', price: 50, quantity: 5 }
// ];
// console.log(products.sort((a, b) => {if (b.price !== a.price){return b.price - a.price} else {return a.quantity - b.quantity}}));

// let fruits = [`banana`, `apple`,  `orange`];
// console.log(fruits.sort((a, b) => a.localeCompare(b)));



// const items = [
//     { name: 'Item A', popularity: 5 },
//     { name: 'Item C', popularity: 2 },
//     { name: 'Item D', popularity: 3 },
//     { name: 'Item B', popularity: 5 }
// ];
// console.log(items.sort((a, b) => {if (b.popularity !== a.popularity){return b.popularity - a.popularity} else {return a.name.localeCompare(b.name)}}));




// class Person {
//     constructor(colorEye, name, age){
//         this.colorEye = colorEye;
//         this.name = name;
//         this.age = age;
//     }
//     namePerson() {
//         console.log(`Hi, I"m ${this.name}. I"m ${this.age} years old. I have ${this.colorEye} eyes.`);
//     }
//     happyBirthday() {
//         this.age += 1;
//         console.log(`Happy birthday ${this.name}! You"re ${this.age} years old.`);
//     }
// }
// const person1 = new Person(`blue`, `Anastasiia`, 15);
// console.log(person1);

// person1.namePerson();
// person1.happyBirthday();



// homework
// sort 
const events = [
    { name: 'Event 1', date: '10/02/2023' },
    { name: 'Event 2', date: '15/03/2023' },
    { name: 'Event 3', date: '01/01/2023' },
    { name: 'Event 4', date: '01/02/2023' }
];
console.log(events.sort((a, b) => a.date.localeCompare(b.date)))

// class
class Animal {
    constructor(who, breed, gender, weight, colorFur) {
        this.who = who;
        this.breed = breed;
        this.gender = gender;
        this.weight = weight;
        this.colorFur = colorFur;
    }
    infoAnimal() {
        console.log(`The ${this.who} is a ${this.gender} ${this.breed} with ${this.colorFur} fur and weighs ${this.weight} kilograms.`);
    }
}
const cat = new Animal(`cat`, `Siamese`, `female`, 4,  `white`);
cat.infoAnimal();

const dog = new Animal(`dog`, `Labrador`, `male`, 30, `golden`);
dog.infoAnimal();
