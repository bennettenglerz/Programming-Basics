var going = true;

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

function setup() {
  var canv = createCanvas(w, h);
  canv.parent("bgCanvas");
  smooth();
  frameRate(8);
  background(30);
  textAlign(RIGHT);
  textSize(12);
  fill(255);
  text("C to clear. Click to stop/start drawing", w-50, h-100);
}

function draw() {
  if(going) {
  noStroke();
  fill(120);
  ellipse(pmouseX,pmouseY, 10, 10);
  stroke(120);
  line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function mousePressed() {
  going = !going;
}

function keyTyped() {
  if (key === 'c') {
    background(30);
    textAlign(RIGHT);
    textSize(12);
    fill(255);
    text("C to clear. Click to stop/start drawing", w-50, h-100);
  }
}
