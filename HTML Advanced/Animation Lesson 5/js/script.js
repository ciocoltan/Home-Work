window.addEventListener("DOMContentLoaded", init, false);

function init() {
    let city = document.getElementsByClassName("circle");
    for (let i = 0; i < city.length; i++) {
        city[i].addEventListener("mouseenter", animCity, false);
    }
}

function get(id) {
    return document.getElementById(id);
}

function animCity() {
    let cityHover = document.querySelectorAll('.circle:hover');
    let cityName = cityHover[0].children[0].textContent;
    let linkBuy = document.createElement("a");
    hrefBuy = document.createAttribute("href");
    hrefBuy.value = "#"; //here will be link
    linkBuy.setAttributeNode(hrefBuy);
    linkBuy.textContent = "Buy Tikets";
    cityHover[0].children[0].textContent = ""; // delete the city Name
    deleteLink(); // If the  element has any child nodes, delete
    cityHover[0].children[0].appendChild(linkBuy); //add link "Buy Tikets"
    cityHover[0].addEventListener("mouseleave", () => {
        deleteLink();// delete link
        cityHover[0].children[0].textContent = cityName; //return city Name
    }, false);

    function deleteLink() {
        while (cityHover[0].children[0].hasChildNodes()) {
            cityHover[0].children[0].removeChild(cityHover[0].children[0].firstChild);
        }
    }
}