let slider;
let checkBox;
let input;
let submitButton;
let question;
let greeting;
let listQuestions = [];
let hamster;

function preload(){
  hamster = loadImage('images/hamster2.png')
}

function setup() {
  createCanvas(400, 800);
  let button = createButton ('Add Sticker');
  button.position(300, 650)
  button.mousePressed(() => {
  image(hamster,random (width),random(height), 50,50); 
  }); 

  slider = createSlider(0, 255, 100); // Add an initial value for the slider
  slider.position(10, 760);
  slider.size(200);
  checkBox = createCheckbox();
  checkBox.position(10, 710);

  input = createInput();
  input.position(10,650);

  submitButton = createButton('submit');
  // put the submit button next to the input box
  submitButton.position(input.x + input.width, input.y);
  submitButton.mousePressed(askSomething);

  // create a level 3 heading
  greeting = createElement('h3', 'Name This Art Work');
  greeting.style('color', 'white');
  // put the heading above the input box
  greeting.position(input.x, input.y - 50);

}

function askSomething() {
  question = input.value();
  input.value('');// reset input value to an empty string
  listQuestions.push(question);
  //remove the old question if it's more than 3 questions
  if (listQuestions.length>1){
    listQuestions.shift();
  }
}

function draw() {

  let val = slider.value();

  if (checkBox.checked()){
    background(0);
    
    noFill();
    drawEllipses(val); // Pass the slider value to the drawEllipses function
  
    fill(0);
    noStroke();
    rect(0,600,400,200);
  } else {
    let r = 122; // Generate random red value
    let g = 120; // Static green value
    let b = val; // Use slider value for blue channel
    background (r,g,b); 
    fill(0);
    noStroke();
    rect(0,600,400,200);
  }

  fill(255);
  textSize(30);
  for ( x = 0; x< listQuestions.length; x++){
    text(listQuestions[x], 10,50 + x *0); // 20 is the line length
  }

  textSize(20);
  textFont("TIMES NEW ROMAN");
  text("Show the Art Work",10,690,400);
  textAlign(LEFT);   
  
  textSize(20);
  textFont("TIMES NEW ROMAN");
  text("Change the Color",10,740,2000);
  textAlign(LEFT);   
}

function drawEllipses(val) {
  for (let i = 0; i < 60; i++) {
    strokeColour(val); // Set the stroke color for each ellipse
    strokeWeight(i * 0.2);
    ellipse(200, 200, 100 + 20 * i);
  }
}

function strokeColour(val) {
  let r = random(255); // Generate random red value
  let g = 120; // Static green value
  let b = val; // Use slider value for blue channel
  stroke(r, g, b); // Set stroke color
}






