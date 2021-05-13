canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add() {
  background_imgTag = new Image();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = background_image;

  car1_imgTag = new Image();
  car1_imgTag.onload = uploadCar1;
  car1_imgTag.src = car1_image;

  car2_imgTag = new Image()
  car2_imgTag.onload = uploadCar2;
  car2_imgTag.src = car2_image;

  // Function:
  ////Upload Background
  function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
  }
  ////Upload Car 1
  function uploadCar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
  }
  ////Upload Car 2
  function uploadCar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
  }
}

window.addEventListener("keydown", myKeydown);
function myKeydown(e) {
  key_pressed = e.keyCode;
  console.log(key_pressed);
  //CAR 1 CONTROLS
  if (key_pressed === 38) {
    up();
    console.log("UP");
  }
  if (key_pressed === 40) {
    down();
    console.log("DOWN");
  }
  if (key_pressed === 37) {
    left();
    console.log("LEFT");
  }
  if (key_pressed === 39) {
    right();
    console.log("RIGHT");
  }

  //CAR 2 CONTROLS
  if (key_pressed === 87) {
    w();
    console.log("W");
  }
  if (key_pressed === 65) {
    a();
    console.log("A");
  }
  if (key_pressed === 83) {
    s();
    console.log("S");
  }
  if (key_pressed === 68) {
    d();
    console.log("D");
  }
}

//CAR 1
function up() {
  if (car1_y >= 0) {
    car1_y = car1_y - 10
    console.log(
      "When up arrow is pressed, x = " + car1_x + " | y = " + car1_y
    );
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
  }
}
function down() {
  if (car1_y <= 500) {
    car1_y = car1_y + 10
    console.log(
      "When up arrow is pressed, x = " + car1_x + " | y = " + car1_y
    );
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
  }
  
}
function left() {
  if (car1_x >= 0) {
    car1_x = car1_x - 10
    console.log(
      "When up arrow is pressed, x = " + car1_x + " | y = " + car1_y
    );
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
  }
  
}
function right() {
  if (car1_x <= 700) {
    car1_x = car1_x + 10
    console.log(
      "When up arrow is pressed, x = " + car1_x + " | y = " + car1_y
    );
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
  }
  
}


//CAR 2
function w() {
  if (car2_y >= 0) {
    car2_y = car2_y - 10
    console.log(
      "When up arrow is pressed, x = " + car2_x + " | y = " + car2_y
    );
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
  }
}
function s() {
  if (car2_y <= 500) {
    car2_y = car2_y + 10
    console.log(
      "When up arrow is pressed, x = " + car2_x + " | y = " + car2_y
    );
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
  }
  
}
function a() {
  if (car2_x >= 0) {
    car2_x = car2_x - 10
    console.log(
      "When up arrow is pressed, x = " + car2_x + " | y = " + car2_y
    );
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
  }
  
}
function d() {
  if (car2_x <= 700) {
    car2_x = car2_x + 10
    console.log(
      "When up arrow is pressed, x = " + car2_x + " | y = " + car2_y
    );
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
  }
  
}