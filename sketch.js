var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var level=0
var form, player, game;
var background1,background2,background3
var isCorrect=0
var sound1
var checkCorrect=0
var jin,jimin,kook,namjoon,sug,v,jhope
var image1
var song1
var sound1,sound2,sound3,sound4
var imagek=0
var coin,chocolate
var tae,kookie,rrm,sugar,hfjin,hope,jiminn
var coinGroup,chocoGroup

function preload() {
background1=loadImage("Images/startbackground.jpg")
background2=loadImage("Images/quizbackground.jpeg")
background3=loadImage("Images/dancestage.jpg")
jin=loadImage("Images/jin.gif")
jimin=loadImage("Images/jimin.gif")
kook=loadImage("Images/kook.gif")
namjoon=loadImage("Images/rm.gif")
sug=loadImage("Images/suga.gif")
v=loadImage("Images/v.gif")
jhope=loadImage("Images/jhope.gif")
sound3=loadSound("sounds/lose.wav")
sound4=loadSound("sounds/win.mp3")
coin=loadImage("Images/coin.png")
chocolate=loadImage("Images/choco.jpg")
}


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 tae=createSprite(500,500,500,500)
tae.visible=false
coinGroup=createGroup()
chocoGroup=createGroup()

}



function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1&&isCorrect==0){
    clear();
    level=1
    game.play();
  }
  if(level==1){
   form.displaylevel1()
  }
  if(gameState===2){
   game.end();
  }
  if(isCorrect==1||isCorrect==2||checkCorrect==1){
 game.dancelevel()
 
  }
  if(isCorrect==3){
game.lastlevel()
  }
}