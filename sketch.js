
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	ret1 = new Box(700, 645, 100, 20);
	ret2 = new Box(650, 620, 20, 45);
	ret3 = new Box(750, 620, 20, 45);
	circ1 = new circ(50, 350, 20);

	ground = Bodies.rectangle(400, 650, 800, 10, {isStatic:true} );
 	World.add(world, ground);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  Engine.update(engine);

  rect(ground.position.x, ground.position.y, 800, 10);
  circ1.display();
  ret1.display();
  ret2.display();
  ret3.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(circ1.body, circ1.body.position,{x:45,y:-45});
	}
}