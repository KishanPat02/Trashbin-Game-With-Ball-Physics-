
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;
var fan1,fan2,fan3,fan4
var angle=60;
var ground1

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
  
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  

  ball = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball);
  var ground_options = {
    isStatic:true
  }
 
  ground1 = Bodies.rectangle(0,400,400,20,ground_options);
  World.add(world,ground1); 
  fan1=new Ground(50,370,50,30)
  fan2=new Ground(150,370,50,30)
  fan3=new Ground(250,370,50,30)
  fan4=new Ground(350,370,50,30)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  


 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground1.position.x,ground1.position.y,750,20);
 
//console.log(ground.position.y);
fan1.display();
fan2.display();
fan3.display();
fan4.display();
Engine.update(engine);
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  