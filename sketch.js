let player;
let playerimg;
let obs;
let obs2;
let obsatcles = [];
let bg;
let score = 0;
let wordClassifier;

function preload() {
  playerimg = loadImage("player.png");
  obsImg = loadImage("obstacle.png");
  bg = loadImage(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkI3bXMSSpeJed_7yD8CcyhthN6FBCQ0BUtuYmt4a_oxopTf4oORIUEnemFeBGP51GD7g&usqp=CAU"
  );
  obs2 = loadImage("obstacle2.png");
  let options = { probabilityThreshold: 0.85 };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

let y = 0;
function setup() {
  createCanvas(1080, 500);
  player = new Player();
  wordClassifier.classify(heardWord);
}
function heardWord(error, results) {
  console.log(results[0]);
  if (results[0].label === "up") {
    player.jump();
  }
}
function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  background(bg);

  if (random(1) < 0.01) {
    obsatcles.push(new Obstacle());
  }

  for (let obs of obsatcles) {
    obs.show();
    obs.move();

    if (player.collided(obs) === true) {
      textSize(32);
      fill("red");
      text(
        "Game Over! Refresh to restart" + "your score : " + score,
        width / 2 - 200,
        height / 2
      );
      text("(This Hitbox Sucks Ngl)", width / 2 - 200, height / 2 + 50);
      noLoop();
    }
    if (obs.x < -obs.size) {
      score++;
      let i = obsatcles.indexOf(obs);
      obsatcles.splice(i, 1);
    }
  }
  player.show();
  player.move();
}
