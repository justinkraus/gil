// https://editor.p5js.org/patchbae/sketches/B1ah84tDz

var painters = [];
var inital = 1;
var maxHist;

function setup() {
  // createCanvas(displayWidth, displayHeight
  let cnv = createCanvas(windowWidth/1.5, windowHeight/1.05);
  // .position(400, 25);
  cnv.id('canvas_three_three')
  cnv.parent('three_three');
  for (var i = 0; i < inital; i++) {
    painters.push(new Liner());
  }
  // background(0);
  frameRate(30);
  //dSlider = createSlider(0, 400, 400);
  //dSlider.position(20, 20);
}

function draw() {
  background(18);
  for (var i = painters.length - 1; i >= 0; i--) {
  //for (var i = 0; i < painters.length; i++) {
    	if (painters[i].opacity > 0){
      painters[i].update();
      }
      painters[i].show();
      painters[i].check();

    if (painters[i].maxHist < 0) {
      painters.splice(i, 1);
    }
  }
  var ms = Math.floor(millis() % 5000);
  print(ms);
  if (ms > 4900){
  	painters.push(new Liner());
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    painters.push(new Liner());
  }
}

function windowResized() {
  resizeCanvas(windowWidth/1.5, windowHeight/1.05);
}