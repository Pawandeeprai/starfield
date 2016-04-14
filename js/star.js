function Star(posX, posY){
  this.posX = posX;
  this.posY = posY;
  this.distanceX = Math.abs(320 - posX);
  this.distanceY = Math.abs(240 - posY);
  this.dX = this.distanceX * .0025;
  this.dY = this.distanceY * .0025;
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
    this.posY += this.dY;
  } else {
    this.posY -= this.dY;
  }
  this.dX += 0.05 * this.dX;
  this.dY += 0.05 * this.dY;
};

module.exports = Star;
