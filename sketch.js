const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var backgroundimg

function preload(){
backgroundimg=loadImage("snow1.jpg")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
 // createSprite(400, 200, 50, 50);
 snow1=new snow(100,100,10,10)
}


function draw() {
  Engine.update(engine)
  background(backgroundimg);
  snow1.display()  
  drawSprites();
}