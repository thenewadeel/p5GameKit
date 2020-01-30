/// <reference path="./node_modules/@types/p5/global.d.ts"/>

class Apple {
  constructor() {
    this.strength=10;
    this.pos = createVector(
      random(width*0.1 , width*0.9),
      random(height *0.1, height*0.9)
    );
    this.color = "#00FF00";
  }
  getHit(strength) {
    if(this.strength>0){

      let life=this.strength-(strength?strength:1);
      // console.log('life: ',life);
      if(life>1){
        this.strength=life;
        // console.log('ouch');
      }else if(life<=1){
        this.strength=0;
        this.isDead=true;
        this.color='#FFFFFF'
        console.log('inna lillah apple')
      }
    }
  }
  tick() {
    this.check();
  }
  show() {
    push();
    translate(this.pos.x, this.pos.y);
    stroke("#FFF");
    fill(this.color)
    circle(0, 0, 40);
    pop();
  }
}
