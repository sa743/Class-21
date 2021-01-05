var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(800, 100, 50, 80);
  movingRect = createSprite(800, 400, 80, 30);

  //fixedRect = createSprite(600, 400, 50, 80);
  //movingRect = createSprite(800, 400, 80, 30);
  
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";


  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";

  
  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;

  /*movingRect.velocityX = -5;
  fixedRect.velocityX = 5;*/

  //gameObject1.velocityX = -5;
  //gameObject4.velocityX = 5;

}

function draw() {
  background(255,255,255);
  
  //gameObject2.x = World.mouseX;
  //gameObject2.y = World.mouseY;



bounceOff(movingRect,fixedRect);

if(isTouching(gameObject2,gameObject3)){
  gameObject2.shapeColor = "red";
  gameObject3.shapeColor = "red";
} else{
  gameObject2.shapeColor = "yellow";
  gameObject3.shapeColor = "yellow";
}
  drawSprites();
}

