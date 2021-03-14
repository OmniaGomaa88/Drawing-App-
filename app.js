let canavas= document.querySelector("canvas")
// giving the canavas width and hight
canavas.width=window.innerWidth
 canavas.height=400
//  fill the canavas 
 let context=canavas.getContext("2d")
 context.fillStyle="white"
 context.fillRect(0,0,canavas.width,canavas.height)
// the tooll for drowing
 let drawColor="balck"
 let drowPenWidth="2"
//  variable to chickng drowing
 let isDrowing=false

//  mous and touch move events
canavas.addEventListener("touchstart",start,false);
canavas.addEventListener("touchmove",drow,false);
canavas.addEventListener("mousedown",start,false);
canavas.addEventListener("mousemove",drow,false);

canavas.addEventListener("touchend",stop,false);
canavas.addEventListener("mouseup",stop,false);
canavas.addEventListener("mouseout",stop,false);


// functions
function start(event){
    isDrowing=true
    context.beginPath()
    context.moveTo(event.clientX - canavas.offsetLeft,
        event.clientY - canavas.offsetTop)
        event.preventDefault()
        
}
function drow(event){
    if(isDrowing){
        context.lineTo(event.clientX - canavas.offsetLeft,
            event.clientY - canavas.offsetTop)
            context.strokeStyle=drawColor
            context.lineWidth=drowPenWidth
            context.lineCap="butt"
            context.lineJoin="miter"
            context.stroke()
        }
        event.preventDefault()
}

function stop(event){
if(isDrowing){
    context.stroke()
    context.closePath()
    isDrowing=false
}
event.preventDefault()
}