var bullet, wall ;
var weight, speed, thickness;

function setup() {
  createCanvas(1600,400);
  thickness = random(22, 82)
  speed = random(55, 90);
  weight = random(400, 1500);
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, 800);
  wall.shapeColor = "yellow";
  bullet.velocityX = speed; 
 weight = random(30 , 52);
 speed = random(223 ,321);
 
}
function draw() {
  background("indigo");
  
  if (bullet.x - wall.x < wall.width/2 + bullet.width/2

    && wall.x - bullet.x < wall.width/2 + bullet.width/2

    && bullet.y - wall.y < wall.height/2 + bullet.height/2

    && wall.y - bullet.y < wall.height/2 + bullet.height/2) {
    
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    }
if (damage>10){
  wall.shapecolor = "red";
}
if(damage<10){
  wall.shapeColor = "green";
}
console.log(damage);
drawSprites();
}