let isFlashing = false;

function setup() {
  createCanvas(400, 400);
  drawGrid(); 

  //button
  let button = createButton('let it shine');
  button.position(330, 420); // button position
  button.mousePressed(toggleFlashing); // button working
}

function draw() {
  if (isFlashing) {
    drawGrid(); 
  }
}

function drawGrid() {
  let gridSize = 40; // size of the grid

  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      fill(random(250), random(255), random(240)); // random colour 
      rect(x, y, gridSize, gridSize); // rect in the grids
    }
  }
}

function toggleFlashing() {
  isFlashing = !isFlashing;
}
