var ball, left, right, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800,700);

	var ball_options = {
		isStatic: false,
		resitution: 0.3,
		friction: 0,
		density: 1.2
	}

	engine = Engine.create();
	world = engine.world;
	ball = Bodies.circle(50,100,20,ball_options);
	World.add(world,ball)
	//Create the Bodies Here.
ground = new Ground(400,650,800,20)
left = new Ground(630,614,20,50)
right = new Ground(720,614,20,50)
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);
	ground.display();
	left.display();
	right.display();
	ellipse(ball.position.x,ball.position.y,20,20);
	drawSprites();
	Engine.update(engine);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {	
		Matter.Body.applyForce(ball,ball.position,{x:70,y:-60})
	}
}

