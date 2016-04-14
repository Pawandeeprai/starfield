var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var Star = require('./js/star.js');


var stars = [];

while (stars.length < 4500){
  var randomX = Math.random() * 640;
  var randomY = Math.random() * 480;
  stars.push(new Star(randomX, randomY));
}

function drawStars(){
  stars.forEach(function(star){
    star.draw(ctx);
    if (star.posX < 0 || star.posY < 0 || star.posY > 480 || star.posX > 640){
      var randX = Math.random() * 640;
      var randY = Math.random() * 480;
      var idx = stars.indexOf(star);
      stars[idx] = new Star(randX, randY);
    }
  });
}



function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStars();
  requestAnimationFrame(draw);
  requestAnimFrame();
  console.log(fps);
}

var lastCalledTime;
var fps;

function requestAnimFrame() {

  if(!lastCalledTime) {
     lastCalledTime = Date.now();
     fps = 0;
     return;
  }
  var delta = (Date.now() - lastCalledTime)/1000;
  lastCalledTime = Date.now();
  fps = 1/delta;
  ctx.font = "48px serif";
  ctx.fillText("fps:" + Math.floor(fps), 10, 50);
  ctx.fillText("Stars:" + stars.length, 10, 100);
}

draw();
