var bullet;
var wall,thickness;
var speed,wieght;

function setup() {
  createCanvas(1600,400);
  thickness = Math.round(random(22,83));
 wall = createSprite(1400, 200,thickness,300);
 bullet = createSprite(0, 200,25,10);
 wall.shapeColor = ("black");
 speed = Math.round(random(223,321));
 wieght = Math.round(random(30,52));
 bullet.velocityX = speed;
}

function draw() {
  background("darkBlue");
  
 if(is(wall,bullet)){
   bullet.velocityX = 0;
 
   var deform = 0.5* wieght * speed *speed / (thickness * thickness * thickness);

if (deform>10){
  wall.shapeColor=color(255,0,0);
}
if (deform<10){
  wall.shapeColor=color(0,255,0);
}

}
   
  drawSprites();

}
