/// <reference path="./node_modules/@types/p5/global.d.ts"/>

// import { Rocket } from "./game";


let canvas, midX, midY;
let rocket;
let apple;


function preload() {}
function setup() {
    console.log("setup init");
    
    canvas = createCanvas(window.innerWidth * 0.9, window.innerHeight * 0.9);
    midX = width * 0.5;
    midY = height * 0.5;
    background(125);
    rocket= new Rocket();
    apple=new Apple();
}
function draw() {
  background(107 , 100, 165);
  rocket.show();

  rocket.tick();
  apple.show();
}
