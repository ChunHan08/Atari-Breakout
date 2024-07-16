const windowWidth = 600;
const windowHeight = 600;
const rows = 6;
const cols = 10;

let rightDown = false;
let leftDown = false;
let alive = true;

const brickWidth = Math.round(windowWidth / cols - 4);
const brickHeight = Math.round((windowHeight * 1/3) / rows - 10);

let bricks = [];
let score = 0;

let paddle = {
  x: windowWidth / 2 - 50,
  y: windowHeight - 15,
  width: 100,
  height: 10
}

let ball = {
  x: paddle.x - 25,
  y: paddle.y - 25,
  speedX: 6,
  speedY: 6,
  diameter: 15,
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateBricks();
}

function generateBricks() {
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      let brickData = {
        x: j * (brickWidth + 2) + 10,
        y: i * (brickHeight + 2) + 30,
        width: brickWidth,
        height: brickHeight,
      }
      bricks.push(brickData)
    }
  }
}
function drawBricks() {
  bricks.forEach(brick => {
    fill('red');
    rect(brick.x, brick.y, brick.width, brick.height);
    noStroke();
  })
}

function draw() {
  background("black");
  if(alive) {
    drawBricks();
  }
}

function keyPressed() {
  if(keyCode === RIGHT_ARROW) {
    rightDown = true;
  }
  if(keyCode === LEFT_ARROW) {
    leftDown = true;
  }
  
  if(keyCode === 32 && !alive) {
  alive = true;
  paddle.x = windowWidth / 2 - 50,
  ball.x = paddle.x - 25,
  ball.y = paddle.y - 50,
  ball.speedX = 6;
  ball.speedY = 6;
  bricks.splice(0, bricks.length);
  score = 0;
  generateBricks();
}

}

function keyReleased() {
  if(keyCode === RIGHT_ARROW) {
    rightDown = false;
  }
  if(keyCode === LEFT_ARROW) {
    leftDown = false;
  }
}

function drawPaddle() {
  fill('green');
  rect(paddle.x, paddle.y, paddle.width, paddle.height);
  if(rightDown && paddle.x + paddle.width < windowWidth) {
 paddle.x += 10;   
  }
  if(leftDown && paddle.x > 0) {
    paddle.x -= 10;
  }
}