const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body
var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var win = false
var fruit;
function preload(){
  backgroundImg = loadImage("campo listrado.jpeg");
  bolaImg = loadImage("bola do fogao sem fundo.png")
  golImg = loadImage("gol se fundo.png")
  winImg = loadImage("goool.jpeg")
}
function setup() {
  createCanvas(500,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  bola = Bodies.circle(450,100,30)
  World.add(world, bola)
  
  gol = Bodies.rectangle(100,325,100,100)

  World.add(world,gol)



  solo = new Solo();
  
 
}
function draw() {
  background(backgroundImg); 
  fill ("white")
  textSize(20)
  text(mouseX + ',' + mouseY, 10, 25);
  
  solo.display();
 
  push ()
  imageMode(CENTER)
  image(bolaImg, bola.position.x, bola.position.y, 60, 60)
  image(golImg, gol.position.x, gol.position.y, 100, 100)

  pop ()

  imageMode(CENTER)
  var c = Matter.SAT.collides(bola, gol)
  
  if(c.collided){
    win = c.collided
  }
  if (win){
    image (winImg, 250,200,500,400)
    if(mouseIsPressed){
      window.location.reload()
    }
  }
 
}
function keyPressed (){
  if(keyCode == 32){
    Body.applyForce(bola, {x:0,y:0}, {x:-0.1, y:0.008})
  }
}
