// let house = {size: 5, color: `red`, width: 25};
// console.log(house.size);
// console.log(house[`color`]);

// house.size = 10;
// console.log(house.size);

// house.height = 20;
// console.log(house.height);

// console.log(house);

// delete house.size;
// console.log(house);


// let stars = 4;
// let color = `red`;
// let nameHotel = `hotel`;
// let hotel = {stars, color, nameHotel};
// console.log(hotel);



// let object = {};
// 1
// let key = `color`;
// object.key = `red`;
// console.log(object);

// 2
// let key = `color`;
// const getKey = function() {
//     return `age`;
// }
// let object = {[key]: `red`, [getKey()]: 15};
// console.log(object);


// const getBanana = function() {
//     return `origin`;
// }
// let spain = {[getBanana()]: `банани з Іспанії`};
// let africa = {[getBanana()]: `банани з Африки`};
// let america = {[getBanana()]: `банани з Америки`};
// console.log(spain, africa, america);

// let object = {size: 20, background: `white`, greetInES6(){console.log(`hello, world!`);
// }};
// object.greetInES6();


// const getAge = function() {
//     return `age`;
// }
// let object = {[getAge()]: prompt(`Введіть свій вік:`)};
// console.log(object);


// let house = {size: 5, color: `red`, width: 25, perimeter(){console.log(this.size + this.size + this.width + this.width);
// }};
// house.perimeter();


// practice 
// let cart = {
//     items: [],
//     getItems() {return this.items},
//     add(product) {
//         let found = false;
//         for (let i = 0; i < this.items.length; i++) {
//         if (this.items[i].name === product.name) {
//             this.items[i].quantity = this.increaseQuantity(product.name);
//             found = true;
//             return;
//         } 
//     }
//     if (!found) {
//         this.items[this.items.length] = {
//             name: product.name, 
//             price: product.price, 
//             quantity: 1,
//         };
//     }
    
// },
//     remove(productName) {this.items = this.items.filter(element => element.name !== productName)},
//     clear() {this.items = []},
//     countTotalPrice() {let total = 0; for (let i = 0; i < this.items.length; i++) {
//         total += this.items[i].price * this.items[i].quantity;
//     }},
//     increaseQuantity(productName) {
//         for (let i = 0; i < this.items.length; i++) {
//             if (this.items[i].name === productName) {
//                 this.items[i].quantity += 1;
//                 return this.items[i].quantity;
//             }
//         }
//     },
//     decreaseQuantity(productName) {
//         for (let i = 0; i < this.items.length; i++) {
//             if (this.items[i].name === productName) {
//                 this.items[i].quantity -= 1;
//                 if (this.items[i].quantity === 0) {
//                     this.remove(productName);
//                 }
//                 return;
//             }
//         }
//     },
// }

// let apple = {name: `яблуко`, price: 50};
// let banana = {name: `банан`, price: 30};
// cart.add(apple);
// cart.add(banana);
// cart.increaseQuantity(apple.name);

// console.log(cart.getItems());



// 1
// document.getElementById(`depositBtn`, `withdrawBtn`).onclick = function() {
//     let bankAccount = {
//         ownerName: `Anastasiia`, 
//         accountNumber: `6757484375`, 
//         balance: 1000,
//         deposit() {
//             let depositBalance = 200;
//             this.balance += depositBalance;
//             alert("Ваша сума становить: " + this.balance);
//         },
//     }
    
//     bankAccount.deposit();
// }

// document.getElementById(`withdrawBtn`).onclick = function() {
//     let bankAccount = {
//         ownerName: `Anastasiia`, 
//         accountNumber: `6757484375`, 
//         balance: 1000,
//         withdraw(){
//             let withdrawBalance = 200;
//             this.balance -= withdrawBalance;
//             alert("Залишок становить: " + this.balance);
//         }
    
//     };
//     bankAccount.withdraw();
// }

// 2
// let weather = {
//     temperature: prompt(`Яка температура?`), 
//     humidity: 20, 
//     windSpeed: 15,
//     temperatureMessage() {
//         if (this.temperature < 0) {
//             alert(`температура нижче 0 градусів Цельсія`)
//         } else {
//             alert(`температура вище 0 градусів Цельсія`)
//         }
//     }
    
// }
// weather.temperatureMessage()

// 3
// let user = {
//     name: prompt(`Введіть своє ім'я`),
//     email: prompt('Введіть емейл(обов"яково треба використати @)'),
//     password: prompt('Введіть пароль(не менше 6 символів)'),
//     login() {
//         if (this.email.includes(`@`)) {
//             alert(`у email присутнє @`)
//         } else {
//             alert(`у email відсутнє @`)
//         }
//         if (this.password.length > 6) {
//             alert(`пароль введено правильно`)
//         } else {
//             alert(`пароль введено неправильно`)
//         }
        
//     }
// }
// user.login()

// 4
// let movie = {
//     title: prompt('Назва фільму:'),
//     director: prompt(`Директор фільму:`),
//     year: prompt(`Рік фільму:`),
//     rating: Number(prompt(`Рейтинг фільму:`)),
//     ratingMessage() {
//         if (this.rating > 8) {
//             alert(`Рейтинг фільму вище 8:` + true);
            
//         } else {
//             alert(`Рейтинг фільму нижче 8:` + false);
//         }
//     }
// }
// movie.ratingMessage()




// let house = {size: 20, width: 30, color: `white`};
// for (const key in house) {
//     console.log(key);
// }
// console.log(Object.keys(house));
// console.log(Object.values(house));
// console.log(Object.entries(house));

// let keys = Object.keys(house);
// for (const element of keys) {
//     console.log(element);
// }

// let entries = Object.entries(house);
// for (const element of entries) {
//     let key = element[0];
//     let value = element[1];
//     console.log(`${key}: ${value}`);
    
// }



// 1
// const user = {
//     name: "Іван",
//     age: 25,
//     city: "Київ"
// };
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// // 2
// function printObjectInfo(obj) {
    // 1
    // let key = Object.keys(obj);
    // console.log(key.length);
    
    
    
    // for (const key in obj) {
    //     if (Object.hasOwnProperty(key)) {
    //         count += key;
    //     }
         
    // }
    // return count;

    // 2
    // let entries = Object.entries(obj);
    // for (const element of entries) {
    //     let key = element[0];
    //     let value = element[1];
    //     console.log(`${key}: ${value}`);
    // }
// }
// printObjectInfo({size: 20, width: 30, color: `white`});

