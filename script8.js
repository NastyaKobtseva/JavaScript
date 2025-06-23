// const message = [`Hello`, `world!`];
// // console.log(message.split(``));
// console.log(message.join(`-`));

// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, `hello`);
// console.log(arr);

// const arr2 = [`hello`, `world`];
// let arr3 = arr.concat(arr2);
// console.log(arr3);

// arr.push(`hello`);
// arr.unshift(`nice`);
// console.log(arr);
// console.log(arr.slice(1, 4));

// let arrDelete = arr.splice(0, 3);
// console.log(arrDelete);
// console.log(arr);


// homework 
// 1
// let friends = [`Mango`, `Poly`, `Kiwi`, `Ajax`];
// let string = ``;

// join 
// console.log(`1) join: ${friends.join(`, `)}`);

// for 
// for (let i = 0; i < friends.length; i++) {
//     string += friends[i];
//     if (i < friends.length - 1) {
//         string += `, `;
//     }
// }
// console.log(string);




// 2
// const cards = [
//     `Карточка-1`, 
//     `Карточка-2`, 
//     `Карточка-3`, 
//     `Карточка-4`, 
//     `Карточка-5`, 
// ];

// let cardsToRemove = cards.splice(2, 1);
// console.log(`2) Видалення:`, cards);

// let cardToInsert = cards.splice(4, 0, `Карточка-6`);
// console.log(`2) Додавання:`, cards);

// let cardToUpdate = cards.splice(2, 1, `Карточка-4`);
// console.log(`2) заміна:`, cards);



// 3
// Потрібно:

// -Порахувати середню оцінку кожного студента
// -Знайти найвищу оцінку серед усіх оцінок
// -Вивести ім'я студента, який має найвищий середній бал
// let grades = [
//     ["Іван", 8, 9, 7, 10],    // [ім'я, математика, фізика, хімія, історія]
//     ["Марія", 10, 10, 9, 9],
//     ["Петро", 7, 6, 8, 8],
// ];
// let gradesStudent = [];

// for (let i = 0; i < grades.length; i++) {
//     let total = 0;
//     let names = grades[i][0];
//     let marks = grades[i].slice(1);    

//     for (let j = 0; j < marks.length; j++) {
//         total += marks[j];         
//     }

//     let average = total / marks.length;
//     gradesStudent.push(average);
//     console.log(`${i + 1}. ${grades[i][0]} має середній бал: ${average}`);
// }

// let maxRating = gradesStudent[0];
// for (let i = 0; i < gradesStudent.length; i++) {
//     if (gradesStudent[i] > maxRating) {
//         maxRating = gradesStudent[i];
//         console.log(grades[i][0]);
//     }
// }
// console.log(maxRating);





// Завдання 1:
// Виведіть назви міст та середню температуру для кожного з них за всі пори року.

// Завдання 2:
// Знайдіть місто з найвищою середньою температурою та виведіть його назву і цю температуру.

// Завдання 3:
// Виведіть назви міст, у яких температура восени нижча за 10 градусів.
const temperatures = [
    ["Київ", [15, 25, 10]], // [Весна, Літо, Осінь]
    ["Львів", [14, 22, 8]],
    ["Одеса", [17, 28, 12]]
];
let averageTemperatures = [];

let springTemperatures = [];
let summerTemperatures = [];
let autumnTemperatures = [];

for (let i = 0; i < temperatures.length; i++) {
    springTemperatures.push(temperatures[i][1][0]);
    summerTemperatures.push(temperatures[i][1][1]);  
    autumnTemperatures.push(temperatures[i][1][2]);
    


    let total = 0;
    let cityName = temperatures[i][0];
    let temperatureOfTheSeason = temperatures[i][1].slice(0);    

    for (let j = 0; j < temperatureOfTheSeason.length; j++) {
        total += temperatureOfTheSeason[j];     
    }
    
    let average = total / temperatureOfTheSeason.length;
    averageTemperatures.push(average);
    console.log(`${i + 1}. Середня температура ${temperatures[i][0]} = ${average}`);
}

let maxTemperatures = averageTemperatures[0];
for (let i = 0; i < averageTemperatures.length; i++) {
    if (averageTemperatures[i] > maxTemperatures) {
        maxTemperatures = averageTemperatures[i];
        console.log(temperatures[i][0]);
        
    }
}
console.log(maxTemperatures);

for (let i = 0; i < autumnTemperatures.length; i++) {
    let coldAutumnCities = [];
    if (autumnTemperatures[i] < 10) {
        coldAutumnCities.push(autumnTemperatures[i]);
        console.log(`Назви міст, у яких температура восени нижча за 10 градусів: ${temperatures[i][0]}. Температура становить ${coldAutumnCities} градусів.`);
    }
}


















// 1
// const fruits = ["яблуко", "банан", "апельсин", "ківі"];
// let string = ``;
// for (let i = 0; i < fruits.length; i++) {
//     string += fruits[i];
//     if (i < fruits.length - 1) {
//         string += `, `;
//     }    
// }
// console.log(string);

// // 2
// const results = [
//     ["Андрій", 12.4, 12.1, 12.3],  
//     ["Олена", 11.9, 12.2, 11.8],
//     ["Максим", 13.1, 12.8, 13.0],
// ];

// let resultsStudents = [];
// for (let i = 0; i < results.length; i++) {
//     let total = 0;
//     let students = results[i][0];
//     let results2 = results[i].slice(1);
//     for (let j = 0; j < results2.length; j++) {
//         total += results2[j];
//     }    
//     let average = total / results2.length;
//     resultsStudents.push(average);
//     console.log(`середній результат ${results[i][0]} = ${average}`);
    
    
// }  

// let maxResult = resultsStudents[0];
// for (let i = 0; i < resultsStudents.length; i++) {
//     if (resultsStudents[i] < maxResult) {
//         maxResult = resultsStudents[i];
//         console.log(results[i][0]);
//     }    
// }

// console.log(maxResult);


// 3
// const numbers = [1, 4, 5, 8, 9, 12, 15];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(`Парні числа: ${numbers[i]}`);
//     }
// }
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         total += numbers[i];
//     }
// }
// console.log(total);

// 4

// const numbers = [3, -5, 2, -8, 0, 6, -1];

// for (let i = 0; i < numbers.length; i++) { 
//     let zeroInsteadOfNegativeNumbers = 0;
//     if (numbers[i] < 0 == 0) {
//         zeroInsteadOfNegativeNumbers += numbers[i];
//     }
//     console.log(zeroInsteadOfNegativeNumbers);
// }

// 5
// const numbers = [5, 12, 7, 20, 3, 8];
// let numbersNew = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 10) {
//         numbersNew.push(numbers[i])
//     }    
// }
// console.log(numbersNew);

