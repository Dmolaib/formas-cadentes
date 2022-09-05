
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
block1 = body.rectangle(100,50,10,10,block1_options)
block2 = body.circle(50,100,10,10,block2_options)
block3 = body.square(50,50,10,10,block3_options)
block1_options = {
restitution:0.5,
friction:0.25,
frictionAir:0.75,
}
block2_options = {
restitution:0.6,
friction:0.35,
frictionAir:0.85,
}
block3_options = {
restitution:0.7,
friction:0.45,
frictionAir:0.95,

}


  function draw()
  { background("lightgreen");
   Engine.update(engine); 
 rect(plane.position.x,plane.position.y,1200);
   ellipse(block1.position.x,block1.position.y,30);
 rect(block2.position.x,block2.position.y,50,50) 
  rect(block3.position.x,block3.position.y,100,50) }
}



