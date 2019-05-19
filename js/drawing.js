var canvasWidth = document.getElementById("drawingCanvas").offsetWidth;
var canvasHeight = document.getElementById("drawingCanvas").style.height = canvasWidth;

const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("brushRange");
const mode = document.getElementById("jsFill");
const save_img = document.getElementById("jsSave");
const reset = document.getElementById("jsReset");
const rgb = document.getElementById("rgbColor");
const cursor = document.getElementById("jsPointer");

const INITIAL_COLOR = "#151515";
const CANVAS_SIZE = canvasWidth;

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
	// cursor.setAttribute("style", "top: "+(evt.pageY - 10)+"px; left: "+(evt.pageX - 10)+"px;");
	if(!drawing) {
		ctx.beginPath();
		ctx.moveTo(x, y);
	} else {
		ctx.lineTo(x, y);
		ctx.stroke();
	}
}

function onTouchMove(evt) {
	const mobileX = evt.touches[0].pageX - evt.touches[0].target.offsetLeft;
	const mobileY = evt.touches[0].pageY - evt.touches[0].target.offsetTop;
	console.log(mobileX, mobileY);
	if(!drawing) {
		ctx.beginPath();
		ctx.moveTo(mobileX, mobileY);
	} else {
		ctx.lineTo(mobileX, mobileY);
		ctx.stroke();
	}
}


//pickcolor(change color)
function pickColor(evt) {
	const color = evt.target.style.background;
	ctx.strokeStyle = color;
	ctx.fillStyle = color;
}

function colorPicker(evt) {
	var variableColor = document.getElementById("rgbColor").value;
	ctx.strokeStyle = variableColor;
	ctx.fillStyle = variableColor;
}

//brush width change
function changeBrush(evt) {
	var brush_size = document.getElementById("brushSize");
	const size = evt.target.value;
	ctx.lineWidth = size;
	brush_size.innerText = size;
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
	link.href = image;
	link.download = "DrawingImage🎨";
	link.click();
}

function drawingReset() {
	ctx.fillStyle = "#fff";
	ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

if(canvas) {
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("touchmove", onTouchMove);
	canvas.addEventListener("mousedown", startDrawing);
	canvas.addEventListener("touchstart", startDrawing);
	canvas.addEventListener("mouseup" , stopDrawing);
	canvas.addEventListener("touchend" , stopDrawing);
	canvas.addEventListener("mouseleave", stopDrawing);
	canvas.addEventListener("touchcancel", stopDrawing);
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

if(save_img) {
	save_img.addEventListener("click" , saveImage);
}

if(reset) {
	reset.addEventListener("click", drawingReset);
}

if(rgb) {
	rgb.addEventListener("change", colorPicker);
}

var active = document.getElementsByClassName('jsColor');
for(var i = 0; i < active.length; i++) {
	active[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("on");
		current[0].className = current[0].className.replace(" on", "");
		this.className += " on";
	});
}