// let animation2 = document.querySelector(`.animation2`);
// const observer = new IntersectionObserver((entries) => entries.forEach((entry) => 
//     {if (entry.isIntersecting) {
//         animation2.classList.add(`visible`);
//     } else {
//         animation2.classList.remove(`visible`);
//     }}
// ),
// {threshold: 0.5})
// observer.observe(animation2)

let item = document.querySelectorAll(`.list__item`);
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => 
    {
        const element = entry.target;
        if (entry.isIntersecting) {
        element.classList.add(`visible`);
    }else {
         element.classList.remove(`visible`);
    }}
),
{threshold: 0.5})
item.forEach((element) => observer.observe(element));
