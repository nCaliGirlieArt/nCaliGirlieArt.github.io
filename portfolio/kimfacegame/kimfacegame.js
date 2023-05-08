//Catch the Ball
//Kim Longson

var ballx = 300;
var bally = 300;
//var ballSize = 40;
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
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


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
   if (gameState=="win"){
   youWin(); 
  }
 
  text(("Score: " + score), width/2, 40);
  

} // end draw===================================================


function levelOne(){
  text("Level 1", width/2, height-20);
  background(kim);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/8){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
 // ellipse(ballx, bally, ballSize, ballSize);
  image(pink, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level one===============================================

function levelTwo(){
 // background(200, 100, 0);
   background(kim);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/8){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// lvel 3
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
  //ellipse(ballx, bally, ballSize, ballSize);
  image(yellow, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level two======================================================

function levelThree(){
    background(kim);
  
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>15){

  gameState = "L4";

}

  image(purple, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level three======================================================

function levelFour(){
    background(kim);
  
  text("Level 4", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>20){

  gameState = "L5";

}

  image(daisy, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level four======================================================

function levelFive(){
    background(kim);
  
  text("Level 5", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>25){

  gameState = "win";

}

  image(side, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level five======================================================


function youWin(){
    background(kim);

  text("You Won", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
//  if (distToBall <ballSize/2){
  //  ballx = random(width);
  //  bally= random(height);
   // ballSize=ballSize -1;
 //   score= score +1;
//  }
 // if(score>30){
// level 5
  //gameState = "win";
   

 // }
  
 //image(pansy, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
 // line(ballx, bally , mouseX, mouseY);
  
} // end level you win===================================================
