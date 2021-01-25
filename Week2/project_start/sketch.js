let min, max, radius, h, s, b;
let speed = 0;

setup = () => {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  radius = 150;
  colorMode(HSB, 255, 255, 255);
  h = random(255);
  s = random(255);
  b = random(255);
};

let drawEllipse = () => {
  noFill();
  stroke(h, s, b, 50);
  ellipse(0, 0, 120, 80);
};

mouseMoved = () => {
  radius = map(mouseY, 0, windowHeight, 100, 350);
};

draw = () => {
  fill(0, 100);
  rect(0, 0, windowWidth, windowHeight);
  speed += 15;

  h = map(mouseX, 0, width, 0, 255);
  s = map(mouseY, 0, width, 100, 255);
  b = map(mouseY, 0, width, 100, 21);

  min = map(mouseX, 0, width, 0.1, 0.5);
  max = map(mouseX, 0, width, 0.8, 1.8);

  translate(width / 2, height / 2);
  for (var i = 0; i < 360; i++) {
    push();
    rotate(radians(i));
    translate(0, radius);
    rotate(radians(i * 3));
    scale(
      map(sin(radians(i * 6 + speed)), -1, 1, min, max),
      map(sin(radians(i * 3 + speed)), -1, 1, min, max)
    );
    drawEllipse();
    pop();
  }
};
