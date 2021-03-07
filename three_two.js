function setup() {
  // let cnv = createCanvas(1000, 1000)
  let cnv = createCanvas(windowWidth, windowHeight);

  // .position(400, 25);
  cnv.id('canvas_three_two')
  cnv.parent('three_two');
  // background('rgb(0,255,0)');
  // background();
  frameRate(12.5);
}


function draw(){
  // fill(50)
  // strokeWeight(0)
  // textFont('Georgia')
  // text(poem, 75, 50, 600, 600)


  var flowerX = random(width);
  var flowerY = random(height);
  var petalSize = random(10, 25);
  
  fill(random(255), random(255), random(255));
  // fill(255, 128, 0);
  
  ellipse(flowerX - petalSize / 2, flowerY - petalSize / 2, petalSize);
  ellipse(flowerX + petalSize / 2, flowerY - petalSize / 2, petalSize);
  ellipse(flowerX - petalSize / 2, flowerY + petalSize / 2, petalSize);
  ellipse(flowerX + petalSize / 2, flowerY + petalSize / 2, petalSize);
  
  fill(random(255), random(255), random(255));
  // fill(255, 0, 0);
  
  ellipse(flowerX, flowerY, petalSize);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}