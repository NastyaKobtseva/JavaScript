// let num = 5 + 10;
// console.log(num);

// let x = 5;
// let y = 10;
// console.log("x > y", x > y);

// let stringNum = '5.46px'
// console.log(Number.parseFloat(stringNum));

// let num = Number("ghgk")
// console.log(Number.isNaN(num));

// console.log(Math.floor(1.7));

// console.log(Math.ceil(1.3));

// console.log(Math.round(1.7));
// console.log(Math.pow(2, 4));

// console.log(Math.random() * (10 - 1) + 1);

// 1 
let celsius = 25;
let fahrenheit = (25 * 9/5) + 32;
console.log(`1) Якщо °C = 25 градусів, то у °F буде = ${fahrenheit}`);

// 2
let daysInMonth = 30;
let hoursInMonth = 30 * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(`2) Годин у місяці: ${hoursInMonth}`);
console.log(`Хвилин у місяці: ${minutesInMonth}`);

// 3
let health = 100;
let energy = 80;
health -= 40;
energy -= 50;
console.log(`3) Після битви здоров'я стало: ${health}, а енергії: ${energy}`);

// 4 
let totalPrice = 23000;
let discount = totalPrice * 0.1;
let discountedPrice = totalPrice - discount
console.log(`4) Покупка зі знижкою буде: ${discountedPrice}`);

// 5
const floatNumber = 12.78;
let floatNumberMath = Math.floor(floatNumber);
console.log(`5) Число 12.78 з округленням до найменшого числа буде: ${floatNumberMath}`);

// 6
const floatString = "45.67";
console.log(`6)`, Number.parseFloat(floatString));

// 7
const intString = "123";
console.log(`7) `, Number.parseInt(intString));

// 8 
let number = 4;
let sqrtNumber = Math.sqrt(number);
console.log(`8) ${sqrtNumber}`);

// 9
const integer = 42;
const stringNumber = "256";
let convertedInt = Number.parseInt(stringNumber);
let convertedString = integer.toString();
console.log(`9) 1. Перетворення рядка у ціле число: ${convertedInt}; 2. Перетворення цілочисельного значення у рядок: ${convertedString}`);