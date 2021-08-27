class Player {
  constructor() {
    this.size = 100;
    this.x = 50;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 0.5;
  }
  show() {
    image(playerimg, this.x, this.y, 50, this.size);
  }
  jump() {
    this.velocityY = -10;
  }
  move() {
    this.y += this.velocityY;
    this.y += this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }

  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 50,
      this.size - 50,

      currentObs.x,
      currentObs.y,
      currentObs.size - 30,
      currentObs.size - 30
    );
    return isColliding;
  }
}
