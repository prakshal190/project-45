var bg,bgImg,player,shooterImg,shooter_shooting,zombie,zombieImg;
var heart_1,heart_2,heart_3,heart_1Img,heart_2Img,heart_3Img,zombieGroup;

function preload(){
  heart_1Img = loadImage("assets/heart_1.png");
  heart_2Img = loadImage("assets/heart_2.png");
  heart_3Img = loadImage("assets/heart_3.png");
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  zombieImg = loadImage("assets/zombie.png");
  bgImg = loadImage("assets/bg.jpeg");
}

function setup() {
	createCanvas(800, 700);

	createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale = 1.1;
  
}


function draw() {
  
  background(0);
  
  drawSprites();
 
}



