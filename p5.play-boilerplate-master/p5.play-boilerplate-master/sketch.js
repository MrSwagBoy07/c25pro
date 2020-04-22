/*var fixedob,movingob;
function setup() {
  createCanvas(800,400);
  fixedob=createSprite(400, 200, 50, 80);
  movingob =createSprite(200,200,80,50);
 fixedob.shapeColor="yellow";
 movingob.shapeColor="yellow";
 fixedob.velocityX=-7;
 movingob.velocityX=7;
}*/

function preload() {
  backgroundImg = loadImage("rainDroup.jpg");
}


function draw() {
  background(backgroundImg);  
 //ob1.x=World.mouseX;
 // ob1.y=World.mouseY;
  

  /*bounceoff(movingob,fixedob);
  if (isTouching(movingob,fixedob)){
    fixedob.shapeColor="red";
 movingob.shapeColor="red";
  }
  else{
    fixedob.shapeColor="yellow";
 movingob.shapeColor="yellow"; 
  }*/
 drawSprites();
    }
   