window.addEventListener("DOMContentLoaded", function () {

    //     Задание 1
    // Разработайте страницу «текстовый редактор». На странице должно быть размешено поле ввода и кнопка
    // «Сохранить» (фактического сохранения данных из поля ввода делать не надо). Если пользователь
    // пытается закрыть окно браузера не «сохранив» данные в поле ввода, должно запускаться окно, которое
    // потребует подтверждения операции закрытия окна.
    //  Constants block 
    const PRINT_ID = "show";
    const BTN_SAVE_ID = "btn_save";
    const TEXT_ID = "text";
    const TASK2_ID = "task2";
    const TASK3_ID = "task3";
    const BTN_SALE_ID = "sale";

    // init block

    function get(id) {
        return document.getElementById(id);
    }
    const btnSave = get(BTN_SAVE_ID);
    const input = get(TEXT_ID);
    const task2 = get(TASK2_ID);
    const task3 = get(TASK3_ID);
    const btnSale = get(BTN_SALE_ID);
    btnSave.addEventListener("click", print, false);
    input.addEventListener("change", closeWindow, false);
    window.addEventListener("keypress", colorParagraph, false);
    btnSale.addEventListener("mousemove", coordsBtn, false);
    btnSale.addEventListener("click", function () {
        alert("Поймали скидку");
    }, false)


    function print() {
        let p = get(PRINT_ID);
        p.innerHTML = input.value;
        input.value = "";
        window.removeEventListener("beforeunload", check, false);
    }

    function check(event) {
        if (event) {
            event.returnValue = "Вы не сохранили текст! Измения будут утеряны";
        }
    }

    function closeWindow() {
        window.addEventListener("beforeunload", check, false);
    }
    // Задание 2
    // Создайте страницу с несколькими блоками текста. Реализуйте обработчики событий таким образом,
    // чтобы при нажатии на кнопку r – текст становился красного цвета, кнопка g сделает цвет текста зеленым,
    // а b – синим.
    function colorParagraph(e) {
        if (e.charCode == 103) {
            task2.style.color = "green";
        } else if (e.charCode == 114) {
            task2.style.color = "red";
        } else if (e.charCode == 98) {
            task2.style.color = "blue";
        }
        //keyboard(e);
    }
    //     Задание 3
    // Сделайте кнопку с надписью «получить скидку». При наведение кнопка должна «убегать» от курсора не давая пользователю нажать себя.
    function coordsBtn(e) {
        if (coordsDiv.width > coords.width && coordsDiv.height > coords.height) {
            btnSale.style.left = coords.left + getRandom(0, 350) + "px";
            btnSale.style.top = coords.top + getRandom(0, 350) + "px";
        } else {
            btnSale.style.left = coords.left - e.pageX + "px";
            btnSale.style.top = coords.top - e.pageY + "px";
        }
    }

    function getCoords(elem) {
        let box = elem.getBoundingClientRect();
        return box;
    }
    let coords = getCoords(btnSale);
    let coordsDiv = getCoords(task3);

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }



}, false);