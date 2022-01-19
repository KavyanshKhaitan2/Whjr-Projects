function setup() {
  canvas = createCanvas(640*1.5, 480*1.5);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  image(video, (640*1.45)*0.15, (480*1.45)*0.25, 640, 450);
  tint(tint_color);
  // Set colors
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);

  // Circle 1
  ellipse(100, 130, 80, 80);

  // Circle 2
  ellipse(480*1.7, 130, 80, 80);

  // Circle 3
  ellipse(100, 640+20, 80, 80);

  // Circle 4
  ellipse(480*1.7, 640+20, 80, 80);

  // RECTANGLES
  // Set colors
  fill(50, 100, 50);
  stroke(127, 63, 120);

  // Rect 1
  rect(140, 120, 635, 20);

  // Rect 2
  rect(90, 170, 20, 450);

  // Rect 3
  rect(805, 170, 20, 450);

  // Rect 1
  rect(140, 650, 635, 20);
}

function take_snapshot() {
  save(prompt("Enter Filename:", "kavyansh_khaitan")+".png");
}

function filter_tint() {
  tint_color = document.getElementById("color_name").value;
}