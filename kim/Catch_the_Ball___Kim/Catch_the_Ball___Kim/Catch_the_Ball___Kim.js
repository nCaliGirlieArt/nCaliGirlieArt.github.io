//Catch the Ball
//Kim Longson

var ballx = 300;
var bally = 300;
var ballSize = 60
var score =0;
var gameState= "L1";


function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
 
  kim = loadImage('https://nCaliGirlieArt.github.io/kim.png');

  pansy = loadImage('https://nCaliGirlieArt.github.io/pansy.png');

  daisy = loadImage('https://nCaliGirlieArt.github.io/reddaisy.png');
  
  pink = loadImage('https://nCaliGirlieArt.github.io/pinkflower.png');
  
  yellow = loadImage('https://nCaliGirlieArt.github.io/yellowflower.png');
  
  purple = loadImage('https://nCaliGirlieArt.github.io/purpleflower.png');
  
  side = loadImage('https://nCaliGirlieArt.github.io/sideredflower.png');
  
  affirms= loadImage('https://nCaliGirlieArt.github.io/kim/affirms.png');
  
  affirm2= loadImage('https://nCaliGirlieArt.github.io/kim/affirm_2.png');
  
  affirm3= loadImage('https://nCaliGirlieArt.github.io/kim/affirm_3.png');
  
  affirm4= loadImage('https://nCaliGirlieArt.github.io/kim/affirm_4.png');
  
  affirm5= loadImage('https://nCaliGirlieArt.github.io/kim/affirm_5.png');
  
  affirm6= loadImage('https://nCaliGirlieArt.github.io/kim/affirm_6.png');
  
  affirm7= loadImage('https://nCaliGirlieArt.github.io/kim/affirm_7.png');
  
  affirm8= loadImage('https://nCaliGirlieArt.github.io/kim/affirm_8.png');
  
  affirm9= loadImage('https://nCaliGirlieArt.github.io/kim/affirm_9.png');
  
  affirm1= loadImage('https://nCaliGirlieArt.github.io/kim/affirm_1.png');
  
  affirm= loadImage('https://nCaliGirlieArt.github.io/kim/affirm.png');
  
}

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER);
  textSize(30);

} 
// end setup====================================================

function draw() {
  background(220);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  } 
    if (gameState=="L4"){
   levelFour(); 
  } 
   if (gameState=="L5"){
   levelFive(); 
  } 
   if (gameState=="L6"){
   levelSix(); 
  } 
   if (gameState=="L7"){
  levelSeven();
  } 
  if (gameState=="L8"){
   levelEight(); 
  }
  if (gameState=="L9"){
   levelNine(); 
  } 
   if (gameState=="L10"){
   levelTen(); 
  } 
   if (gameState=="L11"){
   levelEleven(); 
  }
   if (gameState=="win"){
   youWin(); 
  }
 
  text(("Score: " + score), width/6,height - 50);

} 
// end draw===================================================


function levelOne(){
  text("Level 1", width/6, height-20);
  background(affirms, 190);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/8){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>3){
   gameState= "L2";
  }
  
  image(pink, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
  } 
// end level one===============================================

function levelTwo(){
  text("Level 2", width/6, height-20);
  background(affirm1, 190);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/8){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
   gameState= "L3";
  }
  
  image(pink, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  } 
// end level two===============================================

function levelThree(){
  text("Level 3", width/6, height-20);
  background(affirm2, 190);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/8){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>8){

 gameState= "L4";
  }
  
  image(pink, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
  } 
// end level three===============================================

function levelFour(){
  text("Level 4", width/6, height-20);
  background(affirm3, 190);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/8){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){

 gameState= "L5";
  }

  image(pink, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
 
} 
// end level four===============================================

function levelFive(){
  text("Level 5", width/6, height-20);
  background(affirm4, 190);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/8){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>13){

 gameState= "L6";
  }
  
  image(pink, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level five===============================================

function levelSix(){
  text("Level 6", width/6, height-20);
  background(affirm5, 190);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/8){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>15){
// call level 2
 // fill(random(255));
 gameState= "L7";
  }
  
 // ellipse(ballx, bally, ballSize, ballSize);
  image(pink, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level six===============================================

function levelSeven(){
  text("Level 7", width/6, height-20);
  background(affirm6);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/8){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>18){
   gameState = "L8";

  }

  image(yellow, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level seven======================================================

function levelEight(){
  text("Level 8", width/6, height-20);
  background(affirm7, 190);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/8){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>20){
 gameState= "L9";
  }
  
 // ellipse(ballx, bally, ballSize, ballSize);
  image(pink, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level eight===============================================


function levelNine(){
   background(affirm8);

  text("Level 9", width/6, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>23){

  gameState = "L10";

}

  image(purple, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level nine======================================================

function levelTen(){
    background(affirm9);
  
  text("Level 10", width/6, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>25){

  gameState = "L11";

}

  image(daisy, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level ten======================================================

function levelEleven(){
    background(affirm1);
  
  text("Level 11", width/6, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>30){

  gameState = "win";

}

  image(side, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level Eleven======================================================


function youWin(){
    background(kim);

  text("You Won", width/6, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  
} // end level you win===================================================
