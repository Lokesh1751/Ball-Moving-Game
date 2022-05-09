const score = document.querySelector(".score");
const startscreen = document.querySelector(".startscreen");
const gamearea = document.querySelector(".gamearea");
startscreen.addEventListener('click', start);
let player = {speed:5,score:0};
let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};
//console.log(keys);
document.addEventListener('keydown', keyaDown);
document.addEventListener('keyup', keyUp);
function keyaDown(e) {
  e.preventDefault();
  keys[e.key] = true;
  //    console.log(keys)
  //    console.log("yes")
}
function keyUp(e) {
  e.preventDefault();
  keys[e.key] = false;
}
function iscollide(a,b){
    aRect=a.getBoundingClientRect();
    bRect=b.getBoundingClientRect();
    return !((aRect.top > bRect.bottom  || aRect.bottom <bRect.top || aRect.right<=bRect.left || aRect.left>=bRect.right))
}
function movelines(){
    let lines=document.querySelectorAll('.lines');
    lines.forEach(function(item){
        if(item.y >=700){
            item.y-=750;
        }
        item.y+=player.speed;
        item.style.top=item.y+"px";

    })
}
function endgame(){
  player.start=false;
  startscreen.classList.remove("hide")
  startscreen.innerHTML="Game Over <br> Your final score is:" +
  (player.score + 1*1 ) + "<br>"+ "Press here to restart the Game" 
}
function moveenemy(car){
    let enemy=document.querySelectorAll('.enemy');
    enemy.forEach(function(item){
        if(iscollide(car,item)){
            console.log("boom hit")
            endgame();
        }
        if(item.y >=750){
            item.y= -300;
            item.style.left=Math.floor(Math.random()* 350) + "px";
        }
        item.y+=player.speed;
        item.style.top=item.y+"px";

    })
}
function gameplay() {
    let car=document.querySelector('.car');
    car.style.cursor="pointer"
    let road=gamearea.getBoundingClientRect(); // complete info about gamearea div

    if (player.start) {
        movelines();
        moveenemy(car);
      if (keys.ArrowUp && player.y>(road.top + 70)) {
        player.y -= player.speed;
      }
      if (keys.ArrowDown && player.y<(road.bottom -100)) {
        player.y += player.speed;
      }
      if (keys.ArrowLeft && player.x>0) {
        player.x -= player.speed;
      }
      if (keys.ArrowRight && player.x<(road.width-70)) {
        player.x += player.speed;
      }
      car.style.top=player.y + "px";
      car.style.left=player.x + "px";
      window.requestAnimationFrame(gameplay);
      player.score++;
      score.innerText="Score:" + " " + player.score;
    }
  }

function start() {
 // gamearea.classList.remove("hide");
  startscreen.classList.add("hide");
  gamearea.innerHTML="";
  player.start = true;
  player.score=0;
  window.requestAnimationFrame(gameplay);
  for(var i=0;i<6;i++){
    let roadline=document.createElement("div")
    roadline.setAttribute("class","lines")
    roadline.y=(i*150);
    roadline.style.top=roadline.y+"px";
    gamearea.appendChild(roadline)
      
}
  let car1 = document.createElement("div");
  car1.setAttribute("class", "car");
  gamearea.appendChild(car1);
  player.x = car1.offsetLeft;
  player.y = car1.offsetTop;
  for(var i=0;i<3;i++){
    let enemycar=document.createElement("div")
    enemycar.setAttribute("class","enemy")
    enemycar.y=(i+1) * 350 * (-1);
    enemycar.style.top=enemycar.y+"px";
    enemycar.style.backgroundColor="red";
    enemycar.style.left=Math.floor(Math.random()* 350) + "px";
    gamearea.appendChild(enemycar)
      
}
}