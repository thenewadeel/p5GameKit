/// <reference path="./node_modules/@types/p5/global.d.ts"/>

class Mover {
  constructor(x, y, g, maxVel, turningRadius) {
    this.pos = createVector(x, y);
    this.gravity = createVector(0, g);
    this.vel = createVector(0, 0.01);
    this.maxVel = maxVel;
    this.turningRadius = turningRadius;
    // this.thruster = false;
    this.thrusterState = "OFF";
  }
  speed() {
    return this.vel.mag();
  }
  heading() {
    return this.vel.heading();
  }
  heatVal() {
    return map(this.speed(), 0, this.maxVel, 0, 255);
  }
  rotateMover(funcArgs) {
    if (funcArgs === LEFT_ARROW) {
      this.vel.rotate(-this.turningRadius);
    } else if (funcArgs === RIGHT_ARROW) {
      this.vel.rotate(this.turningRadius);
    }
  }
  moveMover(funcArgs) {
    if (funcArgs === UP_ARROW) {
      this.vel.mult(1.125);
      this.thrusterState = "ON";
    } else if (funcArgs === DOWN_ARROW) {
      if (this.vel.mag() > 0.1) {
        this.vel.mult(0.95);
      } else {
        // TODO reset velocity
      }
      this.thrusterState = "OFF";
    }
  }
  update() {
    this.vel.add(this.gravity);
    this.vel.limit(this.maxVel);
    this.pos.add(this.vel);
  }
}
