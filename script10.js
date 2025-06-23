// колбек
// 1
// const printMessage = function (message) {
//     console.log(message);
// }
// const higherOrderFunction = function (callback) {
//     let string = `hello, world!`;
//     callback(string);
// }

// higherOrderFunction(printMessage);

// 2
// const printMessage = function (message, callback) {
//     return callback(message);
// }
// const lowerCase = function (message) {
//     return message.toLowerCase();
// }
// const upperCase = function (message) {
//     return message.toUpperCase();
// }
// const trim = function (message) {
//     return message.trim();
// }
// const message = `Hello, world `;
// let result = printMessage(printMessage (message, trim), lowerCase);
// console.log(result);

// 3
const filter = function (arr, test) {
    let testedArray = [];
    for (const element of arr) {
        let passed = test(element);
        if (passed) {
            testedArray.push(element);
        }
    }
    return testedArray;
}
// let freshName = [
//     {name: `банан`, isFresh: true},
//     {name: `яблуко`, isFresh: false}
// ]
// const fruits = filter(freshName, fruit => fruit.isFresh);
// console.log(fruits);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = filter(numbers, num => num % 2 === 0);
console.log(evenNumbers);











// return возврат функции
// 3
// function calcSum(numOne, numTwo, more, less) {
//     let numSum = numOne + numTwo;
    
//     if (numSum > 3) {
//         more();
//     } else {
//         less();
//     }
// }

// function showMoreMessage() {
//     console.log(`Більше ніж 3`);
    
// }
// function shwoLessMessage() {
//     console.log(`Менше ніж 3`);
    
// }
// calcSum(2, 3, showMoreMessage, shwoLessMessage);

// 4
// function getSum(numOne, numTwo) {
//     let numSum = calcSum(numOne, numTwo);
//     console.log(numSum);
    
// }
// function calcSum(numOne, numTwo) {
//     return numOne + numTwo;
// }
// getSum(4, 5);

// 5
// піднесення до степеня
// function calcSum(numOne, numTwo) {
//     let result = 1;
//     for (let i = 0; i < numTwo; i++) {
//         result *= numOne;        
//     }
//     return result;
// }
// console.log(calcSum(2, 3));
// рукурсія
// function calcSum(numOne, numTwo) {
//     if (numTwo == 1) {
//         return numOne;
//     } else {
//         return numOne * calcSum(numOne, numTwo - 1)
//     }
// }
// console.log(calcSum(2, 3));

// стрілочна функція
// фнкціональний вираз 
// let ім'я змінної = function(параметр, ...параметр) {
// return выражение;
// }

// стрілочна функція
// let ім'я змінної = (параметр, ...параметр) => выражение

// let getMessage = (text, name) => text + ', ' + name + `!`;
// console.log(getMessage(`Hi`, `Anastasiia`));

// let getMessage = (text, name) => {
//     let message = text + ', ' + name + `!`;
//     return message;
// }
// console.log(getMessage(`Hi`, `Anastasiia`));












