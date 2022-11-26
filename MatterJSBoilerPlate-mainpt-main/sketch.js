
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var quad
var circ
var retang
var engine
var world

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	
	let pquad = {
		restitution:0.7,
		friction:0.5,
		frictionAir:0.2}
	let pcirc = {
		restitution:0.4,
		friction:0.4,
		frictionAir:0.5}
	let pretang = {
		restitution:0.9,
		friction:0.3,
		frictionAir:0.1}
	
	
	quad = Bodies.rectangle(230,60,70,70,pquad)
	circ = Bodies.circle(80,50,70,pcirc)
	retang = Bodies.rectangle(300,30,60,30,pretang)
	World.add(world,quad)
	World.add(world,circ)
	World.add(world,retang)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 fill("palegreen")
 ellipse(circ.position.x,circ.position.y,70,70)
 fill("limegreen")
 rect(quad.position.x,quad.position.y,70,70)
 fill("green")
 rect(retang.position.x,retang.position.y,60,30)


}



