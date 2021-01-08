var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");

}

function setup() {

	createCanvas(800, 700);
	rectMode(CENTER);
	
	package = createSprite(400, 100, 10,10);
	package.addImage(packageIMG)
	package.scale = 0.2;

	helicopter = createSprite(400, 100, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale = 0.6;

	ground = createSprite(400, 700, 800,10);
	ground.shapeColor = "white";
  
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 , 100 , 5 , { isStatic:true });
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(400, 0, 800, 10 , { isStatic:true } );
 	World.add(world, ground);

 	boxPosition = 400-100
 	boxY = 610;

 	boxleft=createSprite(boxPosition, boxY, 20,100);
 	boxleft.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleft=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleft.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);
  background(0);
 
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 

  drawSprites();
  
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {

	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.setStatic(packageBody,false);
	   
	 }

}   