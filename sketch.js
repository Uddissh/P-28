
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var stone;
var tree;
var boy;
var boyIMG;
var treeIMG;
var blah;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;

function preload()
{
	boyIMG = loadImage("sprites/boy.png");
	treeIMG = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(850, 680, 1700, 20);
	//tree = new Tree(1350, 450, 500, 500);
	//boy = new Boy(200, 610, 180, 250);
	stone = new Stone(204, 580, 10);
	blah = new Rope(stone.body, {x : 150, y : 550});
	mango1 = new Mango(1250, 280, 10);
	mango2 = new Mango(1300, 380, 10);
	mango3 = new Mango(1250, 370, 10);
	mango4 = new Mango(1400, 370, 10);
	mango5 = new Mango(1500, 380, 10);
	mango6 = new Mango(1360, 305, 10);
	mango7 = new Mango(1400, 280, 10);

	Engine.run(engine);
  
}


function draw() {
	
  background("yellow");


        imageMode(CENTER);
		image(boyIMG, 200, 610, 180, 250);
		
        imageMode(CENTER);
		image(treeIMG, 1350, 450, 500, 500);

		detectollision(stone, mango1);
		detectollision(stone, mango2);
		detectollision(stone, mango3);
		detectollision(stone, mango4);
		detectollision(stone, mango5);
		detectollision(stone, mango6);
		detectollision(stone, mango7);

	 ground.display();
	 //tree.display();
	 stone.display();
	  //boy.display();
	  blah.display();
	  mango1.display();
	  mango2.display();
	  mango3.display();
	  mango4.display();
	  mango5.display();
	  mango6.display();
	  mango7.display();

	  drawSprites();
	
 
}


function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}


function mouseReleased() {
    blah.fly();
}

function detectollision(lstone,lmango) {
	var mangoBodyPosition = lmango.body.position;
	var stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	//console.log(distance)
	if (distance <= lmango.radius + lstone.radius) {
		Matter.Body.setStatic(lmango.body, false);
	}

}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x:235, y:420})
		blah.attach(stone.body);
	}
}