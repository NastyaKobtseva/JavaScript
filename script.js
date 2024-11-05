// homework 

// 1
let age = 14;
console.log(`1) I'm ${age} years old`);

// 2
let name = 'Anastasiia';
console.log(`2) My name is ${name}`);

// 3
let isStudent = true;
console.log(`3) Are you a student?: ${isStudent}`);

// 4
let myString = 'Everyone has one`s own path';
console.log(`4) quote: ${myString}`);

// 5
let myNumber = 5;
myNumber += 10;
console.log(`5) result: ${myNumber}`);

// 6
let myNull = null;
console.log(`6) ${myNull}`);

// 7
let yourName = prompt('Enter your name:');
alert(`Nice to meet you ${yourName}!`);

// 8
let actionConfirmation = confirm(`Are you a student?`);
if (actionConfirmation) {
    alert('Thank you for the confirmation!');
} else {
    alert(`Action canceled!`);
}

// 9
let dangerousAction = confirm(`The action is risky; do you want to proceed?`);
if (dangerousAction) {
    alert('Thank you for the confirmation!');
} else {
    alert(`Action canceled!`);
}