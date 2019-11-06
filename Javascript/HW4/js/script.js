let zero = document.getElementById("btn_0");
zero.onclick = function() {
  let display = document.getElementById("display");
  display.value += zero.value;
};
let one = document.getElementById("btn_1");
one.onclick = function() {
  let display = document.getElementById("display");
  display.value += one.value;
};
let two = document.getElementById("btn_2");
two.onclick = function() {
  let display = document.getElementById("display");
  display.value += two.value;
};
let three = document.getElementById("btn_3");
three.onclick = function() {
  let display = document.getElementById("display");
  display.value += three.value;
};
let four = document.getElementById("btn_4");
four.onclick = function() {
  let display = document.getElementById("display");
  display.value += four.value;
};
let five = document.getElementById("btn_5");
five.onclick = function() {
  let display = document.getElementById("display");
  display.value += five.value;
};
let six = document.getElementById("btn_6");
six.onclick = function() {
  let display = document.getElementById("display");
  display.value += six.value;
};
let seven = document.getElementById("btn_7");
seven.onclick = function() {
  let display = document.getElementById("display");
  display.value += seven.value;
};
let eight = document.getElementById("btn_8");
eight.onclick = function() {
  let display = document.getElementById("display");
  display.value += eight.value;
};
let nine = document.getElementById("btn_9");
nine.onclick = function() {
  let display = document.getElementById("display");
  display.value += nine.value;
};
let plus = document.getElementById("btn_plus");
plus.onclick = function() {
  let display = document.getElementById("display");
  display.value += plus.value;
};
let minus = document.getElementById("btn_minus");
minus.onclick = function() {
  let display = document.getElementById("display");
  display.value += minus.value;
};
let rest = document.getElementById("btn_rest");
rest.onclick = function() {
  let display = document.getElementById("display");
  display.value += rest.value;
};
let multiplied = document.getElementById("btn_multiplied");
multiplied.onclick = function() {
  let display = document.getElementById("display");
  display.value += "*";
};
let divide = document.getElementById("btn_divide");
divide.onclick = function() {
  let display = document.getElementById("display");
  display.value += "/";
};
let point = document.getElementById("btn_point");
point.onclick = function() {
  let display = document.getElementById("display");
  display.value += ".";
};
let c = document.getElementById("btn_c");
c.onclick = function() {
  let display = document.getElementById("display");
  display.value = "";
};
let del = document.getElementById("btn_del");
del.onclick = function() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, display.value.length - 1);
};
let sqrt = document.getElementById("btn_sqrt");
sqrt.onclick = function() {
  let display = document.getElementById("display");
  display.value = Math.sqrt(display.value);
};
let equal = document.getElementById("btn_equal");
equal.onclick = function() {
  let display = document.getElementById("display");
  display.value = eval(display.value);
};
