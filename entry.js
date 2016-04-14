var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var Star = require('./js/star.js');


var stars = [];

while (stars.length < 20){
  var randomX = 100 + Math.random() * 240;
  var randomY = 120 + Math.random() * 240;
  stars.push(new Star(randomX, randomY));
}

function drawStars(){
  stars.forEach(function(star){
    star.draw(ctx);
    if (star.posX < 0 || star.posY < 0 || star.posY > 480 || star.posX > 640){
      var randX = 200 + Math.random() * 240;
      var randY = 120 + Math.random() * 240;
      var idx = stars.indexOf(star);
      stars[idx] = new Star(randX, randY);
    }
  });
}



function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStars();

}

setInterval(draw, 10);
