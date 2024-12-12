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
let arraySumIndex0 = arraySum[0];
let arraySumIndex1 = arraySum[1];
let arraySumIndex2 = arraySum[2];
let sum = arraySumIndex0 + arraySumIndex1 + arraySumIndex2;
console.log(`3) ${arraySumIndex0} + ${arraySumIndex1} + ${arraySumIndex2} = ${sum}`);

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




