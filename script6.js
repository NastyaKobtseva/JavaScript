// homework 
// 1
let counter = 1;
while (counter <= 10) {
    console.log(`1) counter: `, counter);
    counter += 1;
}

// 2 але для чого треба писати ==0, щоб виводило парні чила?
for (let index = 0; index <= 20; index++) {
    if (index % 2 == 0) {
        console.log('2) ', index);
    }
}

// 3
for (let index = 0; index <= 10; index++) {
    console.log(`3) 7 * ${index} = `, 7 * index);
}

// 4 
let arrayOfNumbers = [1, 2, 3, 4, 5];
let index = 0;
while (index < arrayOfNumbers.length) {
    console.log(arrayOfNumbers[index]);
    index += 1;
}

// 5 
let arrayOfNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < arrayOfNumbers2.length; index++) {
    if (arrayOfNumbers2[index] == 7) {
        break;
    } else {
        console.log(`5) ${arrayOfNumbers2[index]}`);
    }
    
}
    
// 6 
let n = 10;
let num = 1;
while (n >= num) {
    if (num >= n) {
        break;
    }
    console.log(`6) ${num}`);
    num += 1;
}

// 7 
let counterTwo = 1;
while (counterTwo <= 20) {
    counterTwo += 1;
    if (counterTwo % 3 == 0) {
        continue;
    }
    console.log(`7) counter: `, counterTwo);
    
}



























// let counter = 1;
// while (counter < 10) {
//     console.log(counter);
    
//     counter +=1;
// }
// let maxNum = 10;
// for (let i = 0; i < maxNum; i++) {
//     console.log(i);
// }

// let number = 0;
// for (let i = 1; i < number; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
        
//     }
// }

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }


// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
    
// }