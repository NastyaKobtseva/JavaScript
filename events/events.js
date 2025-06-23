// let addBtn = document.querySelector(`.add`);
// let btn = document.querySelector(`.btn`);
// btn.addEventListener(`click`, function name() {
// });

// addBtn.addEventListener(`click`, function name() {
//     alert(`add`);
//     btn.addEventListener(`click`, onclick);
// })

// let btnRemove = document.querySelector(`.btn-remove`);
// btnRemove.addEventListener(`click`, function name() {
//     alert(`remove`);
//     btn.removeEventListener(`click`, onclick);
// })

// function onclick() {
//     alert(`world`);
// }

// let bgColor = document.querySelector(`.bg-color`);
// bgColor.style.backgroundColor = `blue`;
// bgColor.style.color = `white`;

// bgColor.addEventListener(`click`, function color() {
//     bgColor.style.backgroundColor = `red`;
// })


// let btn = document.querySelector(`.btn`);
// const click = event => {
//     console.log(event);

//     console.log(event.type);
//     console.log(event.target);

//     console.log(event.currentTarget); // console.log(this); 
    
    
// }

// btn.addEventListener(`click`, click);

// let form = document.querySelector(`.form`);
// form.addEventListener(`submit`, function formFn(event) {
//     event.preventDefault()
// })

// let input = form.querySelector(`.form__input`);
// let btnFocus = form.querySelector(`.form__btn`); 
// let btnRemoveFocus = form.querySelector(`.remove-focus`);

// btnFocus.addEventListener(`click`, function focus(params) {
//     input.focus();
// })
// btnRemoveFocus.addEventListener(`click`, function focus(params) {
//     input.blur();
// })

// let span = form.querySelector(`.form__span`);
// input.addEventListener(`input`, function name(params) {
//     span.textContent = input.value;
// })



// let addStyleText = document.querySelector(`.add-style`);
// let addStyleBtn = document.querySelector(`.add-style-btn`);

// addStyleBtn.addEventListener(`click`, function styles(params) {
//     addStyleText.classList.add(`add-style-text`);
// })


// homework start
// 1
// let btnHidden = document.querySelector(`.hidden-btn`);
// let textHidden = document.querySelector(`.hidden-text`);
// btnHidden.textContent = `Показати текст`;
// btnHidden.addEventListener(`click`, function notHidden() {
//     textHidden.style.display = `block`;
// }) 

// 2
// function greetUser() {
//     let userName = prompt("Введіть ім'я:");
//     if (userName !== null) {
//         alert("Привіт " + userName + "!");
//     } else {
//         alert("Бувай!");
//     }
// }
// window.greetUser = greetUser;

// 3
// let title = document.querySelector(`.title`);
// let increaseText = document.querySelector(`.increase-text`);
// let decreaseText = document.querySelector(`.decrease-text`);


// let currentFontSize = 16;
// increaseText.addEventListener(`click`, function increase() {
//     currentFontSize += 2;
//     title.style.fontSize = currentFontSize + `px`;
// })



// 4

// document.getElementById(`userForm`).addEventListener(`submit`, function (event) {
//     event.preventDefault();
//     const firstName = document.getElementById("firstName").value;
//     const lastName = document.getElementById("lastName").value;
//     const email = document.getElementById("email").value;
//     const phone = document.getElementById("phone").value;
//     let message =  
//     "Ім'я: " + firstName + "\n" +
//     "Прізвище: " + lastName + "\n" +
//     "Email: " + email + "\n" +
//     "Телефон: " + phone;

//     alert(message)

// })
// homework end


// document.addEventListener(`keydown`, function mouse(event) {
//     console.log(event.key);
//     console.log(event.code);
// })


// let div = document.querySelector(`.input-div`);
// let input = document.querySelector(`.input`);
// input.addEventListener(`keydown`, function mouse(event) {
//     if (event.key === `Enter`) {
//         div.textContent = `Натиснуто Enter`
//     } else {
//         div.textContent = `${event.key} and ${event.code}`;
//     }
// })


// let hover = document.querySelector(`.div-hover`);
// hover.addEventListener(`mouseover`, function mouseover() {
//     hover.style.backgroundColor = `red`;
//     hover.textContent = `Колір змінено`;
// })
// hover.addEventListener(`mouseout`, function mouseout(params) {
//     hover.style.backgroundColor = `blue`;
//     hover.textContent = ``;
// })



// homework 
// 1
// let btn = document.querySelector(`.js-clear`);
// let text = document.querySelector(`.js-output`);
// text.addEventListener(`keydown`, function printing(event) {
    
// })
// btn.addEventListener(`click`, function printingText(params) {
//     text.value = ``;
// })


// 2
// let divBox = document.getElementById(`box`);
// document.addEventListener(`keydown`, function changeBackground(event) {
//     if (event.key === `y`) {
//         divBox.style.backgroundColor = `yellow`;
//     }
//     if (event.key === `g`) {
//         divBox.style.backgroundColor = `green`;
//     }
// })

// Делегування подій
// let box1 = document.querySelector(`.box`);
// let box2 = document.querySelector(`.box2`);
// let box3 = document.querySelector(`.box3`);
// box1.addEventListener(`click`, function box(event) {
//     alert(`Батько`);
//     console.log(event.target);
//     console.log(event.currentTarget);
    
// })

// box2.addEventListener(`click`, function box(event) {
//     alert(`Дитина`);
//     event.stopPropagation();
// })
// box3.addEventListener(`click`, function box(params) {
//     alert(`Нащадок`);
// })

// палітра кольорів
let colorDiv = document.querySelector(`.color-div`);
colorDiv.addEventListener(`click`, color);
let colorSubtitle = document.querySelector(`.color-subtitle`);
function color(event) {
    if (event.target.nodeName !== `BUTTON`) {
        return;
    }
    let selectedColor = event.target.dataset.color;
    colorSubtitle.textContent = `${selectedColor}`;
}
createItems();
function createItems() {
    const items = [];
    Array.from({length: 15}).forEach(() => {
        let btn = document.createElement(`button`);
        const color = getRandomColor();
        btn.style.width = `25px`;
        btn.style.height = `25px`;
        btn.dataset.color = color;
        btn.style.backgroundColor = color;
        items.push(btn);
    })
    colorDiv.append(...items);
}
function getRandomColor() {
    let random = Math.floor(Math.random() * 16777215).toString(16);    
    return `#${random.padStart(6, '0')}`;
}

