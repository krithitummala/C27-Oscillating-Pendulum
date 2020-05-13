const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bar,ball,ball2,ball3,chain,chain2,chain3,ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();  
  bar = new Bar();
  ball = new Ball(200,300,30);
  ball2 = new Ball(400,300,30);
  ball3 = new Ball(600,300,30);
  chain = new Chain({x:200,y:100},ball.body);
  chain2 = new Chain({x:400,y:100},ball2.body);
  chain3 = new Chain({x:600,y:100},ball3.body);
}


function draw() {
  background("black"); 
  Engine.update(engine);

  textSize(17);
  fill("lightyellow")
  text("Drag mouse to oscillate the pendulum to left and right with mouse",150,30);
  text("Press Enter to stop the Pendulum from oscillating",215,60);

  ground.display();
  bar.display();
  ball.display();
  ball2.display();
  ball3.display();
  chain.display();
  chain2.display();
  chain3.display();

  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  Matter.Body.setPosition(ball2.body, {x: mouseX +200, y: mouseY});
  Matter.Body.setPosition(ball3.body, {x: mouseX+400 , y: mouseY});
  Matter.Body.setStatic(ball.body, false);
  Matter.Body.setStatic(ball2.body, false);
  Matter.Body.setStatic(ball3.body, false);
}
function keyPressed(){
if(keyCode=ENTER){
  Matter.Body.setStatic(ball.body, true);
  Matter.Body.setStatic(ball2.body, true);
  Matter.Body.setStatic(ball3.body, true);
  
}
}
