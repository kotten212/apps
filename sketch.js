let img, img2, whiteBird, img3, x;
let note;
let noteimg;
let play;
let bird;
let redBird, yellowBird, orangeBird, greenBird, blueBird;
let whitePlay, redPlay;
let birdChirp;


function preload() {
  img = loadImage('assets/youtube.jpg');
  img2 = loadImage('assets/Blue.jpg');
  img3 = loadImage('assets/Black.jpg');
  whiteBird = loadImage('assets/Bird.png');
  noteimg = loadImage('assets/Note.png');
  redBird = loadImage('assets/RedBird.png');
  orangeBird = loadImage('assets/OrangeBird.png');
  yellowBird = loadImage('assets/YellowBird.png');
  greenBird = loadImage('assets/GreenBird.png');
  blueBird = loadImage('assets/BlueBird.png');
  whitePlay = loadImage('assets/whitePlay.png');
  redPlay = loadImage('assets/RedPlay.png');
  
  soundFormats('wav');
  birdChirp = loadSound('assets/chirp');
}


function setup() {
  createCanvas(800, 600);
  background(200);
  
  image(img, 100, 150, 200, 200);
  image(img2, 300, 150, 200, 200);
  image(whiteBird, 300, 150, 200, 200);
  image(img3, 500, 150, 200, 200);
  image(noteimg, 500, 150, 200, 200);
  image(whitePlay, 100, 150, 200, 200)
  
  note = new Note();
  play = new Play();
  bird = new Bird();
  
}


class Note {
  constructor() {
    this.x = 500;
    this.y = 150;
    this.width = 200;
    this.height = 200;
  }
  
  move() {
    this.x = this.x + random(-20, 20);
    this.y = this.y + random(-20, 20);
  }
  
  show() {
    image(noteimg, this.x, this.y, this.width, this.height);
  }
}


class Bird {
  constructor() {
    this.x = 300;
    this.y = 150;
    this.width = 200
    this.height = 200
  }
  
  move() {
    this.x1 = this.x + random(-100, 100);
    this.y1 = this.y + random(-100, 100);
    this.x2 = this.x + random(-100, 100);
    this.y2 = this.y + random(-100, 100);
    this.x3 = this.x + random(-100, 100);
    this.y3 = this.y + random(-100, 100);
    this.x4 = this.x + random(-100, 100);
    this.y4 = this.y + random(-100, 100);
  }
  
  show() {
    image(redBird, this.x, this.y, this.width, this.height);
    image(orangeBird, this.x1, this.y1, this.width,   this.height);
    image(yellowBird, this.x2, this.y2, this.width, this.height);
    image(greenBird, this.x3, this.y3, this.width, this.height);
    image(blueBird, this.x4, this.y4, this.width, this.height);
  }
}


class Play {
  constructor() {
    this.x = random(0,200);
    this.y = random(0,200);
    this.x1 = random(0,200);
    this.y1 = random(0,200);
    this.width = 200;
    this.height = 200;
  }
  
  move() {
    this.x = this.x + random(-50, 50);
    this.y = this.y + random(-50, 50);
    this.x1 = this.x1 + random(-50, 50);
    this.y1 = this.y1 + random(-50, 50);
  }
  
  show() {
    image(whitePlay, this.x, this.y, this.width, this.height);
    image(redPlay, this.x1, this.y1, this.width, this.height);
  }
}


function draw() {
  let t = "Click the screen below."
  textSize(30);
  text(t, 250, 50);
  

  if (mouseIsPressed) {
    note.move();
    note.show();
    play.move();
    play.show();
    bird.move();
    bird.show();
    birdChirp.play();
  } else {
    
  }
}

