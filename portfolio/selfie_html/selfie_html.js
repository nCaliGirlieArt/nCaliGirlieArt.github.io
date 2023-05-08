function setup() {
  createCanvas(600, 600);
 
  background(237, 149, 228);
}

function draw() {
 	// base hair
	strokeWeight(5);
	point(520, 600);
	point(440, 95);
	point(150, 95);
	point(90, 600);

	noFill();
	beginShape();
	fill(210, 224, 103);
	curveVertex(520, 600);
	curveVertex(520, 600);
	curveVertex(440, 95);
	curveVertex(150, 95);
	curveVertex(90, 600);
	curveVertex(90, 600);
	endShape();
	
	// neck
	fill(224, 209, 168);
	rect(230, 400, 140, 230);
	
	// face
	fill(224, 209, 168);
  	ellipse(300, 300, 330, 400);

  // eyelashes left
  line(260, 230, 260, 210);
  line(250, 230, 250, 210);
  line(240, 230, 240, 210);
  line(230, 240, 230, 210);
  
  // eyelashes right
  line(340, 230, 340, 210);
  line(350, 230, 350, 210);
  line(360, 230, 360, 210);
  line(370, 240, 370, 210);
  

	// eyes
	fill(225);
  	ellipse(250, 250, 40, 35);
   	 fill(225);
  	ellipse(350, 250, 40, 35);
   	fill(120);
 	 ellipse(250, 250, 20, 15);
  	 fill(120);
  	ellipse(350, 250, 20, 15);

	// nose
	fill(224, 209, 168);
  	triangle(300, 250, 250, 320, 350, 320);
	
  // lips
  fill(234, 168, 237)
  arc(300, 420, 70, 50, 0, PI, OPEN);
  ellipse(330, 375, 65, 15);
  ellipse(270, 375, 65, 15);
 
	// mouth
	fill(600)
	arc(300, 380, 130, 100, 0, PI, CHORD);
	
	// sunglasses
  fill(110,90)
  ellipse(240, 250, 100, 100);
  ellipse(360, 250, 100, 100);
  line(280, 250, 320, 250);
  line(190, 250, 138, 250);
  line(405, 250, 460, 250);
  
  // teeth
  line(250, 410, 250, 380);
  line(270, 420, 270, 380);
  line(290, 425, 290, 380);
  line(310, 425, 310, 380);
  line(330, 420, 330, 380);
  line(350, 410, 350, 380);
  line(240, 400, 360, 400);
  
  // eyebrows
  
  
  
  
 
}
