// 1
// document.getElementById(`button`).onclick = function () {
//     let value1 = document.getElementById(`textInput`).value;
//     let value2 = document.getElementById(`textInput2`).value;
//     if (value1 && value2) {
//         alert("Обидва поля заповнені");
//     } else {
//         alert("Не всі поля заповнені");
//     }
// }

// 2
document.getElementById(`button`).onclick = function () {
    let valuePassword = document.getElementById(`password`).value;
    let valueConfirmPassword = document.getElementById(`confirm_password`).value;
    if (valuePassword && valueConfirmPassword) {
        if (valuePassword === valueConfirmPassword) {
            alert("Пароль підтверджено");
            validator(valuePassword);
        } else {
            alert("Паролі не співпадають");
        }
    } else {
        alert("Не всі поля заповнені");
    }

    function validator(password) {
        if (valuePassword.length < 6) {
            alert(`пароль короткий має бути не менше 6 символів`);
        } else {
            alert(`пароль прийнятий`);
        }
    }
}