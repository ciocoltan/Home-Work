// Задание 1
// Разработайте игру «Угадай значение». Страница загадывает число от 1 до 100. Пользователь в поле ввода
// вводит значение пытаясь угадать загаданное число. Если пользователь не угадывает значение, страница
// выводит сообщение с текстом «загаданное значение больше введенного вами» или «загаданное
// значение меньше введенного вами». Подумайте, как можно применить DHTML в таком приложении.
window.onload = function () {
    function get(id) {
        return document.getElementById(id);
    }
    let loto = get("loto");
    let pattern = /(?:\b|-)([1-9]{1,2}[0]?|100)\b/;
    loto.oninput = function () {
        if (pattern.test(loto.value)) {
            loto.className = "green";
        } else {
            loto.className = "red";
        }
    }
    let btnLoto = get("btn_loto");
    btnLoto.onclick = function () {
        let winningNumber = 65;
        let winner = get("winner");
        if (loto.value == winningNumber) {
            winner.innerHTML = "Поздравляю Вы Выиграли!"
        } else if (loto.value < winningNumber) {
            winner.innerHTML = "Загаданное значение больше введенного вами";
        } else {
            winner.innerHTML = "Загаданное значение меньше введенного вами";
        }
    }
    //Task2
    let posFinal = true;
    let divPosition = 0;
    let divAnimation = get("animation");
    setInterval(animation, 10);

    function animation() {
        if (posFinal) {
            if (divPosition == window.innerWidth - 40) {
                posFinal = false;
            }
            divAnimation.style.left = divPosition + "px";
            divPosition += 1;
        } else {
            if (divPosition == 0) {
                posFinal = true;
            }
            divPosition -= 1;
            divAnimation.style.left = divPosition + "px";
        }
    }
}