const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var t1,t2,t3,t4
var tGroup
var rain=[]
var maxDrops=100
function preload(){
    t1=loadImage("1.0.png")
    t2=loadImage("2.png")
    t3=loadImage("3.png")
    t4=loadImage("3.png")
}

function setup(){
  canvas=createCanvas(400,700)
  engine = Engine.create();
  world = engine.world;

  man=new Umbrella(200,500,200,400)
  
  if(frameCount%200===0){
  for(var i=0; i<maxDrops; i++){ 
  rain.push(new Dro(random(0,400),random(0,480)))};
  }
  tGroup=createGroup();
}

function draw(){
  Engine.update(engine)
  background(0)
  for(var i = 0; i<maxDrops; i++){ rain[i].showDrop(); rain[i].updateY() }
  man.display();
  spawnLightning();

} 

function spawnLightning(){
  if (frameCount % 500 === 0){
    var obstacle = createSprite(600,165,10,40);
    
     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: obstacle.addImage(t1);
               break;
       case 2: obstacle.addImage(t2);
               break;
       case 3: obstacle.addImage(t3);
               break;
       case 4: obstacle.addImage(t4);
               break;
       default: break;
     }
     obstacle.scale = 0.5;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     tGroup.add(obstacle);
  }
}   
