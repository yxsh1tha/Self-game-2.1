
var bus;
var bus_moving = false;
var play = 1;
var end =0;
var GameState = play;
var van_moving = true;
function preload(){
  track = loadImage("road.png")
  //back = loadImage("green_back.png")
  Himg = loadImage("H1.png")
  busmoving = loadAnimation("bus1.png","bus2.png","bus3.png","bus4.png")
  busImg = loadImage("bus1.png")
  //phone = loadImage("phone.png");
  school_img = loadImage("school.png");
  van_img = loadAnimation("va1.png","van2.png","van3.png","van4.png","van5.png");
  //blast_img =loadImage("blast.png");
}

function setup(){
  createCanvas(1200,600);
  database = firebase.database();
  bus = createSprite(50,910,20,20)
  bus.addImage("im",busImg)
  bus.addAnimation("moving",busmoving);
  bus.scale = 0.3;
  bus.x = -width*5+320;
  bus.debug = true;
 
  //back1 = createSprite(-width*4+500,height/2+92)
  //back1.addImage(back);
  //back1.scale = 2.1;
  house = createSprite(-width*5+10,850,20,20)
  house.addImage(Himg)
  house.scale = 0.9;
 

}
function draw(){
  background("pink");

  
    image(track,-width*5,850,width*7,120);
    //image(back,-width*6,300,width*8,630);
    //image(phone,-width*6,600,100,100);
    camera.position.x = bus.x+250;
    camera.position.y = bus.y-230;

     // Play state

     if(GameState===play){ 

     //change Animation to bus

       if(bus_moving){
         bus.changeAnimation("moving")
      }
      else{
         bus.changeAnimation("im")
      }

    //control bus using arrow keys

      if(keyDown("right")){
        bus.x += 5;
        bus_moving = true;
        }
      
      else {
        bus_moving = false;
      }
  
    // collition detection between van and the bus
    
    
    
   
  }
   
  drawSprites();

  

 }