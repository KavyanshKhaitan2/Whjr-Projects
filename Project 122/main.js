function generateRandom(max) {
  return Math.floor(Math.random() * max)
}

x = 0;
y = 0;

draw = "";
apple_image = ""
speak_data = ""
to_number = ""

screen_width = window.innerWidth

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  speak_data = "How many apples do you want to draw?"
  document.getElementById("status").innerHTML = speak_data;
  speak()
  setTimeout(function() {
    recognition.start();
  }, 1500);
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML = "You said " + content;
  to_number = Number(content)
  if(Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "Drawing "+to_number+" Apples";
    draw = "apple"
  }
  else {
    speak_data = "Sorry! "+content+" is not a number, please try again!"
    document.getElementById("status").innerHTML = speak_data;
    speak()
  }
}




function preload() {
  apple = loadImage("./apple.png")
}

function setup() {
 createCanvas(screen_width, window.innerHeight - 150)
}

function draw() {
  if(draw == "apple") {
    speak_data = to_number + " Apples drawn"
    document.getElementById("status").innerHTML = speak_data;
    speak()
    draw = "";
    for (let i = 0; i <= to_number; i++) {
      x = generateRandom(screen_width - 50)
      y = generateRandom(window.innerHeight - 150 - 50)
      image(apple, x, y, 50, 50)
      print("apple drawn")
    }
  }
}
setInterval(() => {
  if(draw == "apple") {
    speak_data = to_number + " Apples drawn"
    document.getElementById("status").innerHTML = speak_data;
    speak()
    draw = "";
    for (let i = 0; i <= to_number; i++) {
      x = generateRandom(screen_width - 50)
      y = generateRandom(window.innerHeight - 150 - 50)
      image(apple, x, y, 50, 50)
      print("apple drawn")
    }
  }
}, 10);



function speak(){
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}
