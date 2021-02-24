var garden;
var gardenImg;

var cat;
var catImg1;
var catImg2;
var catImg3;

var mouse;
var mouseImg1;
var mouseImg2;
var mouseImg3;


function preload() {
    gardenImg = loadImage("images/garden.png");

    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png")

    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1500,800);
    
    garden = createSprite(500, 400, 1000, 800);
    garden.addImage("garden", gardenImg);
    garden.scale = 1.25;

    cat = createSprite(950, 600);
    cat.addAnimation("sitting", catImg1);
    cat.scale = 0.2;
    cat.setCollider("rectangle", 0, 0, 700, 700);

    mouse = createSprite(200, 600);
    mouse.addAnimation("standing", mouseImg1);
    mouse.scale = 0.15;
    mouse.setCollider("rectangle", 0, 0, 700, 700);
}

function draw() {

    background(255);
    
    keyPressed();

    if(cat.x - mouse.x === 0){
        cat.addAnimation("catstanding", catImg3);
        cat.changeAnimation("catstanding", catImg3);
        cat.x = 400;
        cat.scale = 0.3;
        cat.velocityX = 0;

        mouse.addAnimation("looking", mouseImg3);
        mouse.changeAnimation("looking", mouseImg3);
    }

    drawSprites();
}


function keyPressed(){

  if(keyDown("left")){
      cat.velocityX = -5;
      cat.addAnimation("running", catImg2);
      cat.changeAnimation("running", catImg2);
      cat.scale = 0.3;

      mouse.addAnimation("teasing", mouseImg2);
      mouse.changeAnimation("teasing", mouseImg2);
  }
}
