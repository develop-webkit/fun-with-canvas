const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '30';


console.log(ctx);


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let heu = 0;
let direction = true;

function drawFunc(e){
    if(!isDrawing) return;
    
    ctx.beginPath();
    // start From
    ctx.moveTo(lastX, lastY);
    // Goto
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX,lastY] = [e.offsetX, e.offsetY];
    ctx.strokeStyle = `hsl(${heu}, 100%, 50%)`;
    heu++;
    if(heu >= 360){
        heu = 0;
    }

    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction;
    }
    
    direction ? ++ctx.lineWidth : --ctx.lineWidth;
    
}

canvas.addEventListener('mousemove',drawFunc);
canvas.addEventListener('mousedown',(e) => {
    isDrawing = true;  
    [lastX, lastY] = [e.offsetX, e.offsetY]
    return
});
canvas.addEventListener('mouseup',  () => {isDrawing = false; return;});
canvas.addEventListener('mouseout', () => {isDrawing = false; return;})