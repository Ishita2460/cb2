var paper,ground,box1,box2,box3,box4,box5,box6;
var paperimg,dustbinimg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload(){

paperimg = loadImage("paper.png");
dustbinimg=loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	

	//box1=createSprite(900,650,200,20);
	//box1.shapeColor=color(225,0,0);

	//box2=createSprite(990,620,20,100);
	//box2.shapeColor=color(225,0,0);
	
    //box3=createSprite(810,620,20,100);
	//box3.shapeColor=color(225,0,0);

	box4=Bodies.rectangle(900,650,200,20, {isStatic:true} );
	World.add(world, box4);
	

	box5=Bodies.rectangle(990,620,20,150, {isStatic:true} );
	World.add(world, box5);
	
	

	box6=Bodies.rectangle(810,620,20,150, {isStatic:true} );
	World.add(world, box6);

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 var paper_options= {
		restitution:0.3,
		isStatic : false,
		friction : 0.5,
		density : 1.2
	}
		paper = Bodies.circle(200,100,20,paper_options);
		World.add(world,paper);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

    Engine.update(engine);
	imageMode(CENTER)
	image(dustbinimg , 900,550,200,200);
	image(paperimg , paper.position.x,paper.position.y,40,40);
	
   // ellipseMode(RADIUS)
    //ellipse(paper.position.x,paper.position.y,20,20)

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper,paper.position,{x:75 , y:-75});
	  }
	}
