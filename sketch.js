var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var polygonI;
  var a;
var circles=[];
function preload(){
polygonI = loadImage('polygon.png');
}
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  stroke(255)
  ground =new Ground(50,50,100,20);
  stand = new Ground(100,100,50,20);
  //level 1
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level 2
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);  
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level 3
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //level 4 and the top 
  block16 = new Block(390,155,30,40);

  // the polygon
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
 Engine.update(engine);
  imageMode(CENTER)
  image(polygonI,200,200,40,40)

  // the slingshot
slingshot = new Slingshot(this.polygon, {x:100, y:200});

  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 