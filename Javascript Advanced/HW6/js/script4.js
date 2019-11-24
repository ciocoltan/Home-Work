//     Задание 4
// Разработайте страницу, которая будет выводить сообщение «сохранено» при нажатии на клавиши Ctrl + S, «выбрано все» при нажатии на Ctrl + A и «сохранено все» при нажатии на комбинацию Ctrl + Shift + S.
window.addEventListener("keydown", hotkeys, false);

function hotkeys(e) {
    //e.preventDefault();

    if (e.ctrlKey && e.shiftKey && e.keyCode == 83) {
        alert("Сохранено всё");
    } else if (e.ctrlKey && e.keyCode == 83) {
        alert("Сохранено");
    }
    if (e.ctrlKey && e.keyCode == 65) {
        alert("Выбрано всё");
    }
}