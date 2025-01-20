function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);


noFill();


  drawEllipses();
}

function drawEllipses() {
  for(let i=0; i<60; i++){
    strokecolour();
    strokeWeight(i*0.2);
    ellipse(200,200,100+20*i);
  
  }
}

function strokecolour(){
  let z = random(255);
  stroke(200,120,z);
}