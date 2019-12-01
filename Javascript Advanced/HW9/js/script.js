window.addEventListener("DOMContentLoaded", init, false);
const BTN_ID = "btn";
const BTN1_ID = "btn1";
const BTN2_ID = "btn2";
const BTN3_ID = "btn3";
const PICTURE_ID = "picture";
const GALERY_ID = "galery";
const FULLIMAGE_ID = "fullImage";
const CANVASCONTAINER_ID = "canvasContainer";
const CANVASCIRCLE_ID = "canvascircle";

function init() {
    const btn = get(BTN_ID);
    const galery = get(GALERY_ID);
    const myCanvas = get(CANVASCIRCLE_ID);
    btn.addEventListener("click", chargePicture, false);
    galery.addEventListener("click", fullImage, false);
    createDiagram("convasContainer", [30, 60, 88, 91, 20, 45, 100, 150, 200], 500, 200, "blue");
    let myValue = [30, 60, 88, 91, 20, 45, 100, 150, 200];
    let myDiagram = new Diagram({
        canvas: myCanvas,
        data: myValue,
        colors: ["#daf19b", "#daf19b", "#fde23e", "#f16e23", "#57d9ff", "#937e88", "#00ff2a", "#9ba8f1", "#f19bea"]
    });
    myDiagram.draw();
}

function get(id) {
    return document.getElementById(id);
}

function chargePicture(e) {
    const image = get(PICTURE_ID);
    if (e.target.id == "btn1") {
        image.src = "./img/moon1.jpg";
    } else if (e.target.id == "btn2") {
        image.src = "./img/moon2.jpg";
    } else if (e.target.id == "btn3") {
        image.src = "./img/moon3.jpg";
    }
}

function fullImage(e) {
    const fullImage = get(FULLIMAGE_ID);
    if (e.target.localName == "img") fullImage.src = e.target.src;
}

function createDiagram(canvasId, data, width, height, color) {
    const canvas = get(CANVASCONTAINER_ID);
    canvas.width = width;
    canvas.height = height;
    let context = canvas.getContext("2d");
    let max = data.reduce(function (cur, prev) {
        return Math.max(cur, prev);
    });
    let scale = height / max;
    let barWidth = Math.round(width / data.length);
    for (let i in data) {
        let barHeight = data[i] * scale,
            x = barWidth * i,
            y = height - barHeight;
        context.fillStyle = color;
        context.fillRect(x, y, barWidth - 4, barHeight);
    }
}

let Diagram = function (options) {
    this.options = options;
    this.canvas = options.canvas;
    this.canvas.width = 300;
    this.canvas.height = 300;
    this.context = this.canvas.getContext("2d");
    this.colors = options.colors;
    this.draw = function () {
        let total_value = 0,
            color_index = 0;
        for (let i in this.options.data) {
            total_value += this.options.data[i];
        }
        let start_angle = 0;
        for (i in this.options.data) {
            let slice_angle = 2 * Math.PI * this.options.data[i] / total_value;
            drawPieSlice(
                this.context,
                this.canvas.width / 2,
                this.canvas.height / 2,
                Math.min(this.canvas.width / 2, this.canvas.height / 2),
                start_angle,
                start_angle + slice_angle,
                this.colors[color_index % this.colors.length]
            );
            start_angle += slice_angle;
            color_index++;
        }
    }
}

function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}