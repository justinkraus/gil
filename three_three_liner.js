// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
// https://editor.p5js.org/patchbae/sketches/B1ah84tDz

var step = 5;
var xoffset1 = 0.001
var xoffset2 = 0.001

//var opacity = 255;

class Liner {
  constructor() {
    this.yoffset1 = 0.0;
    this.yoffset2 = 0.0;
    this.position1 = createVector(width, height);
    this.position2 = createVector(width, height);
    this.position3 = createVector(width, height);
    this.position4 = createVector(width, height);
    this.noff1 = createVector(random(5), 1.0);
    this.noff2 = createVector(random(5), 1.0);
    this.noff3 = createVector(random(5), 1.5);
    this.noff4 = createVector(random(5), 1.5);
    this.opacity = 40;

    this.history1 = [];
    this.history2 = [];
    this.history3 = [];
    this.history4 = [];
    this.colHist = [];
    this.opHist = [];
  }

  update() {
    this.position1.x = map(noise(this.noff1.x), 0, 1, 0, width);
    this.position1.y = map((this.noff1.y), 0, 1, 0, height);
    
    this.position2.x = map(noise(this.noff2.x), 0, 1, 0, width);
    this.position2.y = map((this.noff2.y), 0, 1, 0, height);
    
    this.position3.x = map(noise(this.noff1.x), 0, 1, 0, width);
    this.position3.y = map((this.noff3.y), 0, 1, 0, height);
    
    this.position4.x = map(noise(this.noff2.x), 0, 1, 0, width);
    this.position4.y = map((this.noff4.y), 0, 1, 0, height);

    //this.position2.x = map(noise(this.noff.x), 1, 0, 0, width); for radial
    //this.position2.y = map(noise(this.noff.y), 1, 0, 0, height); for radial
    this.noff1.add(xoffset1, this.yoffset1, 0);
    this.noff2.add(xoffset2, this.yoffset2, 0);
  	this.noff3.add(xoffset1, this.yoffset1, 0);
    this.noff4.add(xoffset2, this.yoffset2, 0);
    this.yoffset1 = this.yoffset1 - 0.000009;
    this.yoffset2 = this.yoffset2 - 0.000009;
    //this.noff3.add(xoffset1, yoffset1, 0);
    //this.noff4.add(xoffset2, yoffset2, 0);

    //this.history.push(this.position1.copy());
    let p1 = createVector(this.position1.x,this.position1.y);
    this.history1.push(p1);
    let p2 = createVector(this.position2.x,this.position2.y);
    this.history2.push(p2);
    let p3 = createVector(this.position3.x,this.position3.y);
    this.history3.push(p3);
    let p4 = createVector(this.position4.x,this.position4.y);
    this.history4.push(p4);
    let cV = createVector(this.r, this.g, this.b);
    this.colHist.push(cV);
    this.opacity = this.opacity - 0.085;    
    this.opHist.push(this.opacity);
  }
  
  show() {
    //strokeWeight(1);
    //fill(this.r, this.g, this.b, 127);
    //point(this.position.x, this.position.y);
    //line(this.position1.x, this.position1.y, this.position2.x, this.position2.y);
    //ellipse(this.position1.x, this.position1.y, 12, 12);
    //fill(255);
    for (var i = 0; i < this.history1.length; i++) {
      var pos1 = this.history1[i];
      var pos2 = this.history2[i];
      var pos3 = this.history3[i];
      var pos4 = this.history4[i];
      var col = this.colHist[i];
      var opacity = this.opHist[i];
      //fill(col.x, col.y, col.z, opacity);
      noFill();
      //Fill();
      stroke(255, 255, 255, opacity);
      bezier(pos1.x, pos1.y, pos1.x, pos1.y, pos3.x, pos3.y, pos4.x, pos4.y);
    }
  }
  
  check() {
     
    if (this.opacity > 0) {
    	this.maxHist = 80;
  		}
    else if (this.opacity <= 20) {
    	this.maxHist = this.maxHist - 1;	
    	}
      
    
    if (this.history1.length > this.maxHist) {
    	this.history1.splice(0, 1); //calculate the different current length and max history
      this.history2.splice(0, 1);
      this.history3.splice(0, 1); //calculate the different current length and max history
      this.history4.splice(0, 1);
      this.colHist.splice(0, 1); //this is how you get the erase
      this.opHist.splice(0, 1);
    }

  }
}