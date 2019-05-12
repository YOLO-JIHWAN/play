const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("brushRange");
const mode = document.getElementById("jsFill");
const save = document.getElementById("jsSave");

const INITIAL_COLOR = "#151515";
const CANVAS_SIZE = 700;

//cavas size justice
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5; //px

let drawing = false;
let filling = false;

function stopDrawing() {
	drawing = false;
}

function startDrawing() {
	drawing = true;
}

function onMouseMove(evt) {
	const x = evt.offsetX;
	const y = evt.offsetY;
	if(!drawing) {
		ctx.beginPath();
		ctx.moveTo(x, y);
	} else {
		ctx.lineTo(x, y);
		ctx.stroke();
	}
}

//pickcolor(change color)
function pickColor(evt) {
	const color = evt.target.style.background;
	ctx.strokeStyle = color;
	ctx.fillStyle = color;
}

//brush width change
function changeBrush(evt) {
	const size = evt.target.value;
	ctx.lineWidth = size;
}

function drawingMode() {
	if(filling === true) {
		filling = false;
		mode.innerText = "Fill";
	} else {
		filling = true;
		mode.innerText = "Drawing";
	}
}

function fillColor() {
	if(filling) {
		ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
	}
}

function preventRightClick(evt) {
	evt.preventDefault();
}

function saveImage() {
	const image = canvas.toDataURL(); //defalut - png
	const link = document.createElement("a");
	link.href = imgae;
	link.download = "DrawingImage🎨[Export]";
	link.click();
}

if(canvas) {
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mousedown", startDrawing);
	canvas.addEventListener("mouseup" , stopDrawing);
	canvas.addEventListener("mouseleave", stopDrawing);
	canvas.addEventListener("click", fillColor);
	canvas.addEventListener("contextmenu", preventRightClick);
}

Array.from(colors).forEach(color => color.addEventListener("click", pickColor));

if(range) {
	range.addEventListener("input", changeBrush);
}

if(mode) {
	mode.addEventListener("click", drawingMode);
}

if(save) {
	save.addEventListener("click" , saveImage);
}