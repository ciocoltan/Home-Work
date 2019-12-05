window.addEventListener("DOMContentLoaded", init, false);

const OL_ID = "list";
const BTN_ID = "btnGet";
const OL_USER_ID = "list2";
const BTN_REFRESH_ID = "refresh";
const DIV_ID = "output";
const BTN_DEL_ID = "btnDel";
const BTN_CHANGE_ID = "btnchange";

function init() {
    const listLi = get(OL_ID);
    const btnGet = get(BTN_ID);
    const btnRefresh = get(BTN_REFRESH_ID);
    const output = get(DIV_ID);
    const btnDel = get(BTN_DEL_ID);
    const btnChange = get(BTN_CHANGE_ID);

    btnGet.addEventListener("click", usersDB, false);
    listLi.addEventListener("click", getCurrentUser, false);
    btnRefresh.addEventListener("click", refresh, false);
    btnDel.addEventListener("click", deleteUser, false);
    btnChange.addEventListener("click", changeUser, false);
}

function get(id) {
    return document.getElementById(id);
}

function usersDB() {
    let url = "https://gorest.co.in/public-api/users";
    let method = "GET";
    hhtp(url, method);
}

function hhtp(url, method) {
    let res;
    let xhr = new XMLHttpRequest(); // Создание объекта для HTTP запроса.
    xhr.open(method, url, true);
    xhr.setRequestHeader("Authorization", "Bearer gtDRPcH6V79HpXgLV8XomXKcxRxqj0AidK2T")
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            res = JSON.parse(xhr.response)
            addToHtml(res.result)
        }
        if (xhr.status == 401) {
            res = JSON.parse(xhr.response)
            addToHtml(res.result)
        }
    }
}

function addToHtml(arr) {
    if (arr.status === 401) {
        output.innerHTML += arr.message + "<br>";
    } else {
        const dblistLi = get(OL_ID);
        if (dblistLi.childElementCount > 0) {
            delAll(dblistLi);
        }
        if (dblistLi.childElementCount == 0) {
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                //console.log(element)
                let elementHtml = document.createElement('li');
                elementHtml.innerHTML = `User Id ${element.id} : ${element.first_name} ${element.last_name} <br>`;
                elementHtml.dataset.id = element.id;
                dblistLi.appendChild(elementHtml);
            }
        }
    }
}

function getCurrentUser(event) {
    if (event.target.id == "list") {
        event.preventDefault();
    } else {
        const listLiUser = get(OL_USER_ID);
        let elementHtml = document.createElement('li');
        let att = document.createAttribute("id");
        att.value = event.target.dataset.id;
        elementHtml.setAttributeNode(att);
        elementHtml.innerHTML = event.target.outerText;
        listLiUser.appendChild(elementHtml);
    }
}

function refresh() {
    const listLiUser = get(OL_USER_ID);
    delAll(listLiUser);
}

function delAll(listLiUser) {
    const countLi = listLiUser.childElementCount;
    //console.log(listLiUser)
    for (let i = 0; i < countLi; i++) {
        listLiUser.removeChild(listLiUser.childNodes[0]);
    }
}

function deleteUser() {
    const listLiUser = get(OL_USER_ID);
    const countLi = listLiUser.childElementCount;
    for (let i = 0; i < countLi; i++) {
        del(`https://gorest.co.in/public-api/users/${listLiUser.childNodes[i].id}`, `DELETE`);
    }
}

function del(url, method) {
    let xhr = new XMLHttpRequest(); // Создание объекта для HTTP запроса.
    xhr.open(method, url, true);
    xhr.setRequestHeader("Authorization", "Bearer gtDRPcH6V79HpXgLV8XomXKcxRxqj0AidK2T")
    xhr.send();
}

function changeUser() {
    const listLiUser = get(OL_USER_ID);
    const countLi = listLiUser.childElementCount;
    for (let i = 0; i < countLi; i++) {
        change(`https://gorest.co.in/public-api/users/${listLiUser.childNodes[i].id}`, `PATCH`);
    }
}

function change(url, method) {
    let res;
    let xhr = new XMLHttpRequest(); // Создание объекта для HTTP запроса.
    xhr.open(method, url, true);
    xhr.setRequestHeader("Authorization", "Bearer gtDRPcH6V79HpXgLV8XomXKcxRxqj0AidK2T")
    xhr.send("first_name=Petru&last_name=Ceciltan");
}