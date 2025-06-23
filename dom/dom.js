// const btn = document.querySelector(`.btn`);
// btn.style.backgroundColor = `red`;
// console.log(btn.style);


// const list = document.querySelector(`.site-nav`);
// list.style.backgroundColor = `yellow`;

// const linkOne = document.querySelector(`a`);
// linkOne.classList.add(`site-nav__link`);

// const linkPortfolio = document.querySelector(`a[href="https://"]`);
// linkPortfolio.style.fontSize = `27px`;




// const links = document.querySelectorAll(`ul a`);
// links.forEach(element => {
//     let linkHttps = element.getAttribute(`href`);
//     if (linkHttps && linkHttps.startsWith(`http://`)) {
//         element.style.color = `orange`;
//     } 
// });

// if (links.length > 0) {
//     links[0].classList.add(`first__link`);
//     links[links.length - 1].classList.add(`last__link`);
// }
// const first = document.querySelector(`.first__link`);
// first.style.fontSize = `25px`;

// const last = document.querySelector(`.last__link`);
// last.style.fontSize = `25px`;




// homework
// 1
document.getElementById(`btn-input`).onclick = function() {
    let btnContent = document.getElementById(`btn-input`);
    let valueInput = document.getElementById(`input`).value;
    if (valueInput === "") {
        alert(`заповність поле для того, щоб змінити текст кнопки`)
    } else {
        btnContent.textContent = valueInput;
    }
}

// 2
const pet = document.querySelector(`.pet-photo`);
pet.src = `./image/pexels-brettjordan-2742263.jpg`;



