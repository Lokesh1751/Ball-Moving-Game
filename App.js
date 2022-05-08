const score = document.querySelector(".score");
const startscreen = document.querySelector(".startscreen");
const gamearea = document.querySelector(".gamearea");
startscreen.addEventListener('click', start);
let player = {speed:5};
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
function gameplay() {
    let car=document.querySelector('.car');
    car.style.cursor="pointer"
    if (player.start) {
      if (keys.ArrowUp) {
        player.y -= player.speed;
      }
      if (keys.ArrowDown) {
        player.y += player.speed;
      }
      if (keys.ArrowLeft) {
        player.x -= player.speed;
      }
      if (keys.ArrowRight) {
        player.x += player.speed;
      }
      car.style.top=player.y + "px";
      car.style.left=player.x + "px";
      window.requestAnimationFrame(gameplay);
    }
  }

function start() {
  gamearea.classList.remove("hide");
  startscreen.classList.add("hide");
  player.start = true;
  window.requestAnimationFrame(gameplay);
  let car1 = document.createElement("div");
  car1.setAttribute("class", "car");
  //car.innerText="hey i m ur car buddy";
  gamearea.appendChild(car1);
  player.x = car1.offsetLeft;
  player.y = car1.offsetTop;
}


