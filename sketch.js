let x = 0;
let reverse = false; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke(); 
}

function draw() {
  background(0);
  
  if (reverse) {
    x -= 0.5; // Slower decrement
    if (x < 0) {
      reverse = false;  
    }
  } else {
    x += 0.5; // Slower increment
    if (x > 360) {
      reverse = true;
    }
  }

  fill(x, 100, 100);
  rect(0, 0, width, height);
}
