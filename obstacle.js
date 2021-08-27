class Obstacle {
  constructor() {
    this.size = 100;
    this.x = width;
    this.y = height - this.size;
    this.option = random;
  }

  show() {
    if (this.option > 0.5) {
      image(obs, this.x, this.y, this.size, this.size);
    } else {
      image(obs2, this.x, this.y, this.size, this.size);
    }
  }

  move() {
    this.x -= 6;
  }
}
