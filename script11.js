// function add(a, b) {
//     return a + b;
// }

// let add = (a, b) => a + b;
// console.log(add(2, 5));


// const array = (...args) => {
//     let total = 0;
//     for (const element of args) {
//         total += element;
//     }
//     return total;
// }
// console.log(array(1, 2, 3));



// 1
const lengthArr = (...args) => {
    let isLength = [];
    for (const element of args) {
        isLength.push(element);
    }
    return isLength.length;
}
console.log(lengthArr(2, `Hi`, 7,`world`, 9));
// 2
const arr = (...args) => {
    let isNumber = [];
    for (const element of args) {
        if (!isNaN(element)) {
            isNumber.push(element);
        }
    }
    return isNumber;
}

console.log(arr(2, `Hi`, 7,`world`, 9));
// 3
const filter = function (arr, test) {
    let testedArray = [];
    for (const element of arr) {
        let passed = test(element);
        if (passed) {
            testedArray.push(element);
            
        }
    }
    return testedArray;
}
const words = [`Hi`, `World`, `ggghgjgjgjgjjgg`];
let newArr = filter(words, word => word.length > 4);
console.log(newArr);

