const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16;
var box17,box18,box19;
var box20,box21;
var box22,box23,box24,box25;

var ground,ground2,ground3;

var slingshot;

var polygon;
var polygon_img;

var backgroundImg;

function preload(){
  polygon_img = loadImage("polygon.png");

  getBackgroundImage();
}
async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson = await response.json();
  var time = responseJson.datetime;
  var hour = time.slice(11,13);
if(hour>=06 && hour<=19){
  bg= "bg.PNG"
}

else{
  bg = "bg1.PNG"
}

backgroundImg = loadImage(bg);
}

function setup(){
    createCanvas(1000,500);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;
    
    //create ground
    ground = new Ground(100,450,2000,20);
    ground2 = new Ground(750,175,250,20);
    ground3 = new Ground(450,350,250,20);
    
    //create blue box
    box1 = new Box(390,327,30,30);
    box2 = new Box(410,327,30,30);
    box3 = new Box(430,327,30,30);
    box4 = new Box(450,327,30,30);
    box5 = new Box(470,327,30,30);
    box6 = new Box(490,327,30,30);
    box7 = new Box(510,327,30,30);

    //create pink box
    box8 = new Box(410,302,30,30);
    box9 = new Box(430,302,30,30);
    box10 = new Box(450,302,30,30);
    box11 = new Box(470,302,30,30);
    box12 = new Box(490,302,30,30);

    //create blue box
    box13 = new Box(430,277,30,30);
    box14 = new Box(450,277,30,30);
    box15 = new Box(470,277,30,30);

    //create pink box
    box16 = new Box(450,252,30,30);

    //create blue box
    box17 = new Box(725,150,30,30);
    box18 = new Box(755,150,30,30);
    box19 = new Box(780,150,30,30);
    box20 = new Box(795,150,30,30);
    box21 = new Box(700,150,30,30);

    //create pink box
    box22 = new Box(720,120,30,30);
    box23 = new Box(745,120,30,30);
    box24 = new Box(755,120,30,30);
    box25 = new Box(770,120,30,30);

    //create blue box
    box26 = new Box(730,95,30,30);
    box27 = new Box(755,95,30,30);
    box28 = new Box(770,95,30,30);

     //create pink box
     box29 = new Box(750,80,30,30);

 // r1 = new Rectangle(150,250,30,30);
   polygon = Bodies.rectangle(50,200,20,20);
   World.add(world,polygon);
    slingshot = new Slingshot(polygon,{x:180,y:290});
    
}

function draw(){
    
  if(backgroundImg){
    background(backgroundImg);
  }

    Engine.update(engine);

    //display all th boxes and ground.
    strokeWeight(2);
    stroke(15);
   ground.display();
   ground2.display();
   ground3.display();

    stroke(15);
    fill ("blue")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    stroke(15);
    fill ("pink")
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    stroke(15);
    fill ("blue")
    box13.display();
    box14.display();
    box15.display();

    stroke(15);
    fill ("pink")
    box16.display();

    stroke(15);
    fill ("blue")
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    stroke(15);
    fill ("pink")
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    stroke(15);
    fill ("blue")
    box26.display();
    box27.display();
    box28.display();

    stroke(15);
    fill ("pink")
    box29.display();

  //  r1.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }

  function mouseReleased(){
    slingshot.fly();
  }
  
  function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
  }