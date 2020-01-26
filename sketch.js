/// < reference path="./p5.global-mode.d.ts" / >

let canvas, midX, midY;
let rocket = {};
let gravity;
let MAX_VEL = 15;
rocket.init = function() {
  this.vel = createVector(0, 0);
  this.pos = createVector(
    random(width * 0.2, width * 0.8),
    random(height * 0.2, height * 0.1)
  );
  this.rotation = 0;
  this.thruster = false;
  this.thrusterForce = createVector(0, -0.25);
};
rocket.checkInput=function(){
    if(keyIsDown(LEFT_ARROW)){

    }
    if(keyIsDown(UP_ARROW)){
        this.thruster=true;
    }
}
rocket.checkEdges = function() {
  if (this.pos.x < 0) {
    this.pos.x = width;
  } else if (this.pos.x > width) {
    this.pos.x = 0;
  }
  if (this.pos.y < 0) {
    this.pos.y = height;
  } else if (this.pos.y > height) {
    this.pos.y = 0;
  }
};
rocket.tick = function() {
  this.checkInput();
  this.vel.add(gravity);
  this.vel.limit(MAX_VEL);
  if (this.thruster) {
    this.vel.add(this.thrusterForce);
    this.thruster = false;
  }
  this.pos.add(this.vel);
  this.checkEdges();
};
rocket.show = function() {
  rect(this.pos.x, this.pos.y, 10, 50);
  text("Vel: " + this.vel.mag(), midX / 10, 50);
};
function preload() {}
function setup() {
  console.log("setup init");
  gravity = createVector(0, 0.15);
  canvas = createCanvas(window.innerWidth * 0.9, window.innerHeight * 0.9);
  midX = width * 0.5;
  midY = height * 0.5;
  background(125);
  rocket.init();
}
function draw() {
  background(frameCount % 255, 127, 25);
  rocket.show();
  rocket.tick();
}
