var bullet,wall;
var bullet2,wall2;
var bullet3,wall3;
var bullet4,wall4;
var Cline;
var Cline2;
var Cline3;
var speed,weight;
var speed2,weight2;
var thickness,speed3,speed4;
function setup() {
  createCanvas(1600,400);
  Cline=createSprite(70,100,3200,5);
  Cline.shapeColor="white";
  Cline2=createSprite(70,200,3200,5);
  Cline2.shapeColor="white";
  Cline3=createSprite(70,300,3200,5);
  Cline3.shapeColor="white";
  speed=random(10,10);
  thickness=random(22,83);
  weight=random(222,1300);
  speed2=random(10,10);
  speed3=random(5,5);
  speed4=random(10,10);
  weight2=random(222,1300);
  bullet=createSprite(100,50,20,8);
  bullet.shapeColor="white";
  bullet2=createSprite(100,150,20,8);
  bullet2.shapeColor="yellow";
  bullet3=createSprite(100,250,20,8);
  bullet3.shapeColor="red";
  bullet4=createSprite(100,350,20,8);
  bullet4.shapeColor="green";
  wall=createSprite(1500,50,10,height/8);
  wall.shapeColor=color("white");
  wall2=createSprite(1500,150,10,height/8);
  wall2.shapeColor=color("white");
  wall3=createSprite(1500,250,10,height/8);
  wall3.shapeColor=color("white");
  wall4=createSprite(1500,350,10,height/8);
  wall4.shapeColor=color("white");
  bullet.velocityX=speed;
  bullet2.velocityX=speed2; 
  bullet3.velocityX=speed3;
  bullet4.velocityX=speed2;
}

function draw() {
  background("black");  
 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    bullet.shapeColor="white";
    var damage=0.5*weight*speed*speed/22509;
    if(damage>180)
    {
      wall.shapeColor=color("red");
    }
    if(damage<180 &&damage>100)
    {
      wall.shapeColor=("red");
    }
    if(damage<100)
    {
      wall.shapeColor=("red");
    }
    console.log();
  }
   
  if(wall2.x-bullet2.x<(bullet2.width+wall2.width)/2)
  {
    bullet2.velocityX=0;
    bullet2.shapeColor="yellow";
    var damage=0.5*weight*speed*speed/22509;
    if(damage>180)
    {
      wall2.shapeColor=color("red");
    }
    if(damage<180 &&damage>100)
    {
      wall2.shapeColor=("red");
    }
    if(damage<100)
    {
     wall2.shapeColor=("red");
    }
    console.log();
  }
   
  if(wall3.x-bullet3.x<(bullet3.width+wall3.width)/2)
  {
    bullet3.velocityX=0;
    bullet3.shapeColor="red";
    var damage=0.5*weight*speed*speed/22509;
    if(damage>180)
    {
      wall3.shapeColor=color("green");
    }
    if(damage<180 &&damage>100)
    {
      wall3.shapeColor=("green");
    }
    if(damage<100)
    {
      wall3.shapeColor=("green");
    }
    console.log();
  }
  if(wall4.x-bullet4.x<(bullet4.width+wall4.width)/2)
  {
    bullet4.velocityX=0;
    bullet4.shapeColor="green";
    var damage=0.5*weight*speed*speed/22509;
    if(damage>180)
    {
      wall4.shapeColor=color("red");
    }
    if(damage<180 &&damage>100)
    {
      wall4.shapeColor=("red");
    }
    if(damage<100)
    {
      wall4.shapeColor=("red");
    }
    console.log();
  }
  drawSprites();
}