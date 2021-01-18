
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject,groundObject;	
var world;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	dustbinObj = new Dustbins(700,695,20,20);
	
	groundObject = new Ground(400,700,800,20);
	
	ball = new CrumpledPaper(300,300);


	Engine.run(engine);
  
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	  Render.run(render);
	
}

 function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  dustbinObj.display()
  groundObj.display();
  ball.display();


 
}
function keypressed () {
	if (keyCode===Up_Arrow) {
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})}   
Matter.Body.circle(300,300,options,20,20)   
 }


