canvas = new fabric.Canvas("myCanvas");
var player_y = 50;
var player_x = 50;

var block_image_width = 50;
var block_image_height = 50;

var player_object = "";

function playerUpdate() {
  canvas.remove(player_object);
  fabric.Image.fromURL("player.png", function (Img) {
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
      top: player_y,
      left: player_x,
    });
    canvas.add(player_object);
  });
}

playerUpdate()

function new_image(get_image) {
  fabric.Image.fromURL(get_image, function (Img) {
    block_image_object = Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
      top: player_y,
      left: player_x,
    });
    canvas.add(block_image_object);
  });
}
  window.addEventListener("keydown", my_keydown);

  function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == "80") {
      console.log("p and shift pressed together");
      block_image_width = block_image_width + 10;
      block_image_height = block_image_height + 10;
      document.getElementById("current_width").innerHTML = block_image_width;
      document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey && keyPressed == "77") {
      console.log("m and shift pressed together");
      block_image_width = block_image_width - 10;
      block_image_height = block_image_height - 10;
    }

    if (e.keyCode == "81") {
      console.log("q")
      new_image('spiderman_face.png')
    }if (e.keyCode == "87") {
      console.log("w")
      new_image('thor_face.png')
    }if (e.keyCode == "69") {
      console.log("e")
      new_image('ironman_face.png')
    }if (e.keyCode == "82") {
      console.log("r")
      new_image('hulk_face.png')
    }

    if (e.keyCode == 48) {
      console.log("0")
      controls();
      
    }




    if (e.keyCode == 38) {
      up()
      console.log("Up Arrow");
    }if (e.keyCode == 37) {
      left()
      console.log("Left Arrow");
    }if (e.keyCode == 40) {
      down()
      console.log("Down Arrow")
    }if (e.keyCode == 39) {
      right()
      console.log("Right Arrow")
    }



    if (e.keyCode == "65") {
      console.log("a");
      new_image('spiderman_body.png');
    }if (e.keyCode == "83") {
      console.log("s");
      new_image('hulk_body.png');
    }if (e.keyCode == "68") {
      console.log("d");
      new_image('ironman_body.png');
    }


    if (e.keyCode == 90) {
      console.log("z");
      new_image("spiderman_left_hand.png");
    }if (e.keyCode == 88) {
      console.log("x");
      new_image("thor_left_hand.png");
    }if (e.keyCode == 67) {
      console.log("c");
      new_image("hulk_left_hand.png");
    }if (e.keyCode == 86) {
      console.log("v");
      new_image("ironman_left_hand.png");
    }if (e.keyCode == 66) {
      console.log("b");
      new_image("captain_america_left_hand.png");
    }

    if (e.keyCode == 49) {
      console.log("1");
      new_image("spiderman_right_hand.png");
    }if (e.keyCode == 50) {
      console.log("2");
      new_image("thor_right_hand.png");
    }if (e.keyCode == 51) {
      console.log("3");
      new_image("hulk_right_hand.png");
    }if (e.keyCode == 52) {
      console.log("4");
      new_image("ironman_right_hand.png");
    }

    if (e.keyCode == 55) {
      console.log("7");
      new_image("spiderman_legs.png");
    }if (e.keyCode == 56) {
      console.log("8");
      new_image("hulk_legs.png");
    }if (e.keyCode == 57) {
      console.log("9");
      new_image("ironman_legs.png");
    }
  }


function controls() {
  console.clear();
  console.log("_-_-_-_-_-_-_-_-_-CONTROLS_-_-_-_-_-_-_-_-_-");
  console.log("Heads:");
  console.log("q = Spiderman's Face");
  console.log("w = Thor's Face");
  console.log("e = Ironman's Face");
  console.log("r = Hulk's Face");
  console.log("");
  console.log("Bodies:");
  console.log("a = Spiderman's body");
  console.log("s = Hulk's body");
  console.log("d = Ironman's body");
  console.log("");
  console.log("Left Hands:");
  console.log("z = Spider Man's Left Hand");
  console.log("x = Thor's Left Hand");
  console.log("c = Hulk's Left Hand");
  console.log("v = Ironman's Left Hand");
  console.log("b = Captain America's Left Hand");
  console.log("");
  console.log("Right Hands:");
  console.log("1 = Spider Man's Right Hand");
  console.log("2 = Thor's Right Hand");
  console.log("3 = Hulk's Right Hand");
  console.log("4 = Spider Man's Right Hand");
  console.log("");
  console.log("Legs:");
  console.log("7 = Spiderman's Legs");
  console.log("8 = Hulk's Legs");
  console.log("9 = Ironman's Legs");
  console.log("");
  console.log("Move:");
  console.log("Up Arrow    = Up");
  console.log("Left Arrow  = Left");
  console.log("Down Arrow  = Down");
  console.log("Right Arrow = Right");
}



function up() {
  console.log("Up");
    player_y = player_y - block_image_height;
    playerUpdate();
  
}

function left() {
  console.log("Left");
    player_x = player_x - block_image_width;
    playerUpdate();
  
}

function down() {
  console.log("Down");
    player_y = player_y + block_image_height;
    playerUpdate();
  
}

function right() {
  console.log("Right");
  player_x = player_x + block_image_width;
  playerUpdate();
}