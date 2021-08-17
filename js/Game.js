class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      image(background1,0,0,displayWidth,displayHeight)
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    
  }

  play(){
    //form.hide();
    textSize(40);
    Player.getPlayerInfo();
    player.getRank()
    if(allPlayers !== undefined){
      background("lightblue")
   image(background2,0,0,displayWidth,displayHeight)
   fill("purple")
   text("Quiz Game=Level1", 120, 100)
   //text("player1 ="+allPlayers["player1"].Score, 1600, 100)
   //text("player2="+allPlayers["player2"].Score, 1600, 150)
    
    var no=0
    for(var f in allPlayers){
      no=no+1
  if(no==player.index){
   text("player1 ="+allPlayers[f].Score, 1600, 100)
  }

    }
      
    }

    if( isCorrect==1&& player.index !== null&&checkCorrect==0){
      player.score +=10
     checkCorrect=checkCorrect+1
      player.update();
      console.log("tdghftyh")

    }
    if(player.distance>5*displayHeight){
    player.rank=player.rank+1
    player.updateRank(player.rank)
    gameState=2
    }
    drawSprites()
}
dancelevel(){
  form.hidelevel1()
  form.option1.hide()
  background("purple")
   background("orange")
   form.displaydancelevel()
   textSize(40)
   fill("white")
   text("DanceOff Game=Level2", 120, 100)
   text("player1 ="+allPlayers["player1"].Score, 1600, 100)
   text("player2="+allPlayers["player2"].Score, 1600, 150)
}
lastlevel(){
  form.hidedancelevelbuttons()
  image(background3,0,0,displayWidth,displayHeight)
  textSize(40)
  text("player1 ="+allPlayers["player1"].Score, 1600, 100)
   text("player2="+allPlayers["player2"].Score, 1600, 150)
console.log("hai not working or "+imagek)
if(imagek==1){
        console.log("jdksfdskjf"+imagek)
       image(v,mouseX,500,500,500)
       tae.visible=false
       tae.x=mouseX
       if(chocoGroup.isTouching(tae)){
        player.score +=10
         player.update();
       }
       if(coinGroup.isTouching(tae)){
        player.score +=5
         player.update();
       }
    }
if(imagek==2){
      console.log("eryt"+imagek)
     image(kook,mouseX,500,500,500)
     tae.visible=false
       tae.x=mouseX
       if(chocoGroup.isTouching(tae)){
        player.score +=10
         player.update();
       }
       if(coinGroup.isTouching(tae)){
        player.score +=5
         player.update();
       }
  }
if(imagek==3){
    console.log("yrs"+imagek)
   image(namjoon,mouseX,500,500,500)
   tae.visible=false
       tae.x=mouseX
       if(chocoGroup.isTouching(tae)){
        player.score +=10
         player.update();
       }
       if(coinGroup.isTouching(tae)){
        player.score +=5
         player.update();
       }
}
if(imagek==4){
  console.log("jdksfdskjf"+imagek)
 image(jin,mouseX,500,500,500)
 tae.visible=false
       tae.x=mouseX
       if(chocoGroup.isTouching(tae)){
        player.score +=10
         player.update();
       }
       if(coinGroup.isTouching(tae)){
        player.score +=5
         player.update();
       }
}
if(imagek==5){
  console.log("jdksfdskjf"+imagek)
 image(jimin,mouseX,500,500,500)
 tae.visible=false
 tae.x=mouseX
 if(chocoGroup.isTouching(tae)){
  player.score +=10
   player.update();
 }
 if(coinGroup.isTouching(tae)){
  player.score +=5
   player.update();
 }
}
if(imagek==6){
  console.log("jdksfdskjf"+imagek)
 image(jhope,mouseX,500,500,500)
 tae.visible=false
 tae.x=mouseX
 if(chocoGroup.isTouching(tae)){
  player.score +=10
   player.update();
 }
 if(coinGroup.isTouching(tae)){
  player.score +=5
   player.update();
 }
}
if(imagek==7){
  console.log("jdksfdskjf"+imagek)
 image(sug,mouseX,500,500,500)
 tae.visible=false
 tae.x=mouseX
 if(chocoGroup.isTouching(tae)){
  player.score +=10
   player.update();
 }
 if(coinGroup.isTouching(tae)){
  player.score +=5
   player.update();
 }
}
this.createDiamonds()
this.createJwellery()
drawSprites()
}

 end(){
  background("lightblue")
   textSize(50)
   fill("#E6E6FA")
  text("gameEND",500,-4*displayHeight-100)
  fill("#008080")
  text("RANK = "+player.rank,500,-4*displayHeight-200)
 }


createDiamonds() {
  if (World.frameCount % 30 == 0) {
  var diamonds = createSprite(Math.round(random(100, displayWidth-100),40, 10, 10));
  diamonds.addImage(chocolate);
  diamonds.scale=0.10;
  diamonds.velocityY = 10;
  diamonds.lifetime = 350;
  chocoGroup.add(diamonds)
}
}

createJwellery() {
  if (World.frameCount % 30 == 0) {
  var jwellery = createSprite(Math.round(random(100, displayWidth-100),40, 10, 10));
  jwellery.addImage(coin);
  jwellery.scale=0.10;
  jwellery.velocityY = 10;
  jwellery.lifetime = 350;
  coinGroup.add(jwellery)
  }
}


}