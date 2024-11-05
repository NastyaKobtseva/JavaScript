// 1
let result = 5 + 5 + '5';
console.log(`1) ${result}`);

// 2
let email = 'nkobtseva22@gmail.com';
console.log(`2) `, email.includes(`@`));

// 3
const wordMy = 'My ';
const wordName = 'name ';
const wordIs = 'is ';
let fullName = wordMy + wordName + wordIs + 'Viktor';
console.log(`3) ${fullName}`);

// 4
let userName = prompt("Введіть своє ім'я:");
let payment = prompt('На яку суму Ви купили покупки?');
if (payment <= 20) {
    alert('Сума покупки занадто маленька')
} else {
    alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`)
}