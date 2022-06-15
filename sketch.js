function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let diameter = 200 * sin(0.01*frameCount);
  circle(width/2, height/2, diameter);
}