const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree;
var ground;
var boy;
var stone;
var mango1,mango2,mango3,mango4,mango5;
var string;
var wall;
function preload()
{

}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here
	tree=new Tree(600,450)
	ground=new Ground(400,675,800,50);
	stone=new Stone(200,350,50);
	boy= new Boy(200,590,150,300);
	mango1=new Mango(600,220,40);
	mango2=new Mango(640,350,40);
	mango3=new Mango(680,280,40);	
	mango4=new Mango(720,350,40);
	mango5=new Mango(520,330,40);	
	string=new rope(stone.body,{x:150,y:500});
	


	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(255);
  ground.display();
  tree.display();
  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  string.display();
  
  	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}



