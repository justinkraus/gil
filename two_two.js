var sourceText = 'And so my life has been guided\n\
All the love I needed was provided\n\
And through my mothers sacrifices I saw where her life went\n\
To give more than birth to me, but life to me\n\
And this ain’t one of the clichés about black women being strong\n\
Cause hell if you’re weak, you’re gone\n\
But life courage, determined to do more than just survive\n\
And too many homes have a missing woman or man\n\
Without the feeling of missing love\n\
Maybe they are homes that are hurt\n\
But there are no real lives that hurt will not reach, that are not broken\n\
Unless the homes of soldiers – stationed overseas\n\
Or lost in battles, are broken\n\
Unless the homes of firemen, policemen, construction workers,\n\
Seamen, railroad men, truckers, pilots\n\
Who lost their lives – but not what their lives stood for...\n\
Because men die, men lose, they are lost and they leave\n\
And so do women...\n\
I came from what they called a broken home\n\
But if they ever really called at our house\n\
They would have known how wrong they were\n\
We were working on our lives and our homes\n\
Dealing with what we had, not what we didn’t have\n\
My life has been guided by women\n\
But because of them – I am a man\n\
God bless you mama – and thank you';



var words = sourceText.split(" ");
function setup() {
    let cnv = createCanvas(windowWidth/1.5, windowHeight/1.1);

  // .position(400, 25);
  cnv.id('canvas_two_two')
  cnv.parent('two_two');
  // frameRate(.5);
  noLoop();
}
function draw() {
  // background(18);
  textSize(20);
  textAlign(CENTER, CENTER);
  for (var i = 0; i < words.length; i++) {
    fill(random(35, 255));
    text(words[i], random(width), random(height));
  }
}

function windowResized() {
  resizeCanvas(windowWidth/1.5, windowHeight/1.1);
}