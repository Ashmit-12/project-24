
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(1200, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,650,1200,20);

	paper = new Paper(50,200,10);
	 
	dustbin1= new Dustbin(740,550,20,250);
	dustbin2 = new Dustbin(1055,420,20,450);
	dustbin3= new Dustbin(900,650,300,20);

	Engine.run(engine);
  console.log(engine);
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites()
 
//}



//function KeyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.4,y:-2.4});
	}
}
