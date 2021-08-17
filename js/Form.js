class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.resetbutton = createButton('reset');
    this.question1 = createElement('h2')
    this.option1 = createButton('jimin');
    this.option2 = createButton('jin');
    this.option3 = createButton('V');
    this.option4 = createButton('jungkook');
    this.button1 = createButton('kim taehuyng');
    this.button2 = createButton('jeon jungkook');
    this.button3 = createButton('kim namjoon');
    this.button4= createButton('kim seokjin');
    this.button5 = createButton('Park jimin');
    this.button6 = createButton('jhope');
    this.button7 = createButton('min yoonji');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Fun with BTS");
    title.position(130, 0);
    this.resetbutton.position(displayWidth-60,50)
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
      game.getState()
      console.log("gameState=="+gameState)
    
    });
    

    this.resetbutton.mousePressed(()=>{
   game.update(0)
   player.updateCount(0)   
   player.updateRank(0)
   database.ref('/').update({
    players: null
  }); 
    });
  }

displaylevel1(){
  this.question1.html("Who is the youngest bts member?")
        this.question1.position(displayWidth/2-300,displayHeight/2-300);
        this.option1.size(300,50)
        this.option2.size(300,50)
        this.option3.size(300,50)
        this.option4.size(300,50)
        this.option1.position(displayWidth/2-200,displayHeight/2-200)
        this.option2.position(displayWidth/2-200,displayHeight/2-150)
        this.option3.position(displayWidth/2-200,displayHeight/2-100)
        this.option4.position(displayWidth/2-200,displayHeight/2-50)
        this.option1.mousePressed(()=>{
          isCorrect=2
        })
        this.option2.mousePressed(()=>{
          isCorrect=2
        })
        this.option3.mousePressed(()=>{
          isCorrect=2
        })
        this.option4.mousePressed(()=>{
          isCorrect=1
          player.score=player.score+10
          player.update();
        })
         
           
}
displaydancelevel(){
  this.button1.size(300,50)
  this.button2.size(300,50)
  this.button3.size(300,50)
  this.button4.size(300,50)
  this.button5.size(300,50)
  this.button6.size(300,50)
  this.button7.size(300,50)
  this.button1.position(displayWidth/2-200,displayHeight/2-200)
  this.button2.position(displayWidth/2-200,displayHeight/2-150)
  this.button3.position(displayWidth/2-200,displayHeight/2-100)
  this.button4.position(displayWidth/2-200,displayHeight/2-50)
  this.button5.position(displayWidth/2-200,displayHeight/2-0)
  this.button6.position(displayWidth/2-200,displayHeight/2+50)
  this.button7.position(displayWidth/2-200,displayHeight/2+100)
  this.button1.mousePressed(()=>{
    isCorrect=3
    imagek=1
  })
  this.button2.mousePressed(()=>{
    isCorrect=3
    imagek=2
  })
  this.button3.mousePressed(()=>{
    isCorrect=3
    imagek=3
  })
  this.button4.mousePressed(()=>{
    isCorrect=3
    imagek=4
  })
  this.button5.mousePressed(()=>{
    isCorrect=3
    imagek=5
  })
  this.button6.mousePressed(()=>{
    isCorrect=3
    imagek=6
  })
  this.button7.mousePressed(()=>{
    isCorrect=3
    imagek=7
  })
  
}
hidelevel1(){
  this.question1.hide()
  this.option1.hide()
  this.option2.hide()
  this.option3.hide()
  this.option4.hide()
}
hidedancelevelbuttons(){
  this.button1.hide()
  this.button2.hide()
  this.button3.hide()
  this.button4.hide()
  this.button5.hide()
  this.button6.hide()
  this.button7.hide()
}
}