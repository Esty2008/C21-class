var m;
var f;
var ball;
var box;

function setup() {
  createCanvas(800,400);
  f = createSprite(400, 200, 50, 50);
   m = createSprite(600, 200, 100, 100);
   ball = createSprite(100,100,20,20);
   box = createSprite(100,300,40,40);
   
   box.shapeColor = 'brown';
   ball.shapeColor = 'blue';
 
   //ball.velocityX = 3;
   //box.velocityX = -3;

   ball.velocityY = 3;
   box.velocityY = -3;
  }

function draw() {
  background("lightblue");  
  
  m.y = World.mouseY;
  m.x = World.mouseX;



 bounce(ball,box);
 if (isTouching(m,f)){
  m.shapeColor = "red";
  f.shapeColor = "red"; 
 }else{
  m.shapeColor = "grey";
  f.shapeColor = "grey"; 
 }

  drawSprites();
}

