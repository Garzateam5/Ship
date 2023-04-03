  var SeaImg , Sea;
  var ShipImg,Ship  

  function preload(){
    SeaImg = loadImage("sea.png");
    ShipImg = loadAnimation("ship-4.png","ship-2.png")
  }

  function setup(){
    createCanvas(400,400);  
    Sea = createSprite(200, 1, 400, 400);
    Sea.addAnimation("SeaAnimation", SeaImg)
    Ship = createSprite(100,265,100,100)  
    Ship.addAnimation("ShipAnimation", ShipImg)
    Ship.scale = 0.12
  }

  function draw() { 
    background(rgb(43,235,216));
    
    if (Sea.x <0) {
      Sea.x=Sea.width/2;
    }
    Sea.velocityX = -4;
    drawSprites();
  }