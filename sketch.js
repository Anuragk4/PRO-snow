const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bgImg;
var A;
var img;
function preload(){
  bgImg=loadImage("snow1.jpg")
  boyimg=loadImage("boy2.png")
  img=loadImage("snow4.webp")

}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  A=createSprite(400, 320, 25, 160);
 B= createSprite(300,320,20,160)
 snow7= new Snow(150,10)
 snow1= new Snow(70,10)
 snow2= new Snow(200,10)
 snow3= new Snow(250,10)
 snow4= new Snow(300,10)
 snow5= new Snow(350,10)
 snow6= new Snow(400,10)
 snow8=new Snow(450,10)
}


function draw() {
  background(bgImg);  
  Engine.update(engine);

 
  
 snow1.display()
 snow2.display()
 snow3.display()
 snow4.display()
 snow5.display()
  snow6.display()
snow7.display()
snow8.display()



  drawSprites();
}


function keyPressed(){
  if(keyCode === 37){
  
  A.velocityX=-5        
B.velocityX=-5        
  
  console.log(keyPressed)

}
if(keyCode === 32){
  
  A.velocityY=-7
   
  B.velocityY=-6
  
  console.log(keyPressed)
}
if(keyCode === 39){
  
  A.velocityX=5
  B.velocityX=6
  console.log(keyPressed)
}
}

function play() {
  var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  audio.play();
}
