var Runner,Runner_1,Runner_2,pathpng,path
function preload(){
  //pre-load images
  Runner = loadAnimation("Runner-1.png",("Runner-2.png"))
 path=loadImage("path.png")
 
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.velocityY=5
  path.y=path.height/30

  runner=createSprite(180,340,50,170)
  runner.addAnimation("Runner-1.png,Runner-2.png")

  left_boundary=createSprite(0,300,100,600)
  right_boundary=createSprite(390,300,80,600)
  left_boundary.visible=false
  right_boundary.visible=false
}

function draw() {
  background(0);
  path.velocityY=5
  if(path.y>400){
path.y=height/2
  }  

runner.collide(left_boundary)
runner.collide(right_boundary)
edges=createSprite=createEdgeSprites()
runner.collide(edges[3])

drawSprite;
}
