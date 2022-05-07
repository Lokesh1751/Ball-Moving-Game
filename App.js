const score=document.querySelector('.score');
const startscreen=document.querySelector('.startscreen');
const gamearea=document.querySelector('.gamearea');
startscreen.addEventListener('click',start);
let player={
    start: false
}
let keys={
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft:false,
    ArrowRight:false

}
console.log(keys)
document.addEventListener('keydown',keyaDown)
document.addEventListener('keyup',keyUp);
function keyaDown(e){
   e.preventDefault();
   keys[e.key]=true;
//    console.log(keys)
//    console.log("yes")
}
function keyUp(e){
   e.preventDefault();
   keys[e.key]=false;

}
function gameplay(){
    if(player.start){
        window.requestAnimationFrame(gameplay);

    }
}
function start(){
    gamearea.classList.remove('hide')
    startscreen.classList.add('hide')
    player.start=true;
    window.requestAnimationFrame(gameplay);
    let car=document.createElement('div');
    car.setAttribute('class','car')
    //car.innerText="hey i m ur car buddy";
    gamearea.appendChild(car)
     
}