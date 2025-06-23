// let temperature = [12, 40, 50];
// let minTemperature = Math.min(...temperature);
// console.log(minTemperature);


// let temperature = [12, 40, 50];
// let copyTemperature = [...temperature.slice(0, 1)];
// console.log(copyTemperature);
// console.log(temperature === copyTemperature);

// console.log(...temperature);
// console.log(temperature);


// let days = [12, 60, 40];
// let united = [...temperature, ...days];
// console.log(united);


// let a = {x: 2, y: 4};
// let b = {x: 9, z: 5};
// let united = Object.assign(a, b);
// console.log(united);



// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
// ];


// function getAllName(friends) {
//     let getName = [];
//     let keys = Object.keys(friends);
//     for (const element of friends) {
//         getName.push(friends[element].name);
//     }
    
//     return getName;
// }
// function getAllName(friends) {
//     let getName = [];
//     for (const element of friends) {
//         if (!element.online) {
//             getName.push(element.name);
//         }
//     }
    
//     return getName;
// }
// console.log(getAllName(friends));






// let getName = Object.keys(friends);
// console.log(getName);




// homework 
let house = [`semi-detached`, `detached`, `block of flats`];
let copyHouse = [...house];
console.log(house, copyHouse);


copyHouse = [...house.splice(1, 1, `villa`)];
console.log(copyHouse);

console.log(house === copyHouse);



