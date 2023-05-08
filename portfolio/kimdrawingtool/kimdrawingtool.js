var img;
var initials ='kl'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://nCaliGirlieArt.github.io/kim.png');

  img2 = loadImage('https://nCaliGirlieArt.github.io/pansy.png');

  img3 = loadImage('https://nCaliGirlieArt.github.io/reddaisy.png');
  
  img4 = loadImage('https://nCaliGirlieArt.github.io/pinkflower.png');
  
  img5 = loadImage('https://nCaliGirlieArt.github.io/yellowflower.png');
  
  img6 = loadImage('https://nCaliGirlieArt.github.io/purpleflower.png');
  
  img7 = loadImage('https://nCaliGirlieArt.github.io/sideredflower.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(167, 188, 232);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    stroke(237, 206, 119);
    strokeWeight(15);
    line(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(4);
    
  } else if (toolChoice == '2') { // second tool

    stroke(50, 168, 82);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(4);
    
  } else if (toolChoice == '3') { // third tool

    stroke(219, 48, 214);
    strokeWeight(15);
    line(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(4);
  
   } else if (toolChoice == '4' || toolChoice == '4') { // 4 places the image we pre-loaded
    image(img6, mouseX, mouseY, 150, 150);
    
  } else if (toolChoice == '5' || toolChoice == '5') { // 5 places the image we pre-loaded
    image(img7, mouseX, mouseY, 150, 150);
    
  } else if (toolChoice == '6' || toolChoice == '6') { // 6 places the image we pre-loaded
    image(img2, mouseX, mouseY, 150, 150);
    
  }  else if (toolChoice == '7' || toolChoice == '7') { // 7 places the image we pre-loaded
    image(img3, mouseX, mouseY, 150, 150);
    
  }  else if (toolChoice == '8' || toolChoice == '8') { // 8 places the image we pre-loaded
    image(img4, mouseX, mouseY, 150, 150);
        
  }  else if (toolChoice == '9' || toolChoice == '9') { // 9 places the image we pre-loaded
    image(img5, mouseX, mouseY, 150, 150);
    
  }  else if (toolChoice == '0' || toolChoice == '0') { // 0 places the image we pre-loaded
    image(img, mouseX, mouseY, 150, 150);
   
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
