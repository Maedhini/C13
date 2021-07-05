var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf;
var appleimg,leafimg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
 // appleimg = loadImage("apple.png");
 // leafimg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  if(keyDown("right")){
    rabbit.x=rabbit.x+4
  }

  if(keyDown("left")){
    rabbit.x=rabbit.x-4
  }

  spawnfood();


  drawSprites();
}

function spawnapples(){
  if(frameCount % 60==0){
  apple=createSprite(30,100,20,20)
  apple.x=Math.round(random(50,340))
  apple.shapeColour="red"
  //apple.addImage("a1",appleimg)
  apple.scale=0.5;
  apple.velocityY=3;
  apple.lifetime=90
 }

}
function spawnleaf(){
  if(frameCount % 60==0){
  leaf=createSprite(90,100,20,20)
  leaf.x=Math.round(random(50,340))
  leaf.shapeColour="green"
  //apple.addImage("a1",appleimg)
  leaf.scale=0.5;
  leaf.velocityY=3;
  leaf.lifetime=90
 }

}

function spawnfood(){
  var select_sprite=Math.round(random(1,2))
  if(frameCount % 80==0){
    if(select_sprite==1){
      spawnapples();
    }else{
      spawnleaf();
    }
  }
}