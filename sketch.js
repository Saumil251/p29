const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score=0
function setup() {
  createCanvas(800,700);
  stroke("brown")
  
  engine = Engine.create();
  world = engine.world;
 ground1= new Ground(400,700,1200,30)
 ground2= new Ground(500,600,200,10)
 box1=new Box(450,585,20,20)
 box2=new Box(475,585,20,20)
 box3= new Box(500,585,20,20)
 box4=new Box(525,585,20,20)
 box5=new Box(550,585,20,20)
 box6=new Box(470,563,20,20)
 box7= new Box(500,563,20,20)
 box8= new Box(530,563,20,20)
 box9= new Box(500,541,20,20)
 polygon1= new Polygon(100,500)
 chain1=new Chain(polygon1.body,{x:100,y:500})
Engine.run(engine)
}

function draw() {
 
  background(0);  
  Engine.update(engine);
  
  console.log(score)
  textSize(35)
  fill("white")
  text("score:"+ score,650,50)
  ground1.display()
  ground2.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box1.score()
  box2.score()
  box3.score()
  box4.score()
  box5.score()
  box6.score()
  box7.score()
  box8.score()
  box9.score()

  polygon1.display()
chain1.display()
 
  




  drawSprites();
 
}

function mouseDragged(){
    
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
    
}

 
function mouseReleased(){
    
    chain1.fly();
}
  function keyPressed(){
if(keyCode==32){
  chain1.attach(this.polygon1.body)
}

  }
