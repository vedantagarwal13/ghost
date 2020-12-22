var tower,towerImage;
var door,doorImage,doorGroup;
var ghost,ghostImage;
var climber,climberImage,climberGroup;
var invisibleClimber,invisibleClimberGroup;
var spookySound;
var gameState="play";




function preload(){
  towerImage = loadImage("tower.png");
  ghostImage = loadImage("ghost-standing.png");
  doorImage = loadImage("door.png");
  climberImage = loadImage("climber.png");
  spookySound = loadSound("spooky.wav");
  
}
function setup(){
  createCanvas(600,600);
  tower = createSprite(250,300,20,400);
  tower.addImage("background",towerImage);
  tower.velocityY=6;
  
  ghost = createSprite(300,100,20,20);
  ghost.addImage("bhoot",ghostImage);
  ghost.scale=0.4;
  ghost.debug=false;
  
  
  doorGroup = new Group();
  climberGroup = new Group();
  invisibleClimberGroup = new Group();
  
}
function draw(){
  background("white");
  if (gameState=="play"){
    
  
    
  
  if(tower.y>600){
    tower.y=300;
  }
  if(keyDown("right_Arrow")){
   ghost.x=ghost.x+4;
  }
  if(keyDown("left_Arrow")){
   ghost.x=ghost.x-4;
  }
  if(keyDown("space")){
    ghost.velocityY=-5;
  }
  ghost.velocityY=ghost.velocityY+0.7;
  
  
  
  doors();
    
    ghost.collide(climberGroup);
    
    if(ghost.isTouching(invisibleClimberGroup)||ghost.y>600){
      gameState="end";
    }
    //spookySound.play();
  
  drawSprites();
    
}
  if(gameState=="end"){
    ghost.velocityY=0;
    doorGroup.velocityY=0;
    climberGroup.velocityY=0;
    invisibleClimberGroup.velocityY=0;
    
    ghost.lifetime=-1;
    doorGroup.lifetime=-1;
    climberGroup.lifetime=-1;
    invisibleClimberGroup.lifetime=-1;
    
    background("black");
    textSize(40);
    fill("yellow");
    text("GAME OVER",200,300);
  }
}
function doors(){
if(frameCount%80==0){
  door = createSprite(300,10,10,10);
  door.addImage("door",doorImage);
  door.x=Math.round(random(100,400));
  door.velocityY=6;
  
  climber = createSprite(300,60,10,10);
  climber.addImage("climber",climberImage);
  climber.x=door.x;
  climber.velocityY=6;
  
  invisibleClimber = createSprite(300,70,60,10)
 invisibleClimber.x=door.x;
  invisibleClimber.velocityY=6;
  invisibleClimber.visible=true;
  
  door.lifetime=120;
  climber.lifetime=120;
  invisibleClimber.lifetime=120;
  
  doorGroup.add(door);
  climberGroup.add(climber);
  invisibleClimberGroup.add(invisibleClimber);
  
  ghost.depth=door.depth;
  ghost.depth=door.depth+1
  
}
  





}
