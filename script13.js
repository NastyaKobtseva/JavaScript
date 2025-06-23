// let obj = {size: 30, color: `white`, width: 6};
// let {size, ...rest} = obj;
// console.log(size, rest);


// let obj1 = {
//     size: 30, 
//     color: `white`,

//     array: [50, 70], 
//     obj2: {color: `white`, size: 90},
// }
// const {size, color, array: [item1, item2], obj2: {color: color1, size: size1}} = obj1;
// console.log(item1, item2);
// console.log(color1, size1);



// let arr = [`white`, 100, 40];
// let [color, size, width] = arr;
// console.log(`Мій ${color} будинок має площу ${size}`);

// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020,
//     features: ['power windows', 'rear camera', 'navigation'],
//     safety: {
//       airbags: true,
//       antilock_brakes: true,
//       stability_control: true
//     }
// }
// let {make, model, year, features:[item1, item2, item3], safety: {airbags, antilock_brakes, stability_control}} = car;
// console.log(make, model, year, item1, item2, item3, airbags, antilock_brakes, stability_control);


// const books = {
//     count: 3,
//     list: [
//       {
//         title: 'The Great Gatsby',
//         author: 'F. Scott Fitzgerald',
//         year: 1925
//       },
//       {
//         title: 'To Kill a Mockingbird',
//         author: 'Harper Lee',
//         year: 1960
//       },
//       {
//         title: '1984',
//         author: 'George Orwell',
//         year: 1949
//       }
//     ]
// }

// let {count, list: [{title: title1, author: author1, year: year1}, {title: title2, author: author2, year: year2}, {title: title3, author: author3, year: year3}]} = books;
// console.log(title1, author1, year1, title2, author2, year2, title3, author3, year3);



// Напишіть функцію, яка отримує масив об'єктів з інформацією 
// про товари (назва, ціна, кількість) та використовує деструктуризацію 
// для обчислення загальної вартості товарів. 


// const items = [
//     { name: 'Футболка', price: 250, quantity: 2 },
//     { name: 'Джинси', price: 800, quantity: 1 },
//     { name: 'Кросівки', price: 1200, quantity: 1 }
// ];

// function getInformation(items) {
//     for (let i = 0; i < items.length; i++) {
//         let total = 0;
//         let {price, quantity} = items[i];
//         total += price * quantity;
//         console.log(total);
        
//     }
// }
// getInformation(items)




// Напишіть функцію, яка отримує об'єкт зі списком користувачів 
// (поле "users"), де кожен користувач є об'єктом з полями 
// "ім'я" та "вік", та використовує деструктуризацію для 
// повернення списку користувачів, які старші за 18 років. 

// const data = {
//     users: [
//       { name: 'John', age: 25 },
//       { name: 'Jane', age: 17 },
//       { name: 'Bob', age: 30 },
//       { name: 'Alice', age: 20 }
//     ]
// };

// function getAge({users}) {
//     let datedUser = [];
//     for (const {name, age} of users) {
//         if (age > 18) {
//             datedUser.push({name, age})
//         }
//     }
//     return datedUser;
// }
// console.log(getAge(data));




const musicLibrary = {
    count: 2,
    artists: [
      {
        name: 'The Beatles',
        albums: [
          {
            title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
            year: 1967,
            tracks: [
              { title: 'With a Little Help from My Friends', duration: '2:44' },
              { title: 'Lucy in the Sky with Diamonds', duration: '3:28' },
              { title: 'A Day in the Life', duration: '5:33' }
            ]
          },
          {
            title: 'Abbey Road',
            year: 1969,
            tracks: [
              { title: 'Come Together', duration: '4:19' },
              { title: 'Something', duration: '3:01' },
              { title: 'Here Comes the Sun', duration: '3:06' }
            ]
          }
        ]
      },
      {
        name: 'Pink Floyd',
        albums: [
          {
            title: 'The Wall',
            year: 1979,
            tracks: [
              { title: 'Another Brick in the Wall, Part 2', duration: '3:59' },
              { title: 'Comfortably Numb', duration: '6:23' },
              { title: 'Hey You', duration: '4:40' }
            ]
          },
          {
            title: 'Dark Side of the Moon',
           year: 1973,
            tracks: [
              { title: 'Speak to Me/Breathe', duration: '3:58' },
              { title: 'Time', duration: '7:06' },
              { title: 'Money', duration: '6:22' }
            ]
          }
        ]
      }        
    ]
}
const {
    count,
    artists: [
      {
        name: name1,
        albums: [
          {
            title: title1,
            year: year1,
            tracks: [
              { title: titleTracks1, duration: durationTitle1 },
              { title: titleTracks2, duration: durationTitle2 },
              { title: titleTracks3, duration: durationTitle3 }
            ]
          },
          {
            title: title2,
            year: year2,
            tracks: [
              { title: title2Tracks1, duration: duration2Title1 },
              { title: title2Tracks2, duration: duration2Title2 },
              { title: title2Tracks3, duration: duration2Title3 }
            ]
          }
        ]
      },
      {
        name: name2,
        albums: [
          {
            title: title3,
            year: year3,
            tracks: [
              { title: title3Tracks1, duration: duration3Title1 },
              { title: title3Tracks2, duration: duration3Title2 },
              { title: title3Tracks3, duration:duration3Title3 }
            ]
          },
          {
            title: title4,
            year: year4,
            tracks: [
              { title: title4Tracks1, duration: duration4Title1 },
              { title: title4Tracks2, duration: duration4Title2 },
              { title: title4Tracks3, duration: duration4Title3}
            ]
          }
        ]
      }        
    ]
} = musicLibrary;

console.log(count, name1, title1, year1, titleTracks1, titleTracks2, titleTracks3, durationTitle1, durationTitle2, durationTitle3);
console.log(title2, year2, title2Tracks1, title2Tracks2, title2Tracks3, duration2Title1, duration2Title2, duration2Title3);
console.log(name2, title3, year3, title3Tracks1, title3Tracks2, title3Tracks3, duration3Title1, duration3Title2, duration3Title3);
console.log(title4, year4, title4Tracks1, title4Tracks2, title4Tracks3, duration4Title1, duration4Title2, duration4Title3);



