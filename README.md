# workshop-task-4
Here is a URL to the webpage for this project: [Link](https://climedu.github.io/workshop-task-4/)

## Task (Coding Environments & Sharing Work)
- Create an interactive p5.js sketch with at least three different kinds of user input events.
- Experiment with ways to record and redeploy inputs from the user.
- Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.

## Overview
- Following the instruction in the workshop
- Learn more interaction with button, check box, slider, create select, and create input
- Forking another student project and apply it to this workshop
- Applying the interactions input events and experimenting with ways to record and redeploy inputs from the users


## Workshop Notes

### More Interaction
Instead of random, add some mousePressed function

```ruby
let emojis = []
let e1, e2, e3;

function preload(){
e1 = loadImage("emojis/emoticon_1.png");
e2 = loadImage("emojis/emoticon_2.png");
e3 = loadImage("emojis/emoticon_3.png");
}

function setup(){
  emojis.push(e1);
  emojis.push(e2);
  emojis.push(e3);
  createCanvas(400,400);
  background(220);
}

function mousePressed(){
  let r = random(emojis);
  image(r, mouseX, mouseY);
}

function draw() {

}
```
<img width="400" alt="Screenshot 2025-01-27 at 11 46 37 AM" src="https://github.com/user-attachments/assets/326523bd-b39e-4d47-bb72-94f360102ae8" />

### Button
- Since p5 is web based, we can use HTML elements like the stuff we found on the website ( buttons, input boxes, checkboxes, slider, etc.)
  
```ruby
let button = createButton ('click here');
button.position(width/2, height/2)
button.mousePressed(() => {
  let r = random(emojis);
  image(r,random (width),random(height));
});
```

<img width="400" alt="Screenshot 2025-01-27 at 11 59 49 AM" src="https://github.com/user-attachments/assets/165acf8a-97c1-4b64-964f-f2c990936c38" />

### Check Box
- State the checkbox variable, then
- checkBox = createCheckbox();
- checkbox.position(200,150);
- Adding some if conditional statement ( if the checked box checked, the random emojis played, but if not, it'll stop and the background is red)
```ruby
function draw () {
  background (220);
  if (checkbox.checked(){
    let r = random(emojis);
    image(r,200,200);
  } else {
    background (255,0,0);
}
}
```
<img width="400" alt="Screenshot 2025-01-27 at 12 13 04 PM" src="https://github.com/user-attachments/assets/93b79908-deee-4999-b85f-39ddb6343864" />

### Slider
Can adjust the size, position, and value of the slider 

```ruby
let img;
let slider;

function preload(){
  img = loadImage("images/apples.jpg");
}

function setup(){
  createCanvas(400,400);
  slider = createClider(0,255);
  slider.position(100,350);
  slider.size(200);
}

function draw() {
  background(220);
  let val = slider.value();
  img.loadPixels();
  for ( let y = 0 ; y < img.height; y ++){
    for ( let x = 0 ; x < img.width; x ++) {
      img. pixels[index] = val
      img. pixels[index+3] = 255 // alpha value
    }
  }
  img.updatePixels();
  image(img,0,0);
}

```
<img width="400" alt="Screenshot 2025-01-27 at 12 17 26 PM" src="https://github.com/user-attachments/assets/b154a03b-3012-4ec4-bee7-223f75d09603" />

- Can change the background according to the value of the slider


```ruby
function draw() {
  //background(220);
  let val = slider.value();
  background(val);
}
```
<img width="400" alt="Screenshot 2025-01-27 at 12 19 02 PM" src="https://github.com/user-attachments/assets/8cd3d245-9afd-4581-a884-dfc1dced738d" />

Another example that applies to the pics, change the red value of image

<img width="400" alt="Screenshot 2025-01-27 at 5 38 55 PM" src="https://github.com/user-attachments/assets/e75fbd1d-349e-4d21-b5c7-1c59cdaa4a2b" />

### Create Select
Selection function also use an if conditional statement to determine the action on the selected option
```ruby
let e1, e2, e3;
let selection;

function preload(){
  e1 = loadImage("emojis/emoticon_1.png");
  e2 = loadImage("emojis/emoticon_2.png");
  e3 = loadImage("emojis/emoticon_3.png");
}

function setup(){
  createCanvas(400,400):
  selection = createSelect();
  selection.position(100,100);
  selection.option('emoji 1');
  selection.option('emoji 2');
  selection.option('emoji 3');

function draw(){
  background(220);
  let x = selection.selected();
  if ( x === 'emoji 1'){
    image (e1, 200,200);
  } else if (  x === 'emoji 2'){
    image (e2, 200,200);
  } else if (  x === 'emoji 3'){
    image (e3, 200,200);
  }
}
```

<img width="400" alt="Screenshot 2025-01-27 at 12 36 48 PM" src="https://github.com/user-attachments/assets/bf2b7b1e-58c6-490d-8875-45158737f86b" />

### theInput (Create input)
Creating an input box and the outcomes will appear

```ruby
let theInput;

function setup() {
  createCanvas(400,400);
  theInput = createInput();
  theInput.position(100,200);
}

function draw(){
  background(220);
  let words = theInput.value();
  text(words,20,50);
}
```

<img width="400" alt="Screenshot 2025-01-27 at 12 39 11 PM" src="https://github.com/user-attachments/assets/969f18d5-1544-4ae1-b6be-ad5434aada37" />


For longer text, you can use textfile (.txt)

<img width="400" alt="Screenshot 2025-01-27 at 12 51 56 PM" src="https://github.com/user-attachments/assets/0aa210de-d9b0-4799-80a2-8cdeb16f1056" />

<img width="400" alt="Screenshot 2025-01-27 at 12 51 31 PM" src="https://github.com/user-attachments/assets/aeccd215-2033-4d2d-9106-6ed2f8c37c7b" />

### Input Box + Button (submit button)

<img width="400" alt="Screenshot 2025-01-27 at 12 53 38 PM" src="https://github.com/user-attachments/assets/39d7087e-759c-46ce-b2bc-4deb7db18a92" />

```ruby
let input;
let submitButton;
let question;
let greeting;
let listQuestions = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // changes depends on the window's size
  //input box
  input = createInput();
  input.position(100,100);
  submitButton = createButton('submit');
  // put the submit button next to the input box
  submitButton.position(input.x + input.width, input.y);
  submitButton.mousePressed(askSomething);
  // create a level 2 heading
  greeting = createElement('h2', 'Questions?');
  greeting.style('color', 'black');
  // put the heading above the input box
  greeting.position(input.x, input.y - 50);
}

function askSomething() {
  question = input.value();
  input.value('');// reset input value to an empty string
  listQuestions.push(question);
  //remove the old question if it's more than 3 questions
  if (listQuestions.length>3){
    listQuestions.shift();
  }
}

// to draw all the elements inside the array
function draw() {
  background(220);
  for ( x = 0; x< listQuestions.length; x++){
    text(listQuestions[x], 20,180 + x *20); // 20 is the line length
  }
}

```

<img width="400" alt="Screenshot 2025-01-27 at 1 15 38 PM" src="https://github.com/user-attachments/assets/991816eb-1241-493c-b89f-1db9056e2bac" />

### Window Resize
Adjusting the size of canvas  when the window size is resized

```ruby
function window resized(){
  resize canvas(windowWidth, window height);
}

```

## Task Journey
I started by understanding Josephine's work in workshop 1. She did the loop with the circles, experimenting with the mouseMoved function and using the button. Her task is to loop a circle with random colours generated. In response to the task, I plan to add some slider, checkbox, and inputbox+button

<img width="400" alt="image" src="https://github.com/user-attachments/assets/27cdae72-6046-42b0-b811-bb64347e9da0" />

<img width="400" alt="image" src="https://github.com/user-attachments/assets/3a7cd76a-4233-4601-b76d-9a742a74670e" />

<img width="400" alt="image" src="https://github.com/user-attachments/assets/e700767b-2ce7-4112-bea6-1f0f69341edc" />


### Process 1
Adding the slider to change the color value, I also change the canvas size

<img width="400" alt="Screenshot 2025-01-27 at 5 55 00 PM" src="https://github.com/user-attachments/assets/ffbf589a-ddc8-489e-b4c8-e109b0bf9ccf" />


### Process 2
Adding Check Box to turn on the elipse animation

<img width="400" alt="Screenshot 2025-01-27 at 6 05 26 PM" src="https://github.com/user-attachments/assets/aaf6414c-30c8-4299-8fd8-0438e0e45894" />


### Process 3
Adding Input Box + Button, also adding some other text to show the function of each element

<img width="400" alt="Screenshot 2025-01-27 at 6 27 02 PM" src="https://github.com/user-attachments/assets/a2bb7f10-138a-4ad2-95bb-2547d850c6ea" />

<img width="400" alt="Screenshot 2025-01-27 at 6 27 20 PM" src="https://github.com/user-attachments/assets/6f43eef2-9175-4174-8f7c-b4b91a0d7949" />

### Process 4
Allow the slider to change the plain background as well

<img width="400" alt="Screenshot 2025-01-27 at 6 35 32 PM" src="https://github.com/user-attachments/assets/0a469042-3057-4bec-ab51-52bcbb401850" />

### Result : 

Adding a button to add stickers

<img width="400" alt="Screenshot 2025-01-27 at 6 59 37 PM" src="https://github.com/user-attachments/assets/2f80ef51-8b2c-40c7-a5d1-99eae9f27fcf" />

### Commentaries
- It was fun, and since it allows interaction, the results are always different from before
- It was a good thing to do fork repositories since I can develop more and save time on this project
- It was also inspiring to see other student's projects

## Future Development
- Adding features allowing users to save the created pictures
- Adding features allowing users to see the history of saved created pictures
- Adding more sliding bars allowing control the red and green value of the colors
