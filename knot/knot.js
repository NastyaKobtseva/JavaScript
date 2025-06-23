// let head = document.createElement(`h1`);
// console.log(head);

// head.textContent = `hello`;
// console.log(head);

// let div = document.querySelector(`div`);
// div.append(head);

// div.prepend(head);

// div.before(head);

// div.remove(`p`);



// let firstElement = document.createElement(`h1`);
// firstElement.textContent = `Привіт, це перший мій створений елемент!`;

// firstElement.classList.add(`title`);

// let body = document.querySelector(`body`);
// body.prepend(firstElement);


// let img = document.createElement(`img`);
// img.src = `../dom/image/pexels-brettjordan-2742263.jpg`;
// img.alt = `photo`;

// let btn = document.createElement(`button`);
// btn.textContent = `click on`;
// btn.type = `button`;

// let body = document.querySelector(`body`);
// body.prepend(img, btn)



// let list = document.createElement(`li`);
// list.classList.add(`site-nav__item`);

// let link = document.createElement(`a`);
// link.classList.add(`site-nav__link`);
// link.textContent = `головне`;
// link.href = `#`;

// list.appendChild(link);

// let ul = document.querySelector(`ul`);
// ul.appendChild(list)



// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'grey', color: '#607D8B' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
// ];

// let div = document.querySelector(`div`);
// colorPickerOptions.forEach(element => {
//     const btn = document.createElement(`button`);
//     btn.classList.add(`btn__color`);
//     btn.textContent = element.label;
//     btn.style.backgroundColor = element.color;
//     div.appendChild(btn)
// })


// homework
// 1
// const ingredients = [
//   'Картопля',
//   'Гриби',
//   'Часник',
//   'Помідори',
//   'Зелень',
//   'Приправи',
// ];

// let ul = document.querySelector(`ul`);
// ingredients.forEach(element => {
//   let list = document.createElement(`li`);
//   list.textContent = element;
//   ul.appendChild(list);
// });

// // 2
// let categories = document.querySelectorAll(`#categories .item`);
// console.log(`У списку ${categories.length} категорії.`);

// categories.forEach(element => {
//   let title = element.querySelector(`h2`);
//   let ulElement = element.querySelector(`ul`);  
//   console.log(`Категорія: ${title.textContent}`);
//   console.log(`Кількість елементів: ${ulElement.querySelectorAll(`li`).length}`);
  
// });





// innerHTML
// function change() {
//   document.querySelector('.title').innerHTML = `click on`;
// }
// window.change = change;


// let input = document.querySelector(`.input`);
// let btnAdd = document.querySelector(`.input-info`);
// let ulAdd = document.querySelector(`.add-list`);

// btnAdd.addEventListener(`click`, function () {
//   let item = input.value;
//   ulAdd.innerHTML += `<li>${item}</li>`;
//   input.value = ``;
// });


// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;

//     this.createdAt = new Date();
//   }
//   getInfo() {
//     console.log(`Мене звати ${this.name}. Мені ${this.age}`);
//   }
// }
// let nameUser = document.querySelector(`.name`);
// let ageUser = document.querySelector(`.age`);
// let addBtn = document.querySelector(`.add`);
// let user = document.querySelector(`.user`);

// function RenderUsers() {
//   addBtn.innerHTML
// }








// homework 2
// createElement
let article = document.createElement(`article`);
article.classList.add(`product`);

let productName = document.createElement(`h2`);
productName.classList.add(`product__name`);
productName.textContent = `Назва`;

let descr = document.createElement(`p`);
descr.classList.add(`product__descr`);
descr.textContent = `Опис`

let pridct = document.createElement(`p`);
pridct.classList.add(`product__pridct`);
pridct.textContent = `Ціна: 1111 кредитів`;

article.appendChild(productName);
article.appendChild(descr);
article.appendChild(pridct)

let jsProducts = document.querySelector(`.js-products-inner`);
jsProducts.appendChild(article);

// innerHTML 
let jsProductsInner = document.querySelector(`.js-products`);
jsProductsInner.innerHTML = `
<article class="product">
      <h2 class="product__name">Назва</h2>
      <p class="product__descr">Опис</p>
      <p  class="product__pridct">Ціна: 1111 кредитів</p>
</article>`;
