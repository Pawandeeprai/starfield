/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var Star = __webpack_require__(1);


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


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);