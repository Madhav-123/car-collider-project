var car, wall;
var speed, weight;
function setup() {
  createCanvas(1400,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite (1200, 200, 60, 100);
  speed=random(55,90);
  weight=random(400,1500);
  
}

function draw() {

  background("black");  
  car.velocityX=0;
  
if(keyDown("space")){
  colour()
  car.velocityX = speed;
}
if(car.isTouching(wall)){
  car.velocityX=0
}
text("hold space",700,50)
  drawSprites();
}
function colour(){
  if (wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if (deformation>180) {
    car.shapeColor = "red";
    }
    if (deformation<180 && deformation>100) {
    car.shapeColor = "yellow";
    }
    if (deformation<100) {
    car.shapeColor = "green";
    }
  } 
  
}