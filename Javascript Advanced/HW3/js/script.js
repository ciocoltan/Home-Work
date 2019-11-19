//Задание 1
//Разработайте программу секундомер. Секундомер должен иметь три
//кнопки «Старт», «Стоп», «Сбросить». Секундомер должен выводить время
// в формате 00:00:00.
function get(id) {
  return document.getElementById(id);
}
window.onload = function() {
  let hour = get("hour");
  let min = get("min");
  let sec = get("sec");
  let msec = get("msec");
  let counter = 0,
    seconds = 0,
    minutes = 0,
    hours = 0,
    timeStop;
  hour.innerHTML = 0;
  min.innerHTML = 0;
  sec.innerHTML = 0;
  msec.innerHTML = 0;

  function stopTimer() {
    clearInterval(timeStop);
  }
  let btnStart = get("btn_start");
  get("btn_start").onclick = function() {
    timeStop = setInterval(milesec, 1);
    btnStart.disabled = true;
  };

  function milesec() {
    msec.innerHTML = counter;
    ++counter;
    if (counter == 1000) {
      stopTimer();
      counter = 0;
      sec.innerHTML = ++seconds;
      timeStop = setInterval(milesec, 1);
      if (seconds == 60) {
        stopTimer();
        counter = seconds = 0;
        min.innerHTML = ++minutes;
        timeStop = setInterval(milesec, 1);
        if (minutes == 60) {
          stopTimer();
          counter = seconds = minutes = 0;
          hour.innerHTML = ++hours;
          timeStop = setInterval(milesec, 1);
          if (hours == 24) {
            stopTimer();
          }
        }
      }
    }
  }

  get("btn_stop").onclick = function() {
    stopTimer();
    btnStart.disabled = false;
  };
  get("btn_refresh").onclick = function() {
    stopTimer();
    btnStart.disabled = false;
    counter = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    hour.innerHTML = 0;
    min.innerHTML = 0;
    sec.innerHTML = 0;
    msec.innerHTML = 0;
  };
};

//Задание 2
//Разработайте страницу, которая будет выводить сумму двух GET
//параметров a и b. Например, если на страницу заходят по адресу,
//page.html?a=100&b=200, то в теле страницы должно отображаться
//сообщение «сумма 300»
function readGet() {
  let text = location.search.substring(1);
  let arr = text.split("&");
  for (let i = 0; i < arr.length; i++) {
    let index = arr[i].indexOf("=");
    arr[i] = parseInt(arr[i].slice(++index));
  }
  let sum = arr.reduce((sum, index) => sum + index, 0);
  return sum;
}
let summa = get("task2");
summa.innerHTML = "?a=100&b=200&c=200 Сумма: " + readGet();
//Задание 3
//Создайте приложение, которое от пользователя должно принимать строки
//в формате «10 + 20» или «50 - 6». При получении такой строки
//приложение должно отобразить результат арифметического действия.
function readGet1() {
  let text = location.search.substring(1);
  let arr = text.split("&");
  for (let i = 0; i < arr.length; i++) {
    let index = arr[i].indexOf("=");
    arr[i] = eval(arr[i].slice(++index));
  }
  let sum = arr.reduce((sum, index) => sum + index, 0);
  return sum;
}
let summa1 = get("task3");
summa1.innerHTML = "?a=100/2&b=200-100&c=200*2 Сумма:  " + readGet1();
//Задание 4
//Создайте страницу с тремя ссылками: «JS Урок 1», «JS Урок 2»,
//«JS Урок 3». При нажатии по каждой из ссылок должно отображаться
//окно с описанием соответствующих уроков этого курса. Если окно с
//описание в данный момент отображается, текст ссылки должен быть
//«JS Урок № (открыт)». При повторном нажатии на ссылку окно должно
//исчезать и текст ссылки должен меняться на исходный.
let double = false;
let w;
get("js1").onclick = function() {
  if (double == true) {
    w.close();
    double = false;
  } else {
    w = window.open("js1.html", "JS Урок 1", "width=400,height=400");
    double = true;
  }
};
get("js2").onclick = function() {
  if (double == true) {
    w.close();
    double = false;
  } else {
    w = window.open("js2.html", "JS Урок 2", "width=400,height=400");
    double = true;
  }
};
get("js3").onclick = function() {
  if (double == true) {
    w.close();
    double = false;
  } else {
    w = window.open("js3.html", "JS Урок 3", "width=400,height=400");
    double = true;
  }
};
//Задание 5
//Создайте бегущую строку. Пользователь вводит текст в поле ввода
//и нажимает на кнопку. После чего в элементе страниц отображается
//бегущая строка с введенным текстом.
let btnGo = get("btn_go");
get("btn_go").onclick = function() {
  let str = get("text").value;
  let print = get("print");
  console.log(str);

  function goStr(elem, str) {
    for (var i = 0; i < str.length; i++)
      setTimeout(
        (function(char) {
          return function() {
            elem.innerHTML += char;
          };
        })(str.charAt(i)),
        i * 500
      );
  }
  goStr(print, str);
};
