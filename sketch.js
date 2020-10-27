
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var paper,wall1,wall2,wall3,wall3Body,dustbinS,dustbinSImg;
var ground;

function preload () {
dustbinSImg = loadImage ("images/dustbin.png");

}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,530,800,20);
	paper = new Paper(150,500,70);
	wall1 = createSprite(575,425,20,200);
	wall1.shapeColor = "white";
	wall2 = createSprite(725,425,20,200);
	wall2.shapeColor = "white";
	wall3 = createSprite(650,515,185,20);
	wall3.shapeColor = "white";
	dustbinS = createSprite (650,420,20,20);
	dustbinS.addImage(dustbinSImg);
	dustbinS.scale = 0.5;


	Engine.run(engine);
	world = engine.world;
	
	wall3Body = Bodies.rectangle(650,500,200,20);
	World.add(world,wall3Body);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  paper.display();
  ground.display();
  keyPressed (); 
  drawSprites();
 
}

function keyPressed (){

	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});
	}
}

