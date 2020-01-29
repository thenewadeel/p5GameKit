/// <reference path="./node_modules/@types/p5/global.d.ts"/>

let ROTATION_ANGLE = 0.01;
let MAX_VEL = 5;
let GRAVITY_MAGNITUDE = 0;
class Rocket {
  constructor() {
    rectMode(CENTER);
    // this.gravity = createVector(0, GRAVITY_MAGNITUDE);
    // this.vel = createVector(0, 0.23);
    // this.pos = createVector(
      this.mover=new Mover(
      random(width * 0.2, width * 0.8),
      random(height * 0.2, height * 0.1),
      GRAVITY_MAGNITUDE,
      MAX_VEL,
      ROTATION_ANGLE
    );
    // this.thruster = false;
    // this.thrusterState = "OFF";

    // this.thrusterForceDefault = createVector(0, -0.25);
    // this.thrusterForceDefault = createVector(0, -0.25);
    // this.thrusterForce = this.thrusterForceDefault;
  }
  passInput() {
    if (keyIsDown(LEFT_ARROW)) {
      this.mover.rotateMover(LEFT_ARROW);
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.mover.rotateMover(RIGHT_ARROW);
      // this.vel.rotate(ROTATION_ANGLE);
    }
    if (keyIsDown(UP_ARROW)) {
      this.mover.moveMover(UP_ARROW)
      // this.thruster = true;
      // this.vel.mult(1.125);
      // this.thrusterState = "ON";
    } else if (keyIsDown(DOWN_ARROW)) {
      this.mover.moveMover(DOWN_ARROW)
      // this.thrusterForce.mult(0.8)
      // if (this.vel.mag() > 0.1) {
        // this.vel.mult(0.95);
      // }
      // this.thrusterState = "OFF";
      // }else {
    }
this.mover.update();
    // this.vel.add(this.gravity);
    // this.vel.limit(MAX_VEL);
    // if (this.thruster) {
    //   this.thruster = false;
    // } else {
    // }
    // this.pos.add(this.vel);
    // this.thrusterForce = this.thrusterForceDefault;
  }
  checkEdges() {
    if (this.mover.pos.x < 0) {
      this.mover.pos.x = width;
    } else if (this.mover.pos.x > width) {
      this.mover.pos.x = 0;
    }
    if (this.mover.pos.y < 0) {
      this.mover.pos.y = height;
    } else if (this.mover.pos.y > height) {
      this.mover.pos.y = 0;
    }
  }
  tick() {
    this.passInput();
    this.checkEdges();
  }
  show() {
    push();
    translate(this.mover.pos.x, this.mover.pos.y);
    rotate(this.mover.heading());
    rect(0, 0, 60, 10);
    // let tt=this.vel.copy().normalize().rotate(this.vel.heading())
    stroke(200);
    // line( 25*tt.x, 25*tt.y,0,0)
    pop();
    // line(-5+midX / 10, 40, 105+midX / 10, 40)
    push();
    translate(20, 25);
    text("Velocity: " + this.mover.speed(), 0, 0);
    text("Heading: " + Math.floor(this.mover.heading()), 0, 20);
    text("Thruster: " + this.mover.thrusterState, 0, 40);
    text(
      "Pos: " + Math.floor(this.mover.pos.x) + ", " + Math.floor(this.mover.pos.y),
      0,
      60
    );
    pop();
  }
  engineTemp(){
      return this.mover.heatVal()
  }
}
