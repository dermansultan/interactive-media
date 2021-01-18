let img, logo, counter = 0;

preload = () => {
  img = loadImage("img/heart.jpg");
  logo = loadImage("img/logo.svg");
  //put in here anything you want to load.
};

setup = () => {
  //set up the document for how you want it to start
  createCanvas(1000, 1000);
  //   background(0);
};

draw = () => {
  //What you want to draw on the screen
  background(255);
  //   tint(67, 127, 255, 177);
  image(img, 0, 0);
  //   filter(POSTERIZE, 8);
  //   filter(GRAY, 8);
  image(logo, mouseX - logo.width / 2, mouseY - logo.height / 2);
  noFill();
  stroke(255, 120);
  strokeWeight(2);
  ellipse(mouseX, mouseY, 600, 600);

  rectMode(CENTER);
  rect(mouseX, mouseY, 600, 600);

  line(width / 2, height / 2, mouseX, mouseY);
  line(0, 0, mouseX, mouseY);
  line(width, 0, mouseX, mouseY);
  line(0, height, mouseX, mouseY);
  line(width, height, mouseX, mouseY);

  counter += 0.01;
  strokeWeight(6);
  if (counter > TWO_PI) {
    counter = 0;
  }
  arc(mouseX, mouseY, 650, 650, 0, counter);
}

keyPressed = () => {
    if (key == 's' || key == 'S'){
        console.log('yes')
        saveCanvas('filename', 'png');
    }
}
