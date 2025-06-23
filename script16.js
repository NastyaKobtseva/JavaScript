// прототипне наслідування 
// let obj = {color: 'red'};
// const lipstick = Object.create(obj);
// lipstick.size = 20;
// console.log(lipstick);

// console.log(lipstick.hasOwnProperty(`color`));
// console.log(obj.isPrototypeOf(lipstick));

// приватні класи

// class Flower {
//     #matochka;
//     constructor({color, size, type, matochka}) {
//         this.color = color;
//         this.size = size;
//         this.type = type;
//         this.#matochka = matochka;
//     }
//     infoFrower() {
//         console.log(`This flower has ${this.color} color; ${this.#matochka}`);
//     }

//     get matochka() {
//         return this.#matochka;
//     } 
//     set matochka (newMatochka) {
//         this.#matochka = newMatochka;
//     }
// }
// let flowerOne = new Flower({color: `white`, size: 10, type: `daisy`, matochka: 4});
// flowerOne.color = `red`;



// console.log(flowerOne.matochka);
// flowerOne.matochka = 7;
// console.log(flowerOne.matochka);



// flowerOne.infoFrower();



// homework 
// 1
// class Rectangle {
//     constructor(width, height) {
//         this.height = height;
//         this.width = width;
//     }
//     getArea() {
//         return `площа =`, this.width * this.height;
//     }
// }
// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.getArea());

// // 3
// class Product {
//     constructor(name, price, discount) {
//         this.name = name;
//         this.price = price;
//         this.discount = discount;
//     }
//     getDiscountPrice() {
//        return `Ви купляєте ${this.name} з ціною ${this.price}. 
//        Ціна зі знижкою становить:`, this.price * (1 - (this.discount / 100));
//     }
// }
// const product1 = new Product('Phone', 500, 10);
// console.log(product1.getDiscountPrice());

// // 2
// class Calculator {
//     add(num1, num2) {
//         return num1 + num2;
//     }
//     subtract(num1, num2) {
//         return num1 - num2;
        
//     }
//     multiply(num1, num2) {
//         return num1 * num2;
//     }
//     divide(num1, num2){
//         if (num2 === 0) {
//             return `Ділення на нуль неможливо`;
//         } else {
//             return num1 / num2;
            
//         }
//     }
// }
// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); 
// console.log(calculator.subtract(5, 2));
// console.log(calculator.multiply(2, 4));
// console.log(calculator.divide(10, 2));
// console.log(calculator.divide(10, 0));







// статичні властивості
// class Banana {
//     static colors = {
//         GREEN: `green`, YELLOW: `yellow`
//     }
//     constructor(color, size){
//         this.color = color;
//         this.size = size;
//     }
// }
// // не видно 
// const bananaAfrica = new Banana(`yellow`, 10);
// console.log(bananaAfrica.colors);
// // видно
// console.log(Banana.colors);



// console.log(bananaAfrica.color);
// bananaAfrica.color = Banana.colors.GREEN;
// console.log(bananaAfrica.color);




// статичні методи 
// class Banana {
//     static colors = {
//         GREEN: `green`, YELLOW: `yellow`
//     }
//     constructor(color, size){
//         this.color = color;
//         this.size = size;
//     }
//     static getBanana() {
//         console.log(`Всього у нас є ${Banana.colors.YELLOW}, ${Banana.colors.GREEN}`);
        
//     }
// }
// let bananaAmerica = new Banana(`yellow`, 10);
// console.log(Banana.getBanana());

// наслідування 
// class Animal {
//     constructor(who, breed, gender, weight, colorFur) {
//         this.who = who;
//         this.breed = breed;
//         this.gender = gender;
//         this.weight = weight;
//         this.colorFur = colorFur;
//     }
//     infoAnimal() {
//         console.log(`The ${this.who} is a ${this.gender} ${this.breed} with ${this.colorFur} fur and weighs ${this.weight} kilograms.`);
//     }
// }
// const cat = new Animal(`cat`, `Siamese`, `female`, 4,  `white`);
// cat.infoAnimal();

// const dog = new Animal(`dog`, `Labrador`, `male`, 30, `golden`);
// dog.infoAnimal();


// class Dolphin extends Animal{
//     constructor(who, breed, gender, weight, colorFur) {
//         super(who, breed, gender, weight, colorFur) 
//     }
// }
// let philip = new Dolphin(`dolphin`, `tropical`, `male`, 100, `none`);
// philip.infoAnimal()



// homework 
// 1
class Quadrangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    perimeter() {
        console.log(2 * (this.a + this.b));
    }
    area() {
        console.log(this.a * this.b);
    }
}
class Square extends Quadrangle {
    constructor(a, b) {
        super(a, b);
    }
}
let result = new Square(4, 8);
result.perimeter();

class Rectangle extends Quadrangle {
    constructor(a, b) {
        super(a, b);
    }
}

// 2
class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        let found = false;
        for (let i = 0; i < this.items.length; i++) {
         if (this.items[i] === item) {
            found = true;
            return;
         }            
        }
        if (!found) {
            this.items.push(item)
        }
    }
    removeItem(item) {
        this.items = this.items.filter(element => element !== item)
    }
}
const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);
const items = storage.getItems();
console.table(items);

storage.addItem('Дроїд');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items); 


