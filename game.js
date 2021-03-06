/// <reference path="./node_modules/@types/p5/global.d.ts"/>

let ROTATION_ANGLE = 0.01;
let MAX_VEL = 5;
let GRAVITY_MAGNITUDE = 0;
class Rocket {
  constructor() {
    rectMode(CENTER);
    this.gravity = createVector(0, GRAVITY_MAGNITUDE);
    this.vel = createVector(0, 0.23);
    this.pos = createVector(
      random(width * 0.2, width * 0.8),
      random(height * 0.2, height * 0.1)
    );
    this.thruster = false;
    this.thrusterState = "OFF";

    // this.thrusterForceDefault = createVector(0, -0.25);
    // this.thrusterForceDefault = createVector(0, -0.25);
    // this.thrusterForce = this.thrusterForceDefault;
  }
  checkInputAndMove() {
    if (keyIsDown(LEFT_ARROW)) {
      this.vel.rotate(-ROTATION_ANGLE);
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vel.rotate(ROTATION_ANGLE);
    }
    if (keyIsDown(UP_ARROW)) {
      this.thruster = true;
      this.vel.mult(1.125);
      this.thrusterState = "ON";
    } else if (keyIsDown(DOWN_ARROW)) {
      // this.thrusterForce.mult(0.8)
      if (this.vel.mag() > 0.1) {
        this.vel.mult(0.95);
      }
      this.thrusterState = "OFF";
      // }else {
    }

    this.vel.add(this.gravity);
    this.vel.limit(MAX_VEL);
    if (this.thruster) {
      this.thruster = false;
    } else {
    }
    this.pos.add(this.vel);
    // this.thrusterForce = this.thrusterForceDefault;
  }
  checkEdges() {
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
  }
  tick() {
    this.checkInputAndMove();

    this.checkEdges();
  }
  show() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rect(0, 0, 60, 10);
    // let tt=this.vel.copy().normalize().rotate(this.vel.heading())
    stroke(200);
    // line( 25*tt.x, 25*tt.y,0,0)
    pop();
    // line(-5+midX / 10, 40, 105+midX / 10, 40)
    push();
    translate(20, 25);
    text("Velocity: " + this.vel.mag(), 0, 0);
    text("Heading: " + Math.floor(this.vel.heading()), 0, 20);
    text("Thruster: " + this.thrusterState, 0, 40);
    text(
      "Pos: " + Math.floor(this.pos.x) + ", " + Math.floor(this.pos.y),
      0,
      60
    );
    pop();
  }
  heatVal(){
      return map(this.vel.mag(),0,MAX_VEL,0,255)
  }
}
