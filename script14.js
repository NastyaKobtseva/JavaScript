// let num = [5, 8, 25];
// let numMax = Math.max(...num);
// console.log(numMax);


// // імперативний код 
// function max(arr) {
//     let numMax = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > numMax) {
//             numMax = arr[i];            
//         }
        
//     }
//     return numMax;
// }
// console.log(max([5, 8, 25]));






// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

// num.forEach(element => console.log(element));

// let total = 0;
// num.forEach(element => total += element)
// console.log(total);


// let doubleNum = num.map(element => element * 2);
// console.log(doubleNum);



// const users = [
//     { name: 'Mango', isActive: true },
//     { name: 'Poly', isActive: false },
//     { name: 'Ajax', isActive: true },
// ];
// let nameUsers = users.map(element => element.name);
// console.log(nameUsers);


// Напишіть функцію, яка отримує масив рядків і  
// повертає новий масив, в якому кожен з рядків 
// складається  з першої та останньої букви відповідної 
// строки вхідного масиву.
// const array2 = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'kiwi'];
// let wordArr = array2.map(element => element[0] + element[element.length - 1]);
// console.log(wordArr);


// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// let pointPlayers = players.map(element => element.points * 1.1);
// console.log(pointPlayers);


// let onlinePlayers = players.filter(element => element.online);
// console.log(onlinePlayers);




// let num = [5, 8, 25, 60, 4];
// console.log(num.find(element => element > 8));
// console.log(num.filter(element => element > 8));



// const users = [
//     { id: '000', name: 'Mango', isActive: true },
//     { id: '001', name: 'Poly', isActive: false },
//     { id: '002', name: 'Ajax', isActive: true },
//     { id: '003', name: 'Chelsey', isActive: false },
// ];
// console.log(users.find(element => element.id = `002`));


// const getById = (arr, id) => arr.find(element => element.id === id);
// console.log(getById(users, `003`));


// const isBig = element => element > 10;
// console.log([11, 20, 30, 40].every(isBig));


// console.log([5, 20, 4, 9].some(isBig));



// const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
// const array2 = [5, 12, 3, 14, 4, 5, 6, 6, 7];

// let arr = array1.concat(array2);
// console.log(arr.filter((item, index, arr) => arr.indexOf(item) === index));


// const people = [
//     { name: 'John', age: 32, occupation: 'programmer' },
//     { name: 'Jane', age: 26, occupation: 'teacher' },
//     { name: 'Mike', age: 42, occupation: 'engineer' },
//     { name: 'Emily', age: 17, occupation: 'designer' }
// ];
// let agePeople = people.filter(element => element.age > 18);
// console.log(agePeople);



// const people = [
//     { name: 'John',  surname: `Doe`,  age: 32, occupation: 'programmer' },
//     { name: 'Jane', surname: `Lee`,  age: 26, occupation: 'teacher' },
//     { name: 'Mike', surname: `Watson`, age: 42, occupation: 'engineer' },
//     { name: 'Emily', surname: `Brad`, age: 29, occupation: 'designer' }
// ]
// let fullNameId = [];
// let fullName = people.map((element, index) => ({id: index + 1, fullName: `${element.name} ${element.surname}`}));
// console.log(fullName);



// const users = [
//     {
//       id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       skills: ['ipsum', 'lorem'],
//       gender: 'male',
//       age: 37,
//     },
//     {
//       id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//       gender: 'female',
//       age: 34,
//     },
//     {
//       id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//       gender: 'male',
//       age: 24,
//     },
//     {
//       id: '249b6175-5c30-44c6-b154-f120923736f5',
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       skills: ['adipisicing', 'irure', 'velit'],
//       gender: 'female',
//       age: 21,
//     },
//     {
//       id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       skills: ['ex', 'culpa', 'nostrud'],
//       gender: 'male',
//       age: 27,
//     },
//     {
//       id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       skills: ['non', 'amet', 'ipsum'],
//       gender: 'male',
//       age: 38,
//     },
//     {
//       id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       skills: ['lorem', 'veniam', 'culpa'],
//       gender: 'female',
//       age: 39,
//     },
// ];



// let eyeColor = users.map(element => element.eyeColor);
// console.log(eyeColor);

// let nameUsers = users.map(element => element.name);
// console.log(nameUsers);

// let active = users.filter(element => !element.isActive).map(element => element.name)
// console.log(active);






// const products = [
//   { name: "Phone", price: 800 },
//   { name: "Laptop", price: 1500 },
//   { name: "Keyboard", price: 200 }
// ];
// let prices = products.find(element => element.price > 1000);
// console.log(prices);

// let num = [8, 9, 20, 10];
// let sum = num.reduce((acc, value, index) => {if (index >= 2){return acc + value}return acc}, 0);
// console.log(sum);

// const nums = [15, 6, 22, 8, 11];
// let maxNums = nums.reduce((acc, value) => {if (value > acc) {return value} else {return acc}}, 0);
// console.log(maxNums);


// const cart = [
//   { product: 'Book', price: 120, qty: 2 },
//   { product: 'Pen', price: 20, qty: 5 },
//   { product: 'Notebook', price: 60, qty: 1 }
// ];
// let priceCart = cart.reduce((acc, value) => acc + value.price * value.qty, 0);
// console.log(priceCart);


// const people = [
//   { name: 'Anna', age: 21 },
//   { name: 'Bohdan', age: 25 },
//   { name: 'Ivan', age: 30 }
// ];
// let allPeople = people.reduce((acc, value) => {acc[value.name] = value.age; return acc}, {});
// console.log(allPeople);

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// let repeatFruits = fruits.reduce((acc, value) => {if (acc[value]){acc[value] += 1} else{acc[value] = 1} return acc}, {});
// console.log(repeatFruits);


// homework 
// 1
const numbers = [2, 4, 6, 8, 10];
let sum = numbers.reduce((acc, value) => acc + value, 0);
console.log(sum);

// 2
const users = [
    { id: 1, name: 'Anna' },
    { id: 2, name: 'Oleh' },
    { id: 3, name: 'Iryna' }
  
];

let newObj = users.reduce((acc, value) => {acc[value.id] = value.name; return acc}, {});
console.log(newObj);
