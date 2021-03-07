var seaRoseLines;
function preload() {
  seaRoseLines = loadStrings('./raw_text.txt');
}
function setup() {
  // createCanvas(400, 400);
   let cnv = createCanvas(windowWidth/1.5, windowHeight/1.1);

  cnv.id('canvas_two_three')
  cnv.parent('two_three');
  // noLoop();
}
function draw() {
  background(18);
  textSize(16);
  for (var i = 0; i < seaRoseLines.length; i++) {
    fill(100+(i*5));
    text(seaRoseLines[i], 50, 50+i*20);
  }
}

function mousePressed() {
  shuffle(seaRoseLines, true);
}

function windowResized() {
  resizeCanvas(windowWidth/1.5, windowHeight/1.1);
}