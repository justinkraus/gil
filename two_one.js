function setup() {
  // createCanvas(400, 400);
    let cnv = createCanvas(windowWidth, windowHeight);

  // .position(400, 25);
  cnv.id('canvas_two_one')
  cnv.parent('two_one');
}
function draw() {
  background(18);
  strokeWeight(2);
  fill(255);
  textSize(8 + (mouseX / width)*20);
  text('And so my life has been guided\n\
All the love I needed was provided\n\
And through my mothers sacrifices I saw where her life went\n\
\n\ ', 20, 40);

  textSize(14 + (mouseX / width)*-18);
  text('To give more than birth to me, but life to me\n\
And this ain’t one of the clichés about black women being strong\n\
Cause hell if you’re weak, you’re gone\n\
But life courage, determined to do more than just survive\n\
\n\ ', 20, 90);

  textSize(8 + (mouseX / width)*20);
  text('And too many homes have a missing woman or man\n\
Without the feeling of missing love\n\
\n\ ', 20, 165);


  textSize(14 + (mouseX / width)*-18);
  text('Maybe they are homes that are hurt\n\
But there are no real lives that hurt will not reach, that are not broken\n\
Unless the homes of soldiers – stationed overseas\n\
Or lost in battles, are broken\n\
Unless the homes of firemen, policemen, construction workers,\n\
Seamen, railroad men, truckers, pilots\n\
Who lost their lives – but not what their lives stood for...\n\
Because men die, men lose, they are lost and they leave\n\
And so do women...\n\
\n\ ', 20, 210);

  textSize(8 + (mouseX / width)*20);
  text('I came from what they called a broken home\n\
But if they ever really called at our house\n\
They would have known how wrong they were\n\
We were working on our lives and our homes\n\
Dealing with what we had, not what we didn’t have\n\
\n\ ', 20, 350);

    textSize(14 + (mouseX / width)*-18);
  text('My life has been guided by women\n\
But because of them – I am a man\n\
God bless you mama – and thank you', 20, 450);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}