let insertText, sentence, msg;
let fonts = [];

function setup() {
  createCanvas(400, 400);
  background(230);

  fonts[0] = 'Courier New';
  fonts[1] = 'Verdana';
  fonts[2] = 'Oswald';
  fonts[3] = 'Arial';
  fonts[4] = 'Georgia';

  //text above
  insertText = createElement('h2', 'Insert Text Below');
  insertText.position(110, 40);

  //textbox input
  sentence = createInput();
  sentence.position(90, 160);

  //button
  button = createButton('GO!');
  button.position(sentence.x + sentence.width, 160);

  // Use the mousePressed() method 
  button.mousePressed(outputSentence);
  sentence.changed(outputSentence);

  //checkboxes
  checkbox1 = createCheckbox(' invisible');
  checkbox1.position(90, 100);

  checkbox2 = createCheckbox(' random colour');
  checkbox2.position(200, 100);

  checkbox3 = createCheckbox(' random scale');
  checkbox3.position(200, 130);

  checkbox4 = createCheckbox(' random font');
  checkbox4.position(90, 130);


}

function draw() {
}

function outputSentence(){
  background(230);
  fill(255);
  rect(50, 200, 300, 150);

  fill(0);
  textSize(30);
  textFont('Arial');

  let msg = sentence.value();

  
  if (checkbox2.checked()) {
    fill(random(255), random(255), random(255));
  } 

  if (checkbox1.checked()) {
    fill(255);
  }

  if (checkbox4.checked()) {
    textFont(str(fonts[int(random(0, 4))]));
  }

  if (checkbox3.checked()) {
    textSize(random(10, 40));
  }

  textAlign(CENTER, CENTER);
  text(msg, width/2, 270);
  
  // sentence.value('');


}


