const Engine = Matter.Engine;//namespace
const Bodies = Matter.Bodies;
const World = Matter.World;

var myengine,myworld;
var ground;
var ball;

function setup() {
  createCanvas(800,400);

  myengine = Engine.create();
  myworld = myengine.world;
  var ground_option = {
    isStatic :true
  }

 ground =  Matter.Bodies.rectangle(400, 390, 800, 20,ground_option); 
 World.add(myworld,ground);

 var ball_option = {
   restitution : 1
 }

ball = Matter.Bodies.circle(400,100,20,ball_option);
World.add(myworld,ball);

  console.log(ground);
}

function draw() {
  background("black"); 
 // fill("blue")
 // text(mouseX+ ","+mouseY,mouseX,mouseY); 
 // fill("white")
 Engine.update(myengine);

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
}