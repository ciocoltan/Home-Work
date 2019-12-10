window.addEventListener("DOMContentLoaded", init, false);

function init() {
    let canvas = document.querySelector("#canvas");
    let context = canvas.getContext('2d');
    context.save();
    context.translate(100, 180);
    flag(context);
    //first red section
    firstRedSection(context);
    //secont red section
    secontRedSection(context);
    // start painting the symbol of Canada
    symbolCanada(context);
    context.restore();
}

function flag(context) {
    context.strokeStyle = "rgba(0,0,0,0.2)";
    // context.shadowOffsetX = 5;
    // context.shadowOffsetY = 5;
    // context.shadowBlur = 5;
    // context.shadowColor = "rgba(0, 0, 0, 0.5)";
    context.beginPath();
    context.save();
    context.moveTo(50, 50);
    context.bezierCurveTo(120, 100, 200, 25, 250, 50);
    context.lineTo(250, 200);
    context.bezierCurveTo(200, 175, 75, 225, 30, 200);
    context.closePath();
    context.stroke();
}

function firstRedSection(context) {
    context.strokeStyle = "white";
    context.fillStyle = "red";
    context.beginPath();
    context.moveTo(50, 50);
    context.bezierCurveTo(65, 62, 82, 67, 100, 68);
    context.lineTo(100, 200);
    context.bezierCurveTo(109, 213, 25, 206, 30, 200);
    context.closePath();
    context.fill();
    context.stroke();
}

function secontRedSection(context) {
    context.beginPath();
    context.moveTo(200, 47);
    context.bezierCurveTo(200, 45, 225, 40, 250, 50);
    context.lineTo(250, 200);
    context.bezierCurveTo(200, 186, 200, 200, 200, 186);
    context.closePath();
    context.fill();
    context.stroke();
}

function symbolCanada(context) {
    context.beginPath();
    context.moveTo(151, 77);
    context.lineTo(159, 91);
    context.lineTo(165, 87);
    context.lineTo(162, 113);
    context.lineTo(173, 99);
    context.lineTo(176, 106);
    context.lineTo(188, 101);
    context.lineTo(184, 117);
    context.lineTo(190, 119);
    context.lineTo(169, 141);
    context.lineTo(171, 149);
    context.lineTo(152, 149);
    context.lineTo(152, 174);
    context.lineTo(149, 174);
    context.lineTo(149, 149);
    context.lineTo(129, 156);
    context.lineTo(131, 148);
    context.lineTo(110, 133);
    context.lineTo(116, 128);
    context.lineTo(112, 113);
    context.lineTo(123, 115);
    context.lineTo(129, 107);
    context.lineTo(137, 118);
    context.lineTo(134, 93);
    context.lineTo(143, 95);
    context.lineTo(151, 77);
    context.closePath();
    context.fill();
    context.stroke();
}