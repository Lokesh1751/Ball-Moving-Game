const score=document.querySelector('.score');
const startscreen=document.querySelector('.startscreen');
const gamearea=document.querySelector('.gamearea');
document.addEventListener('keydown',keyaDown)
document.addEventListener('keyup',keyUp);
function keyaDown(e){
   e.preventDefault();
   console.log(e.key)

}
function keyUp(e){
   e.preventDefault();
   //console.log(e.key)

}