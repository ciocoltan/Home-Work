window.addEventListener("load", init, false);
//Constants
const COLOR_ID = "color";
const FONT_SIZE_ID = "fontSize";
const SAVE_BTN_ID = "save";
//Init

function init() {
    const color = get(COLOR_ID);
    const changeFontSize = get(FONT_SIZE_ID);
    const btnSave = get(SAVE_BTN_ID);
    change();
    color.addEventListener("click", selectColor, false);
    changeFontSize.addEventListener("change", changeSize, false);
    btnSave.addEventListener("click", change, false);
    changeFontSize.addEventListener("keypress", requredInput, false);
}

function get(id) {
    return document.getElementById(id);
}

function selectColor(e) {
    color[0].disabled = true;
    window.localStorage.color = e.target.value;
}

function changeSize(e) {
    window.localStorage.changeFontSize = e.target.value;
}

function requredInput(e) {
    let pattern = /[0-9]/;
    if (pattern.test(e.key) && e.target.value.length <= 1) {
        e.target.className = "green";
    } else {
        e.target.className = "red";
        e.preventDefault();
    }
}

function change() {
    if (window.localStorage.color) {
        document.body.style.backgroundColor = window.localStorage.color;
    }
    if (window.localStorage.changeFontSize) {
        document.body.style.fontSize = window.localStorage.changeFontSize + "px";
    }
}