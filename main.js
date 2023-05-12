var color = document.querySelector('.color')
var eraser = document.querySelector('.eraser')
var minus = document.querySelector('.minus')
var number = document.querySelector('.number')
var plus = document.querySelector('.plus')
var save = document.querySelector('.save')
var close = document.querySelector('.close')
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var pos1 = {
    x: 0,
    y: 0
}

var pos2 = {
    x: 0,
    y: 0
}
var isDrawing = false;
var colorPaint = '#0000';
var size = 5 ;
number.innerText = size;

document.addEventListener('mousedown', function(e){
    pos1 ={
        x: e.offsetX,
        y: e.offsetY
    }
    isDrawing = true
})

document.addEventListener('mousemove', function(e){
    if(isDrawing){
        pos2 ={
            x: e.offsetX,
            y: e.offsetY
        }
// paint fill 
        ctx.beginPath();
        ctx.arc(pos1.x, pos1.y, size, 0, 2 *Math.PI);
        ctx.fillStyle = colorPaint
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(pos1.x, pos1.y);
        ctx.lineTo(pos2.x, pos2.y);
        ctx.strokeStyle = colorPaint;
        ctx.lineWidth = size*2;
        ctx.stroke();

        pos1.x = pos2.x
        pos1.y = pos2.y
    }
})
document.addEventListener('mouseup', function(e){
    isDrawing = false
})

color.addEventListener('change', function(e) {
   colorPaint = e.target.value;
})

eraser.addEventListener('click', function(){
    colorPaint = 'white'
})

minus.addEventListener('click', function(){
    size -= 5
    size = size > 5 ? size : 5
    number.innerText = size
})

plus.addEventListener('click', function(){
    size += 5
    size = size > 5 ? size : 5
    number.innerText = size
})
close.addEventListener('click', function(){
   var canvasStats= canvas.getClientRects()[0]
    ctx.clearRect(0, 0, canvasStats.width, canvasStats.height)
})
save.addEventListener('click', function(){
    var output = canvas.toDataURL('image/jpg') 
    save.setAttribute('href', output)
})

