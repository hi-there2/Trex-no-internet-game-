var trex
var trexImage
var ground
var groundImage

function preload(){
  trexImage=loadAnimation("trex1.png","trex3.png","trex1.png","trex4.png");
  groundImage=loadImage("ground2.png");
}

function setup(){
  createCanvas(1200,400);

  trex=createSprite(120,350)
  trex.addAnimation("trexImage",trexImage);
  trex.scale=0.5;

  ground=createSprite(600,360,1200,12);
  ground.addImage("groundImage",groundImage);
  ground.velocityX=-5

}

function draw(){
  background("white");

  if (keyDown(UP_ARROW) && trex.y>345 || keyDown("space") && trex.y>345){
    trex.y=trex.y-15
    trex.velocityY=-12
  }

  trex.velocityY=trex.velocityY+0.8
  
  if (trex.collide(ground)){
    trex.y=trex.y+15
  }

  if (ground.x<0){

    ground.x=ground.width/2;

  }

  drawSprites();
}

