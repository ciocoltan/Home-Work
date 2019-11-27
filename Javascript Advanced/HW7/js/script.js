window.addEventListener("DOMContentLoaded", init, false);

const FORM_ID = "form_pizza";
const SALE_BOX = "sale_box";
const FIRSTNAME_ID = "firstname";
const PIZZAMEDIUM_ID = "pizzamedium"

function init() {
    const form = get(FORM_ID);
    const pizzamedium = get(PIZZAMEDIUM_ID);
    pizzamedium.checked = true;
    print();
    for (let i = 0; i < form.elements.length; i++) {
        form.elements[i].addEventListener("change", print, false);
    }
    form.addEventListener("keypress", requiredInput, false);
    form.addEventListener("submit", requiredForm, false);
}

function get(id) {
    return document.getElementById(id);
}

let price = {
    pizzasmall: 10,
    pizzamedium: 15,
    pizzalarge: 20,
    mushrooms: 2,
    bacon: 4,
    tomatoes: 1.5,
    cheese: 3,
    olives: 0.5
}

function print() {
    const box = get(SALE_BOX);
    const form = get(FORM_ID);
    sum = 0;
    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].checked == true) {
            sum += price[form.elements[i].id];
            console.log(form.elements[i].checked);
        }
    }
    box.innerHTML = sum;
}

function Info() {
    this.info = document.createElement("div");
    this.info.style.position = "absolute";
    this.info.style.visibility = "hidden";
    this.info.className = "info";
}
Info.prototype.show = function (text, x, y) {
    this.info.innerHTML = text;
    this.info.style.left = x + "px";
    this.info.style.top = y + "px";
    this.info.style.visibility = "visible";
    if (this.info.parentNode != document.body)
        document.body.appendChild(this.info);
};
Info.prototype.hide = function () {
    this.info.style.visibility = "hidden";
};
let comment = new Info();

function requiredInput(e) {
    let pattern;
    switch (e.target.id) {
        case "firstname":
            comment.show("Logging in should be only letters", e.target.offsetLeft + e.target.offsetWidth + 5, e.target.offsetTop);
            pattern = /[a-zA-Z]+/;
            if (pattern.test(e.key)) {
                comment.hide();
                e.target.className = "green";
            } else {
                e.target.className = "red";
                e.preventDefault();
            }
            break;
        case "tel":
            comment.show("The telephone must be only number", e.target.offsetLeft + e.target.offsetWidth + 5, e.target.offsetTop);
            pattern = /[0-9]/;
            if (pattern.test(e.key)) {
                comment.hide();
                e.target.className = "green";
            } else {
                e.target.className = "red";
                e.preventDefault();
            }
            break;
        case "address":
            if (e.target.value.length <= 5) {
                comment.show("Please fill the address ", e.target.offsetLeft + e.target.offsetWidth + 10, e.target.offsetTop);
                e.target.className = "red";
            } else {
                comment.hide();
                e.target.className = "green";
            }
            break;
        default:
            break;
    }
}

function requiredForm(e) {
    const form = get(FORM_ID);
    if (form.firstname.value == "") {
        comment.show("Please fill the name ", e.target.clientHeight - 23, e.target.offsetHeight - 78);
        e.preventDefault()
    } else
    if (form.tel.value == "") {
        comment.show("Please fill the Telephone ", e.target.clientHeight - 23, e.target.offsetHeight - 53);
        e.preventDefault()
    } else
    if (form.address.value == "") {
        comment.show("Please fill the address ", e.target.clientHeight - 18, e.target.offsetHeight - 28);
        e.preventDefault();
    }
}