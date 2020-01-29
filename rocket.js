/// <reference path="./node_modules/@types/p5/global.d.ts"/>

let ROTATION_ANGLE = 0.05;
let MAX_VEL = 5;
let GRAVITY_MAGNITUDE = 0.1;
class Rocket {
  constructor() {
    rectMode(CENTER);
    this.mover = new Mover(
      random(width * 0.2, width * 0.8),
      random(height * 0.2, height * 0.1),
      GRAVITY_MAGNITUDE,
      MAX_VEL,
      ROTATION_ANGLE
    );
  }
  passInput() {
    if (keyIsDown(LEFT_ARROW)) {
      this.mover.rotateMover(LEFT_ARROW);
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.mover.rotateMover(RIGHT_ARROW);
    }
    if (keyIsDown(UP_ARROW)) {
      this.mover.moveMover(UP_ARROW);
    } else if (keyIsDown(DOWN_ARROW)) {
      this.mover.moveMover(DOWN_ARROW);
    }
    this.mover.update();
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
    stroke(127+this.engineTemp()/2,255,0);
    fill(this.engineTemp(),0,0);
    rect(0, 0, 90, 10);
    // let tt=this.vel.copy().normalize().rotate(this.vel.heading())
    // line( 25*tt.x, 25*tt.y,0,0)
    pop();
    // line(-5+midX / 10, 40, 105+midX / 10, 40)
    push();
    translate(20, 25);
    text("Velocity: " + this.mover.speed(), 0, 0);
    text("Heading: " + Math.floor(this.mover.heading()), 0, 20);
    text("Thruster: " + this.mover.thrusterState, 0, 40);
    text(
      "Pos: " +
        Math.floor(this.mover.pos.x) +
        ", " +
        Math.floor(this.mover.pos.y),
      0,
      60
    );
    pop();
  }
  engineTemp() {
    return this.mover.heatVal();
  }
}
