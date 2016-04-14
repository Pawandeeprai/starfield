function Star(posX, posY){
  this.posX = posX;
  this.posY = posY;
  this.distance = Math.sqrt(Math.pow(Math.abs(320 - posX), 2) +
                  Math.pow(Math.abs(240 - posY),2));
  this.dX = this.distance * .00025;
}

Star.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.posX,this.posY,2,0,2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  if (this.posX >= 320){
    this.posX += this.dX;
  } else {
    this.posX -= this.dX;
  }
  if (this.posY >= 240){
    this.posY += this.dX;
  } else {
    this.posY -= this.dX;
  }
  this.dX += 0.5 * this.dX;
};

module.exports = Star;
