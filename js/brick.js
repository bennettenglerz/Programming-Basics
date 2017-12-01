function Brick(pos, r) {
  this.pos = createVector(random(100, width - 100), random(100, height - 350));
  this.r = random(20, 80);

  this.display = function() {
    rect(this.pos.x, this.pos.y, this.r, this.r)
  }
}
