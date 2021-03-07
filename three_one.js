var rain = [];
var rainingNow = true;
var bgcolor = (100, 100, 100);

function setup() {
  createCanvas(600, 600)
  .position(500, 100);
  //frameRate(60);
  
  for (i = 0; i < 300; i++) {
    rain[i] = new Rain(random(50, 550), random(0, -3000));
  }
}

poem='And so my life has been guided\n\
All the love I needed was provided\n\
And through my mothers sacrifices I saw where her life went\n\
\n\
To give more than birth to me, but life to me\n\
And this ain’t one of the clichés about black women being strong\n\
Cause hell if you’re weak, you’re gone\n\
But life courage, determined to do more than just survive\n\
\n\
And too many homes have a missing woman or man\n\
Without the feeling of missing love\n\
\n\
Maybe they are homes that are hurt\n\
But there are no real lives that hurt will not reach, that are not broken\n\
Unless the homes of soldiers – stationed overseas\n\
Or lost in battles, are broken\n\
Unless the homes of firemen, policemen, construction workers,\n\
Seamen, railroad men, truckers, pilots\n\
Who lost their lives – but not what their lives stood for...\n\
Because men die, men lose, they are lost and they leave\n\
And so do women...\n\
\n\
I came from what they called a broken home\n\
But if they ever really called at our house\n\
They would have known how wrong they were\n\
We were working on our lives and our homes\n\
Dealing with what we had, not what we didn’t have\n\
\n\
My life has been guided by women\n\
But because of them – I am a man\n\
God bless you mama – and thank you';

function draw() {
  background(bgcolor);
  fill(25)
  strokeWeight(0)
  textFont('Georgia')
  text(poem, 75, 50, 600, 600);

  //Check if it's raining or sunny
  if (rainingNow == true) {
    //background(100);
    for (i = 0; i < rain.length; i++) {
      rain[i].dropRain();
      rain[i].splash();
    }
  } 
}



function Rain(x, y) {
  this.x = x;
  this.y = y;
  //this.gravity = 9.8;
  this.length = 15;
  this.r = 0;
  this.opacity = 200;


  this.dropRain = function() {
    noStroke();
    fill(103);
    //rect(this.x, this.y,3,15);
    ellipse(this.x, this.y, 3, this.length);
    this.y = this.y + 4 //+ frameCount/60;
    if (this.y > 540) {
      this.length = this.length - 5;
      //this.y= random(0,-100);
    }
    if (this.length < 0) {
      this.length = 0;
    }
  }

  this.splash = function() {
    strokeWeight(2);
    //stroke(245, 200/frameCount);
    stroke(175, this.opacity);
    noFill();
    if (this.y > 540) {
      ellipse(this.x, 550, this.r * 2, this.r / 2);
      this.r++;
      this.opacity = this.opacity - 10;

      //keep the rain dropping
      if (this.opacity < 0) {
        this.y = random(0, -100);
        this.length = 15;
        this.r = 0;
        this.opacity = 200;
      }
    }
  }
}

  
