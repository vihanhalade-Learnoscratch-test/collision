var fixedRect, movingRect;
var width =1600-64
var height = height*2-50+3
function setup() {
  createCanvas(1600-64, height*2-50+3);
  fixedRect = createSprite(width/2, height/2+-20, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);

}

function draw() {
  background("lightBlue");
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2 &&
      fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2 &&
      movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
      fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";

  }
  drawSprites();
}
