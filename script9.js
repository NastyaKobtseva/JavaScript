// function max(arr) {
//     let maxNumber = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxNumber) {
//             maxNumber = arr[i];
//         }
//     }
//     return maxNumber;
// }

// console.log(max([3, 5, 6, 9, 15]));

// -Напиши функцію sum, яка приймає два числа як аргументи і повертає їх суму.
// -Напиши функцію isEven, яка приймає число і повертає true, якщо число парне, і false — якщо непарне.
// -Напиши функцію toCelsius, яка перетворює температуру з Фаренгейтів у Цельсії.

// homework 
// 1
// const sum = function (a = 7, b = 2, c = 4) {
//     return a + b + c;
// }

// console.log(sum());

// 2
// function isEven(number) {
//     if (isNaN(number)) {
//         console.log(`Перевірте, будь ласка, чи правильно Ви ввели число!`);
//         return NaN;
//     }
//     if (number % 2 == 0) {
//         console.log(`Число парне: ${true}`);
//         return number;
//     } 
//     if (number % 2 !== 0) {
//         console.log(`Число непарне: ${false}`); 
//         return number;
//     }
//     return number;
// }

// console.log(isEven(Number.parseFloat(prompt(`Введіть число: `))));


// 3
// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }

// console.log(toCelsius(prompt(`Претворення температури з Фаренгейтів у Цельсії. Напиши температуру Фаренгейту:`)));



