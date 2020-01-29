/// <reference path="./node_modules/@types/p5/global.d.ts"/>

class Apple {
  constructor() {
    // rectMode(CENTER);
    // this.gravity = createVector(0, GRAVITY_MAGNITUDE);
    // this.vel = createVector(0, 0.23);
    this.strength=10;
    this.pos = createVector(
      random(width*0.1 , width*0.9),
      random(height *0.1, height*0.9)
    );
    this.color = "#FF0000";
    // this.thruster = false;
    // this.thrusterState = "OFF";

    // this.thrusterForceDefault = createVector(0, -0.25);
    // this.thrusterForceDefault = createVector(0, -0.25);
    // this.thrusterForce = this.thrusterForceDefault;
  }
  getHit(strength) {
    if(this.strength>0){

      let life=this.strength-(strength?strength:1);
      console.log('life: ',life);
      if(life>1){
        this.strength=life;
        // console.log('ouch');
      }else if(life<=1){
        this.strength=0;
        this.color='#FFFFFF'
        console.log('inna lillah apple')
      }
    }
  }
  tick() {
    // this.checkInputAndMove();

    this.check();
  }
  show() {
    push();
    translate(this.pos.x, this.pos.y);
    // rotate(this.vel.heading());
    // rect(0, 0, 60, 10);
    stroke(this.color);
    fill(this.color)
    circle(0, 0, 40);
    // let tt=this.vel.copy().normalize().rotate(this.vel.heading())
    // line( 25*tt.x, 25*tt.y,0,0)
    pop();
    // line(-5+midX / 10, 40, 105+midX / 10, 40)
    // push();
    // translate(20, 25);
    // text("Velocity: " + this.vel.mag(), 0, 0);
    // text("Heading: " + Math.floor(this.vel.heading()), 0, 20);
    // text("Thruster: " + this.thrusterState, 0, 40);
    // text(
    //   "Pos: " + Math.floor(this.pos.x) + ", " + Math.floor(this.pos.y),
    //   0,
    //   60
    // );
    // pop();
  }
  // heatVal(){
  //     return map(this.vel.mag(),0,MAX_VEL,0,255)
  // }
}
