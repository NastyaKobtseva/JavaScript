// 1 ?
let value1 = 'hgh';
let value2 = 'ghj';
if (value1.length === 0 || value2.length === 0) {
    console.log(`1) Не всі поля заповнені`);
} else {
    console.log(`1) Обидва поля заповнені`);
}
// 2
let num1 = 5;
let num2 = 100;
let result = num1 + num2;
let message;
if (result > 10) {
    message = 'Сума більша за 10'
} else {
    message = "Сума менша або дорівнює 10";
}

console.log(`2) ${message}`);

// 3
let messageJavaScript;
let stringJavaScript = 'JavaScript - цікава мова програмування';
if (stringJavaScript.includes('JavaScript')) {
    messageJavaScript = 'Текст містить слово JavaScript';
} else {
    messageJavaScript = 'Текст не містить слово JavaScript';
}
console.log(`3) ${messageJavaScript}`);

// 4
let messageNumber;
let num = 25;
if (10 < num && num < 20) {
    messageNumber = "Число входить в діапазон від 10 до 20";
} else {
    messageNumber = "Число не входить в діапазон від 10 до 20";
}

console.log(`4) ${messageNumber}`);

// 5
// 1)
// let nameInput = prompt(`Введіть своє ім'я (не менше 3-х символів):`);
// if (nameInput.length < 3) {
//     alert(`Увага! Ім'я містить менше 3-х символів!`);
// } else {
//     alert(`Дякую. Приємно познайомитися, ${nameInput}`);
// }

// let emailInput = prompt(`Введіть свій email (має бути обов'язково "@"):`);
// if (emailInput.includes(`@`)) {
//     alert(`Все заповнено правильно!`);
// } else {
//     alert(`Увага! Емейл не містить символа "@"`);
// }

// let passwordInput = prompt(`Введіть пароль (не менше 6 символів):`);
// if (passwordInput.length < 6) {
//     alert(`Увага! Пароль містить менше 6 символів!`);
// } else {
//     alert(`Все заповнено правильно!`);
// }


// 2) є питання 
// let nameInput = prompt(`Введіть своє ім'я (не менше 3-х символів):`);
// let emailInput = prompt(`Введіть свій email (має бути обов'язково "@"):`);
// let passwordInput = prompt(`Введіть пароль (не менше 6 символів):`);
// if (nameInput.length < 3 && emailInput.includes('@') && passwordInput.length < 6) {
//     alert(`Все заповнено правильно!`)
// } else {
//     alert(`Ви вказали щось не правильно!`)
// }