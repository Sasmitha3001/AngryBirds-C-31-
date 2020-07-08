const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;

var ground,platform;

var pig1,pig2;

var bird;
var log1,log2,log3,log4,log5;

var backgroundimage
var chain ;

var gameState="onSling";
function preload(){
    backgroundimage=loadImage("Sprites/bg.png")

    
}



 



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    box1= new Box(700,320,70,70);
    box2= new Box(920,320,70,70);
    box3= new Box(700,240,70,70);
    box4= new Box(920,240,70,70);
    box5= new Box(810,160,70,70);

    ground= new Ground(600,390,1200,20);
    platform= new Ground(150,305,300,170);


    pig1=new Pig(810,350);
    pig2=new Pig(810,220);

    bird=new Bird(200,50);

    log1= new Log(810,260,300,PI/2);
    log2= new Log(810,180,300,PI/2);
    log3= new Log(760,120,150,PI/7);
    log4= new Log(870,120,150,-PI/7);
    

    chain=new Chain(bird.body,{x:200,y:50});

    



    

  
    
}

function draw(){
    background(backgroundimage);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    pig1.display();
    pig2.display();

    bird.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
   

    platform.display();
    
    chain.display();
    

    

    
}

function mouseDragged(){
    if(gameState!=="launched"){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
    }
    

}
function mouseReleased(){
    chain.fly();
    gameState="launched";

}
function keyPressed(){
    if(keyCode===32){
        chain.attach(bird.body);

    }
}