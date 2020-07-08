var thickness,wall;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,331);
  weight=random(30,52);
  bullet = createSprite(50,200,50 ,50);
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  thickness=random(22,83);
}

function draw() {
  background(255,255,255);  
  
  if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5*speed*weight*speed/(thickness*thickness*thickness);
   if(damage>10){
     bullet.shapeColor=("red");
   }
   if(damage<10){
    bullet.shapeColor=("blue");
  }

  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lwall.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
return true

}
return false;
}