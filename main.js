canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var moueve = "empty";
var lapox, lapoy;
color = "black";
wioli = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    moueve="mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    moueve="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    moueve="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    cupomox = e.clientX-canvas.offsetLeft;
    cupomoy = e.clientY-canvas.offsetTop;
    if (moueve == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=wioli;
        console.log("Last Position of X + Y Cooridnates");
        console.log("X = "+lapox+" Y = "+lapoy);
        ctx.moveTo(lapox,lapoy);
        console.log("Current Position of X + Y Cooridnates");
        console.log("X = "+cupomox+" Y = "+cupomoy);
        ctx.lineTo(cupomox, cupomoy);
        ctx.stroke();
    }
    lapox = cupomox;
    lapoy = cupomoy;

}