var maze,mazeImg
var playB,rulesB,sB,rulesI
var greeting,greeting2
var coin,potion,arrow
var rule1,story1
var spider
function preload() {
 hpImg = loadImage("assets/Home_Page.png")
 rulesI = loadImage("assets/rules.png")
 greeting = createElement("h1")
 greeting2 = createElement("h1")
 coin = loadImage("assets/goldCoin.png")
 potion = loadImage("assets/life_potion.png")
 arrow = loadImage("assets/arrow.png")
 player1=loadImage('assets/life.png')
}

function setup() {
  
  createCanvas(windowWidth-100, windowHeight-100);
  
  hp = createSprite(width/2,height/2,windowWidth, windowHeight)
  hp.addImage("bg",hpImg)

  
  playB = createButton('PLAY')
  playB.position(width/2+300,height/2-200)
  playB.class("customButton")

  rulesB = createButton('RULES')
  rulesB.position(width/2+300,height/2-100)
  rulesB.class("customButton")

  sB = createButton('STORY')
  sB.position(width/2+300,height/2)
  sB.class("customButton")
  
  player=createSprite(20,200,20,20)
  player.addImage(player1)
  player.visible=false


  //imageMode("CENTER")
}

function draw() {
  background('white')
  playB.mousePressed(() => {
    mazeScreen()
    //player()
   
  })
  
  if(keyDown(LEFT_ARROW)){
    player.velocityX=player.velocityX+1
  }
  rulesB.mousePressed(() => {
    ruleBoard()
  })

  sB.mousePressed(() => {
    story()
  })
 
 
  
drawSprites()
}
function player(){
  
}
function mazeScreen(){

  playB.hide()
  rulesB.hide()
  sB.hide()
  greeting.hide()
  hp.visible = false
  background("#FFE5B4")
  player.visible=true
  m1 = createSprite(10,50,50,800)
  m1.shapeColor = "green" 

  m2 = createSprite(10,1050,50,1000)
  m2.shapeColor = "green" 

  m3 = createSprite(width/2,25,width,50)
  m3.shapeColor = "green" 

  m4 = createSprite(width/2-400,1550,width-600,50)
  m4.shapeColor = "green" 

  m5 = createSprite(2600,1550,600,50)
  m5.shapeColor = "green"

  m6 = createSprite(2850,height/2,50,height)
  m6.shapeColor = "green" 

  m7 = createSprite(150,height/2-230,40,400)
  m7.shapeColor = "green"

  m8 = createSprite(180,height/2+100,300,40)
  m8.shapeColor = "green"

  m9 = createSprite(180,height/2+250,300,40)
  m9.shapeColor = "green"

  m10 = createSprite(130,height/2+400,200,40)
  m10.shapeColor = "green"

  m11 = createSprite(210,height/2+500,40,200)
  m11.shapeColor = "green"

  m12 = createSprite(300,height/2-230,40,400)
  m12.shapeColor = "green"

  m13 = createSprite(225,height/2-550,150,30)
  m13.shapeColor = "green"

  m14 = createSprite(165,height/2-600,30,70)
  m14.shapeColor = "green"

  m15 = createSprite(250,height/2-620,200,30)
  m15.shapeColor = "green"

  m16 = createSprite(450,height/2-550,150,30)
  m16.shapeColor = "green"

  m17 = createSprite(450,height/2-600,30,70)
  m17.shapeColor = "green"

  m18 = createSprite(750,height/2-620,600,30)
  m18.shapeColor = "green"

  m19 = createSprite(365,height/2-440,170,30)
  m19.shapeColor = "green"

  m20 = createSprite(435,height/2-380,30,100)
  m20.shapeColor = "green"

  m21 = createSprite(600,height/2-440,170,30)
  m21.shapeColor = "green"

  m22 = createSprite(530,height/2-400,30,80)
  m22.shapeColor = "green"

  m23 = createSprite(600,height/2-360,170,30)
  m23.shapeColor = "green"

  m24 = createSprite(430,height/2-250,300,30)
  m24.shapeColor = "green"

  m25 = createSprite(670,height/2-310,30,80)
  m25.shapeColor = "green"

  m26 = createSprite(670,height/2-490,30,80)
  m26.shapeColor = "green"

  m27 = createSprite(750,height/2-540,250,30)
  m27.shapeColor = "green"

  m28 = createSprite(750,height/2-480,30,100)
  m28.shapeColor = "green"

  m29 = createSprite(820,height/2-440,170,30)
  m29.shapeColor = "green"

  m30 = createSprite(890,height/2-400,30,80)
  m30.shapeColor = "green"

  m31 = createSprite(835,height/2-350,140,30)
  m31.shapeColor = "green"

  m32 = createSprite(705,height/2-255,100,30)
  m32.shapeColor = "green"

  m33 = createSprite(740,height/2-220,30,70)
  m33.shapeColor = "green"

  m34 = createSprite(760,height/2-190,70,30)
  m34.shapeColor = "green"

  m35 = createSprite(780,height/2-100,30,200)
  m35.shapeColor = "green"

  m36 = createSprite(450,height/2-100,30,300)
  m36.shapeColor = "green"

  m37 = createSprite(580,height/2-170,100,30)
  m37.shapeColor = "green"

  m38 = createSprite(545,height/2-110,30,100)
  m38.shapeColor = "green"
 
  m39 = createSprite(675,height/2-40,30,100)
  m39.shapeColor = "green"

  m40 = createSprite(695,height/2,200,30)
  m40.shapeColor = "green"

  m41 = createSprite(605,height/2+85,30,200)
  m41.shapeColor = "green"

  m42 = createSprite(570,height/2+200,100,30)
  m42.shapeColor = "green"

  m43 = createSprite(315,height/2+355,30,200)
  m43.shapeColor = "green"

  m44 = createSprite(400,height/2+450,200,30)
  m44.shapeColor = "green"

  m45 = createSprite(485,height/2+385,30,100)
  m45.shapeColor = "green"

  m46 = createSprite(450,height/2+350,50,30)
  m46.shapeColor = "green"

  m47 = createSprite(900,height/2+450,500,30)
  m47.shapeColor = "green"

  m48 = createSprite(750,height/2+185,30,100)
  m48.shapeColor = "green"

  m49 = createSprite(805,height/2+150,200,30)
  m49.shapeColor = "green"

  m50 = createSprite(890,height/2-100,30,500)
  m50.shapeColor = "green"

  m51 = createSprite(1035,height/2-685,30,110)
  m51.shapeColor = "green"

  m52 = createSprite(865,height/2-575,30,100)
  m52.shapeColor = "green"

  m53 = createSprite(395,height/2+80,140,80)
  m53.shapeColor = "green"

  m54 = createSprite(width/2-100,height/2+50,50,height-200)
  m54.shapeColor = "green" 

  m55 = createSprite(395,height/2+520,30,150)
  m55.shapeColor = "green"

  m56 = createSprite(750,height/2+350,30,230)
  m56.shapeColor = "green"

  m57 = createSprite(665,height/2+520,30,150)
  m57.shapeColor = "green"

  m58 = createSprite(665,height/2+580,200,30)
  m58.shapeColor = "green"

  m59 = createSprite(965,height/2+680,30,150)
  m59.shapeColor = "green"

  m60 = createSprite(700,height/2+330,100,30)
  m60.shapeColor = "green"

  m61 = createSprite(1220,height/2+200,200,30)
  m61.shapeColor = "green"

  m62 = createSprite(1000,height/2,200,30)
  m62.shapeColor = "green"

  m63 = createSprite(1220,height/2-200,200,30)
  m63.shapeColor = "green"

  m64 = createSprite(1000,height/2-400,200,30)
  m64.shapeColor = "green"

  m65 = createSprite(1250,height/2-600,150,30)
  m65.shapeColor = "green"

  m66 = createSprite(1350,height/2-690,30,105)
  m66.shapeColor = "gray"

  m67 = createSprite(1410,height/2-650,100,30)
  m67.shapeColor = "green"

  m68 = createSprite(1490,height/2-610,250,30)
  m68.shapeColor = "blue"

  m69 = createSprite(2700,height/2-610,250,30)
  m69.shapeColor = "blue"

  m70 = createSprite(1490,height/2-410,250,30)
  m70.shapeColor = "blue"

  m71 = createSprite(2700,height/2-410,250,30)
  m71.shapeColor = "blue"

  m72 = createSprite(1490,height/2-210,250,30)
  m72.shapeColor = "blue"

  m73 = createSprite(2700,height/2-210,250,30)
  m73.shapeColor = "blue"

  m74 = createSprite(1490,height/2-10,250,30)
  m74.shapeColor = "blue"

  m75 = createSprite(2700,height/2-10,250,30)
  m75.shapeColor = "blue"

  m76 = createSprite(1490,height/2+210,250,30)
  m76.shapeColor = "blue"

  m77 = createSprite(2700,height/2+210,250,30)
  m77.shapeColor = "blue"

  m78 = createSprite(1490,height/2+410,250,30)
  m78.shapeColor = "blue"

  m79 = createSprite(2700,height/2+410,250,30)
  m79.shapeColor = "blue"

  m80 = createSprite(1490,height/2+610,250,30)
  m80.shapeColor = "blue"

  m81 = createSprite(2700,height/2+610,250,30)
  m81.shapeColor = "blue"


  c1 = createSprite(80,500,10,10)
  c1.addImage(coin)
  c1.scale = 0.1

  c2 = createSprite(80,300,10,10)
  c2.addImage(coin)
  c2.scale = 0.1

  c3 = createSprite(80,100,10,10)
  c3.addImage(coin)
  c3.scale = 0.1

  c4 = createSprite(280,100,10,10)
  c4.addImage(coin)
  c4.scale = 0.1

  c5 = createSprite(480,100,10,10)
  c5.addImage(coin)
  c5.scale = 0.1

  c6 = createSprite(680,100,10,10)
  c6.addImage(coin)
  c6.scale = 0.1

  c7 = createSprite(880,100,10,10)
  c7.addImage(coin)
  c7.scale = 0.1

  c8 = createSprite(80,700,10,10)
  c8.addImage(coin)
  c8.scale = 0.1

  c9 = createSprite(80,830,10,10)
  c9.addImage(coin)
  c9.scale = 0.1

  c10 = createSprite(230,830,10,10)
  c10.addImage(coin)
  c10.scale = 0.1

  c11 = createSprite(230,630,10,10)
  c11.addImage(coin)
  c11.scale = 0.1

  c12 = createSprite(230,430,10,10)
  c12.addImage(coin)
  c12.scale = 0.1

  c13 = createSprite(280,300,10,10)
  c13.addImage(coin)
  c13.scale = 0.1

  c14 = createSprite(480,300,10,10)
  c14.addImage(coin)
  c14.scale = 0.1

  c15 = createSprite(80,950,10,10)
  c15.addImage(coin)
  c15.scale = 0.1

  c16 = createSprite(280,950,10,10)
  c16.addImage(coin)
  c16.scale = 0.1

  c17 = createSprite(480,950,10,10)
  c17.addImage(coin)
  c17.scale = 0.1

  c18 = createSprite(80,1100,10,10)
  c18.addImage(coin)
  c18.scale = 0.1

  c19 = createSprite(250,1100,10,10)
  c19.addImage(coin)
  c19.scale = 0.1

  c20 = createSprite(80,1300,10,10)
  c20.addImage(coin)
  c20.scale = 0.1

  c21 = createSprite(280,1450,10,10)
  c21.addImage(coin)
  c21.scale = 0.1

  c22 = createSprite(580,1450,10,10)
  c22.addImage(coin)
  c22.scale = 0.1

  c23 = createSprite(880,1450,10,10)
  c23.addImage(coin)
  c23.scale = 0.1

  c24 = createSprite(880,1300,10,10)
  c24.addImage(coin)
  c24.scale = 0.1

  c25 = createSprite(1080,1300,10,10)
  c25.addImage(coin)
  c25.scale = 0.1

  c26 = createSprite(1080,1100,10,10)
  c26.addImage(coin)
  c26.scale = 0.1

  c27 = createSprite(880,1100,10,10)
  c27.addImage(coin)
  c27.scale = 0.1

  c28 = createSprite(1080,900,10,10)
  c28.addImage(coin)
  c28.scale = 0.1

  c29 = createSprite(1280,900,10,10)
  c29.addImage(coin)
  c29.scale = 0.1

  c30 = createSprite(1280,700,10,10)
  c30.addImage(coin)
  c30.scale = 0.1

  c31 = createSprite(1080,700,10,10)
  c31.addImage(coin)
  c31.scale = 0.1

  c32 = createSprite(1080,500,10,10)
  c32.addImage(coin)
  c32.scale = 0.1

  c33 = createSprite(1280,500,10,10)
  c33.addImage(coin)
  c33.scale = 0.1

  c34 = createSprite(780,500,10,10)
  c34.addImage(coin)
  c34.scale = 0.1

  c35 = createSprite(780,850,10,10)
  c35.addImage(coin)
  c35.scale = 0.1

  c36 = createSprite(1680,100,10,10)
  c36.addImage(coin)
  c36.scale = 0.1

  c37 = createSprite(1980,100,10,10)
  c37.addImage(coin)
  c37.scale = 0.1

  c38 = createSprite(2280,100,10,10)
  c38.addImage(coin)
  c38.scale = 0.1

  c39 = createSprite(2580,100,10,10)
  c39.addImage(coin)
  c39.scale = 0.1

  c40 = createSprite(1680,300,10,10)
  c40.addImage(coin)
  c40.scale = 0.1

  c41 = createSprite(1980,300,10,10)
  c41.addImage(coin)
  c41.scale = 0.1

  c42 = createSprite(2280,300,10,10)
  c42.addImage(coin)
  c42.scale = 0.1

  c43 = createSprite(2580,300,10,10)
  c43.addImage(coin)
  c43.scale = 0.1

  c44 = createSprite(1680,500,10,10)
  c44.addImage(coin)
  c44.scale = 0.1

  c45 = createSprite(1980,500,10,10)
  c45.addImage(coin)
  c45.scale = 0.1

  c46 = createSprite(2280,500,10,10)
  c46.addImage(coin)
  c46.scale = 0.1

  c47 = createSprite(2580,500,10,10)
  c47.addImage(coin)
  c47.scale = 0.1

  c48 = createSprite(1680,700,10,10)
  c48.addImage(coin)
  c48.scale = 0.1

  c49 = createSprite(1980,700,10,10)
  c49.addImage(coin)
  c49.scale = 0.1

  c50 = createSprite(2280,700,10,10)
  c50.addImage(coin)
  c50.scale = 0.1

  c51 = createSprite(2580,700,10,10)
  c51.addImage(coin)
  c51.scale = 0.1

  c52 = createSprite(1680,900,10,10)
  c52.addImage(coin)
  c52.scale = 0.1

  c53 = createSprite(1980,900,10,10)
  c53.addImage(coin)
  c53.scale = 0.1

  c54 = createSprite(2280,900,10,10)
  c54.addImage(coin)
  c54.scale = 0.1

  c55 = createSprite(2580,900,10,10)
  c55.addImage(coin)
  c55.scale = 0.1

  c56 = createSprite(1680,1100,10,10)
  c56.addImage(coin)
  c56.scale = 0.1

  c57 = createSprite(1980,1100,10,10)
  c57.addImage(coin)
  c57.scale = 0.1

  c58 = createSprite(2280,1100,10,10)
  c58.addImage(coin)
  c58.scale = 0.1

  c59 = createSprite(2580,1100,10,10)
  c59.addImage(coin)
  c59.scale = 0.1

  c60 = createSprite(1680,1300,10,10)
  c60.addImage(coin)
  c60.scale = 0.1

  c61 = createSprite(1980,1300,10,10)
  c61.addImage(coin)
  c61.scale = 0.1

  c62 = createSprite(2280,1300,10,10)
  c62.addImage(coin)
  c62.scale = 0.1

  c63 = createSprite(2580,1300,10,10)
  c63.addImage(coin)
  c63.scale = 0.1


  p1 = createSprite(580,250,10,10)
  p1.addImage(potion)
  p1.scale = 0.15

  p2 = createSprite(600,700,10,10)
  p2.addImage(potion)
  p2.scale = 0.15

  p3 = createSprite(1250,1400,10,10)
  p3.addImage(potion)
  p3.scale = 0.15


  a1 = createSprite(100,1400,10,10)
  a1.addImage(arrow)
  a1.scale = 0.5

  a2 = createSprite(350,600,10,10)
  a2.addImage(arrow)
  a2.scale = 0.5

  a3 = createSprite(1200,300,10,10)
  a3.addImage(arrow)
  a3.scale = 0.5
  
 

}


function ruleBoard(){
 rule1 = createSprite(width/2+100,height/2,width/3+100,height)
 rule1.addImage(rulesI)
 rule1.scale = 5
  story1.visible = false
  message = `
  <center><u><font size = "20" color = #4b3621> RULES </u> </font>
  </br>
  </br> <font color = #4b3621>UP - UP ARROW 
  </br> DOWN - DOWN ARROW 
  </br> LEFT - LEFT ARROW
  </br> RIGHT - RIGHT 
  </br> JUMP - SPACE
  </br> SHOOT - LEFT OR RIGHT + SPACE</center></font>`
  greeting.html(message)
  greeting.position(width/2-150,height/2-500)
  greeting2.hide()
}

function story(){
  story1 = createSprite(width/2,height/2,width/3+100,height)
  story1.addImage(rulesI)
  story1.scale = 5
  rule1.visible = false
  hp.visible = false
  message2 = `
  <center><u><font size = "20" color = "	#483248"> STORY </u> </font>
  </br>
  </br><font color = "#5D3FD3">It was long, long ago when the two tribes The Sapphire
  </br> Phoenix Warriors and The Dark Axe Clan lived peacefully.
  </br>But time had other plans…Once a cruel wizard of The Dark 
  </br>Axe Clan proposed that they should conquer and rule over 
  </br>the sapphire phoenixes.The battle begun and The Sapphire 
  </br>Phoenix Warriors lost. For centuries they have been suffering.
  </br>Slavery and Misery was seen everywhere. Although such a 
  </br>great achievement, they did not stop.They had plans of conquering
  </br> the whole world. Amidst the chaos, a boy was born. His 
  </br>name was Victor Knight. During his childhood he pulled off
  </br> many great feats like killing a lion, climbing a treacherous
  </br> mountain with dragons and many more. He loved horse riding.
  </br> Once during his adventures in forests, he found a griffin
  </br> and he trained it. He was very fond of it. He was very 
  </br>desperate to give his people what was rightly theirs. After
  </br> growing up he discovered that there was a precious jewel in
  </br> the rainforest that makes a man the strongest. But whoever
  </br> has gone into the jungle has never returned alive. But 
  </br>Victor Knight was a brave, intelligent and skilled warrior.
  </br> He decided he would go in search of the jewel and Save The
  </br> World. He will have to cross dangerous and risky paths to get 
  </br>this stone.
</br>
</br>
</br> The quest is divided into four parts :-
</br>THE LABYRINTH
</br>FALLING STONES
</br>ELECTRONIC CRUSH
</br>SURVIVAL MODE
  
  </center></font>`
  greeting2.html(message2)
  greeting2.position(width/2-350,height/2-550)
  greeting.hide()
}


