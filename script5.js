// 1
// let chooseInput = prompt('Оберіть, що Ви бажаєте попити (кава, чай, сік):').toLocaleLowerCase();
// switch (chooseInput) {
//     case 'кава':
//         alert(`Ви обрали каву`)
//         break;
//     case 'чай':
//         alert(`Ви обрали чай`);
//         break;
//     case 'сік': 
//         alert(`Ви обрали сік`);
//         break;
//     default:
//         alert(`Ви нічого не обрали`)
//         break;
// }

// 2
// let daysOfTheWeek = prompt(`Введіть день тижня:`).toLocaleLowerCase();
// switch (daysOfTheWeek) {
//     case 'понеділок':
//         alert(`Цей день є днем тижня`);
//         break;
//     case 'вівторок':
//         alert(`Цей день є днем тижня`);
//         break;
//     case 'середа':
//         alert(`Цей день є днем тижня`);
//         break;
//     case 'четвер':
//         alert(`Цей день є днем тижня`);
//         break;
//     case "п'ятниця":
//         alert(`Цей день є днем тижня`);
//         break;
//     case 'субота':
//         alert(`Цей день є днем тижня`);
//         break;
//     case 'неділя':
//         alert(`Цей день є днем тижня`);
//         break;

//     default:
//         alert(`Цей день не є днем тижня. перевірте, будь ласка, чи правильно Ви ввели день`);
//         break;
// }

// 3 
// let monthNumber = prompt(`Введіть номер місяця:`);
// switch (monthNumber) {
//     case '1':
//         alert(`Пора року зима`);
//         break;
//     case '2':
//         alert(`Пора року зима`);
//         break;
//     case '3':
//         alert(`Пора року весна`);
//         break;
//     case '4':
//         alert(`Пора року весна`);
//         break;
//     case '5':
//         alert(`Пора року весна`);
//         break;
//     case '6':
//         alert(`Пора року літо`);
//         break;
//     case '7':
//         alert(`Пора року літо`);
//         break;
//     case '8':
//         alert(`Пора року літо`);
//         break;
//     case '9':
//         alert(`Пора року осінь`);
//         break;
//     case '10':
//         alert(`Пора року осінь`);
//         break;
//     case '11':
//         alert(`Пора року осінь`);
//         break;
//     case '12':
//         alert(`Пора року зима`);
//         break;

//     default:
//         alert(`Цей номер не є номером місяця. перевірте, будь ласка, чи правильно Ви ввели номер місяця`);
//         break;
// }

// 4
// let monthNumber2 = prompt(`Введіть номер місяця:`);
// switch (monthNumber2) {
//     case '1':
//         alert(`Кількість днів: 31`);
//         break;
//     case '2':
//         alert(`Кількість днів: 28`);
//         break;
//     case '3':
//         alert(`Кількість днів: 31`);
//         break;
//     case '4':
//         alert(`Кількість днів: 30`);
//         break;
//     case '5':
//         alert(`Кількість днів: 31`);
//         break;
//     case '6':
//         alert(`Кількість днів: 30`);
//         break;
//     case '7':
//         alert(`Кількість днів: 31`);
//         break;
//     case '8':
//         alert(`Кількість днів: 31`);
//         break;
//     case '9':
//         alert(`Кількість днів: 30`);
//         break;
//     case '10':
//         alert(`Кількість днів: 31`);
//         break;
//     case '11':
//         alert(`Кількість днів: 30`);
//         break;
//     case '12':
//         alert(`Кількість днів: 31`);
//         break;

//     default:
//         alert(`Цей номер не є номером місяця. перевірте, будь ласка, чи правильно Ви ввели номер місяця`);
//         break;
// }

// 5
// let color = prompt(`Введіть колір (червоний, жовтий, зелений): `).toLocaleLowerCase();
// switch (color) {
//     case 'червоний':
//         alert(`стоп`);
//         break;
//     case 'жовтий':
//         alert(`чекати`);
//         break;
//     case 'зелений':
//         alert(`йти`);
//         break;

//     default:
//         alert(`На даний момент цього кольору немає у нашій системі. Будь ласка, введіть інший колір`)
//         break;
// }

// 6

// let number1 = 10;
// let number2 = 2;
// let numberAndSelect = prompt(`У Вас є два числа 10 і 2, яку операцію ( "+", "-", "*", "/") Ви хочете зробити над цими числами? Та також ділити на 0 не можна:`)
// switch (numberAndSelect) {
//     case '+':
//         alert(number1 + number2)
//         break;
//     case '-':
//         alert(number1 - number2)
//         break;
//     case '*':
//         alert(number1 * number2)
//         break;
//     case '/':
//         alert(number1 / number2)
//         break;

//     default:
//         alert(`Такого числа немає`)
//         break;
// }

// let num1 = parseFloat(prompt(`Введіть 1 число: `));
// let num2 = parseFloat(prompt(`Введіть 2 число: `));
// let operator = prompt(`Введіть оператор(+, -, /, *):`);
// switch(operator) {
//     case '+' :
//         console.log(num1 + num2);
//         break;
//     case '-' :
//         console.log(num1 - num2);
//         break;
//     case '/' :
//         if (num2 === 0) {
//             console.log(`Ділення на нуль неможливо`);
//             return;
//         }
//         console.log(num1 / num2);
//         break;
//     case '*' :
//         console.log(num1 * num2);
//         break;
//     default : 
//         console.log(`Невідомий оператор`);
//         break;
// }


// homework 
// 1
// let monthNumber = prompt(`Введіть номер місяця:`);
// switch (monthNumber) {
//     case '1':
//         alert(`Пора року зима`);
//         break;
//     case '2':
//         alert(`Пора року зима`);
//         break;
//     case '3':
//         alert(`Пора року весна`);
//         break;
//     case '4':
//         alert(`Пора року весна`);
//         break;
//     case '5':
//         alert(`Пора року весна`);
//         break;
//     case '6':
//         alert(`Пора року літо`);
//         break;
//     case '7':
//         alert(`Пора року літо`);
//         break;
//     case '8':
//         alert(`Пора року літо`);
//         break;
//     case '9':
//         alert(`Пора року осінь`);
//         break;
//     case '10':
//         alert(`Пора року осінь`);
//         break;
//     case '11':
//         alert(`Пора року осінь`);
//         break;
//     case '12':
//         alert(`Пора року зима`);
//         break;

//     default:
//         alert(`Цей номер не є номером місяця. перевірте, будь ласка, чи правильно Ви ввели номер місяця`);
//         break;
// }

// 2
function product() {
    let productName = prompt(`Який товар Вам потрібен?`).toLocaleLowerCase();
    if (!isNaN(Number(productName))) {
        alert(`Введіть текст, а не число!`);
        return;
    }
    let priceProduct = prompt(`На яку ціну Ви орієнтуєтеся?`);
    switch (productName) {
        case 'яблука':
            if (priceProduct >= 25) {
                alert(`Це перший сорт яблук він буде коштувати 35 грн/кг`);
            } else {
                alert(`Це другий сорт яблук він буде коштувати 19 грн/кг`);
            }
            break;
        case 'банани':
            if (priceProduct >= 30) {
                alert(`Це перший сорт бананів він буде коштувати 50 грн/кг`);
            } else {
                alert(`Це другий сорт бананів він буде коштувати 25 грн/кг`);
            }
            break;
        case 'картопля':
            if (priceProduct >= 16) {
                alert(`Це перший сорт картоплі він буде коштувати 18 грн/кг`);
            } else {
                alert(`Це другий сорт картоплі він буде коштувати 14 грн/кг`);
            }
            break;
        case 'морква':
            if (priceProduct >= 17) {
                alert(`Це перший сорт моркви він буде коштувати 22 грн/кг`);
            } else {
                alert(`Це другий сорт моркви він буде коштувати 16 грн/кг`);
            }
            break;
        case 'цибуля':
            if (priceProduct >= 20) {
                alert(`Це перший сорт цибулі він буде коштувати 25 грн/кг`);
            } else {
                alert(`Це другий сорт цибулі він буде коштувати 15 грн/кг`);
            }
            break;
        default:
            alert(`Такого товару у системі немає, введіть, будь ласка інше.`)
            break;
    } 
}
product();
