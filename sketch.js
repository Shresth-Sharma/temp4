var back,back1,back2,back3,back4;
var mar,mar1,mar2;
var inv;
var backGround;
var score=0;
var kidda,kidda1,kiddaG;
var mob,mob1,mob2;
var END=0;
var PLAY=1;
var START=2;
var gamestate=START;
var GameOver,GameOverImage;
var win,win1;
var key1,key2;
var r=0;
var database;
var plays = 0;
var Plays1 = 0;
var ENTER,SPACE;
var a1,a2,a3,a4,a5;
var s1=0,s2=0,s3=0,s4=0,s5=0;
function preload(){
back1=loadImage("background.jfif")
  //mar2=loadAnimation("Untitled-2.png","Untitled - Copy.png")
  mar2=loadAnimation("ash1.png","ash2.png","ash3.png","ash2.png")
  mar1=loadImage("ash2.png")
  mob1=loadImage("ball2.png")
  GameOverImage=loadImage("GAMEOVER.png")
  kidda1=loadImage("ball1.png")
  win1=loadImage("Win.png")
  key2=loadImage("mario game.png");
  a1 = loadSound("pikachu.mp3");
  a2 = loadSound("a2.mp3");
  a3 = loadSound("score.mp3")
  a4 = loadSound("lose.mp3")
  a5 = loadSound("Win.mp3")
}


function setup() {
 createCanvas(600,600);
 alert("File has been created by Shresth Sharma and "+"All the copyrights are reserved");
 database = firebase.database();
 getState();
  Plays1 = plays
  plays = plays+1
  getState();
  update(plays);
  back2=createSprite(1050,150,600,300);
  back2.addImage("back",back1)
  back2.scale=2
  
  back3=createSprite(750,150,600,300);
  back3.addImage("back",back1)
  back3.scale=2
  
  back4=createSprite(450,150,600,300);
  back4.addImage("back",back1)
  back4.scale=2
  
  back=createSprite(150,150,600,300);
  back.addImage("back",back1)
  back.scale=2
  
  
  mar=createSprite(90,150,10,10)
  mar.addAnimation("mar",mar2);
  mar.scale=0.6
  
  
  inv=createSprite(300,300,600,5)
  inv.visible=false;
  
  GameOver=createSprite(300,150,10,10);
  GameOver.addImage("k",GameOverImage)
  GameOver.visible=false;
  
  win=createSprite(300,150,10,10);
  win.addImage("kf",win1)
  win.visible=false;
  
  key1=createSprite(300,150,10,10);
  key1.addImage("key2",key2)
  key1.scale=1
  key1.visible=true;
  
  backGround=createGroup();
  backGround.add(back);
  backGround.add(back2);
  backGround.add(back3);
  backGround.add(back4);
  kiddaG=createGroup();
  mob2=createGroup();
  ENTER = createSprite(110,420,200,200);
  SPACE = createSprite(490,420,200,200);
  ENTER.shapeColor = ("yellow");
  SPACE.shapeColor = ("yellow");
  
}

function draw() {
  
  
  //mar.debug = true;
  background("black");
  
  backGround.setVelocityEach(0,0);
   mar.velocityY=mar.velocityY+1.5
  
  mar.collide(inv);
  if(gamestate===START){
    if (keyWentDown("enter")){
      gamestate=PLAY;
      
  
    }
    
   
  }
  if (gamestate===PLAY){
     key1.visible=false;
     
     if(s1 === 0){
      a1.play();
      a1.setVolume(3);
      a2.loop();
      
      s1=1;
     }
     
     background("red")
        if (mar.y-kiddaG.y<kiddaG.height/2+mar.height/2){
        score=score+1
        s2=0
        if(s2===0){
          a3.play();
          a3.setVolume(3);
          s2=1
        }
        }
        backGround.setVelocityEach(-5,0);
    if(score===10){
      win.visible=true;
      kiddaG.destroyEach();
      kiddaG.setVelocityEach(0,0);
      mob2.destroyEach();
      mob2.setVelocityEach(0,0);
      if(s4===0){
        a5.loop();
        a5.setVolume(1);
        s4=1
      }
    }
  }
      if(gamestate===END){
          mar.addImage("mar",mar1);
          a2.stop();
        GameOver.visible=true;
      }
  //console.log(score)
  if(back.x<-150){
    back.x=750
  }
   if (back2.x<-150){
     back2.x=750
   }
  if(back3.x<-150){
    back3.x=750
  }
  if(back4.x<-150){
    back4.x=750
  }
  
  if(keyDown("space")&&mar.y>210){
      mar.velocityY=-15
       }
       
  kiddda()
  
  if (gamestate===PLAY&&frameCount%30===0){
     r =Math.round(random(1,3))
    
    if(r===1){
      mob=createSprite(750,220,10,10);
      mob.addImage("kh",mob1)
      mob.velocityX=-30 ;
      
      mob.scale=0.15
      mob.collide(inv);
      mob2.add(mob);
      mob.lifetime = 100
     }
     if(r===2){
      kidda=createSprite(750,220,10,10);
      kidda.addImage("kh",kidda1)
      kidda.velocityX=-30 ;
      kidda.scale=0.15
      kidda.collide(inv);
      kiddaG.add(kidda);
      kidda.lifetime = 100;
     }
     if(r===3){
      kidda=createSprite(750,220,10,10);
      kidda.addImage("kh",kidda1)
      kidda.velocityX=-30 ;
      kidda.scale=0.15
      kidda.collide(inv);
      kiddaG.add(kidda);
      kidda.lifetime = 100
     }
     
     
  }
  //console.log(r);
  mobb()
  //kidda.velocityY=kidda.velocityY+1
  kiddaG.setVelocityYEach(5)
  kiddaG.collide(inv);
  mob2.collide(inv);
  mob2.setVelocityYEach(5)
  if(mar.isTouching(kiddaG)){
    gamestate=END
    if(s3===0){
      a4.loop();
      a4.setVolume(100);
      s3=1
    }
  }
  if(mar.isTouching(mob2)){
    score=score+1
    mob2.destroyEach();
    s2=0
        if(s2===0){
          a3.play();
          a3.setVolume(48);
          s2=1
        }
  }
 drawSprites();
  textSize(30)
  fill("red")
  stroke("green")
  strokeWeight(20);
   text("Score="+score,200,25)
   noStroke();
   fill("red");
   textSize(50);
   text("ENTER",10,360)
   textSize(35);
   text("(Start game)",15,460)
   textSize(50);
   text("SPACE",400,360)
   textSize(35);
   text("(Jump)",400,460)
}

 
 
function kiddda(){
  
}
function mobb(){
  
}
function update(plays){
  database.ref('/').update({
    Plays: plays
  });
}
function getState(){
  var gameStateRef  = database.ref('Plays');
  gameStateRef.on("value",function(data){
     Plays1 = data.val();
  })

}
function mouseReleased(){
  if(mouseX<ENTER.x+100&&mouseX>ENTER.x-100&&mouseY<ENTER.y+100&&mouseY>ENTER.y-100){
      if(mouseButton === LEFT&&gamestate===START){
        gamestate=PLAY;
      }
  } 
  if(mouseX<SPACE.x+100&&mouseX>SPACE.x-100&&mouseY<SPACE.y+100&&mouseY>SPACE.y-100){
    if(mouseButton === LEFT&&mar.y>210){
      mar.velocityY=-15
    }
}  
}













