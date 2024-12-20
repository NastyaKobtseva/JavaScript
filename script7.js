// 1
let array = [1, 2, 3];
array[1] = 10;
console.log(`1) `, array);

// 2
let arrayString = ['Mango', 'World', 'Shine'];
arrayString[3] = 'Hello';
console.log(`2) `, arrayString);

// 3
let arraySum = [1, 2, 3];
let total = 0;
for (let i = 0; i < arraySum.length; i++) {
    total += arraySum[i];
}
console.log(`3) Сума чисел = ${total}`);

// 4
let arrayOfNumbers = [1, 2, 3, 4, 5];
for (let index = 0; index < arrayOfNumbers.length; index++) {
    console.log(`4) `, arrayOfNumbers[index]);
}

// 5
let arraysString = ['Time', 'is', 'a', 'valuable', 'gift.'];
for (let index = 0; index < arraysString.length; index++) {
    if (arraysString[index].length > 5) {
        console.log(`5) `, arraysString[index]);
    }
}

// 6
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maxArr = Math.max(...arr);
console.log(`6) ${maxArr}`);



// 7
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < arrNum.length; index++) {
    if (arrNum[index] % 2 == 0) {
        console.log(`7) `, arrNum[index]);
        
    }
}




// let arrayString = ['Mango', 'World', 'Shine'];
// for (const element of arrayString) {
//     if (element === 'World') {
//         console.log(element);
//         break;
//     }
// }

// for (let i = 0; i < arrayString.length; i++) {
//     if (arrayString[i] === 'World') {
//         console.log(arrayString[i]);
//         break;
//     }    
// }

// let array = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 4) {
//         break;
//     }
//     console.log(array[i]);
       
// }

// const matrix = [
//     [5, 6, 8],
//     [7, 2, 4],
//     [2, 3, 4],
// ]

// for (let i = 0; i < matrix.length; i++) {
//     let total = 0;
//     for (let j = 0; j < matrix[i].length; j++) {
//         total += matrix[i][j];
//     }  
//     let average = total / matrix[i].length;
//     console.log(`Учень ${i + 1} має середній бал: ${average}`);

// }