quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser","eye","eyeglasses","face","fan","feather","fence","finger","fire hydrant","fireplace","firetruck","fish","flamingo","flashlight","flip flops","floor lamp","flower","flying saucer","foot","fork","frog","frying pan","garden","garden hose","giraffe","goatee","golf club","grapes","grass","guitar","hamburger","hammer","hand","harp","hat","headphones","hedgehog","helicopter","helmet","hexagon","hockey puck","hockey stick","horse","hospital","hot air balloon","hot dog","hot tub","hourglass","house","house plant","hurricane","ice cream","jacket","jail","kangaroo","key","keyboard","knee","knife","ladder","lantern","laptop","leaf","leg","light bulb","lighter","lighthouse","lightning","line","lion","lipstick","lobster","lollipop","mailbox","map","marker","matches","megaphone","mermaid","microphone","microwave","monkey","moon","mosquito","motorbike","mountain","mouse","moustache","mouth","mug","mushroom","nail","necklace","nose","ocean","octagon","octopus","onion","oven","owl","paintbrush","paint can","palm tree","panda","pants","paper clip","parachute","parrot","passport","peanut","pear","peas","pencil","penguin","piano","pickup truck","picture frame","pig","pillow","pineapple","pizza","pliers","police car","pond","pool","popsicle","postcard","potato","power outlet","purse","rabbit","raccoon","radio","rain","rainbow","rake","remote control","rhinoceros","rifle","river","roller coaster","rollerskates","sailboat","sandwich","saw","saxophone","school bus","scissors","scorpion","screwdriver","sea turtle","see saw","shark","sheep","shoe","shorts","shovel","sink","skateboard","skull","skyscraper","sleeping bag","smiley face","snail","snake","snorkel","snowflake","snowman","soccer ball","sock","speedboat","spider","spoon","spreadsheet","square","squiggle","squirrel","stairs","star","steak","stereo","stethoscope","stitches","stop sign","stove","strawberry","streetlight","string bean","submarine","suitcase","sun","swan","sweater","swingset","sword","syringe","table","teapot","teddy-bear","telephone","television","tennis racquet","tent","The Eiffel Tower","The Great Wall of China","The Mona Lisa","tiger","toaster","toe","toilet","tooth","toothbrush","toothpaste","tornado","tractor","traffic light","train","tree","triangle","trombone","truck","trumpet","tshirt","umbrella","underwear","van","vase","violin","washing machine","watermelon","waterslide","whale","wheel","windmill","wine bottle","wine glass","wristwatch","yoga","zebra","zigzag"]

console.log({"quick draw data set":quick_draw_data_set})

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



chosen_quick_draw = ""
time_counter_ms = 0
time_check = ""
drawn_sketch = ""
answer_holder = ""
score = -28
time_limit_seconds = 20
games_played = -1

function preload() {
  setTimeout(() => {
    classifier = ml5.imageClassifier("MobileNet")
    resetgame()
    
  }, 500);
}

function setup() {
  canvas = createCanvas(300, 300)
  canvas.center()
  clearCanvas()
  document.getElementsByTagName("canvas")[0].addEventListener("mouseup", classifyCanvas);
}

function draw() {
  strokeWeight(6)
  stroke(0)
  check_sketch()
  if(mouseIsPressed) {
    line(pmouseX-7, pmouseY-5, mouseX-7, mouseY-5)
  }
  time_counter_ms += 10
  document.getElementById("timer").innerText = "Timer: " + (time_counter_ms / 1000).toFixed(2) + "/" + time_limit_seconds.toFixed(2)
}

function check_sketch() {
  if(drawn_sketch == chosen_quick_draw) {
    answer_holder = "set";
    score++;
  }
  if (time_counter_ms/1000 >= time_limit_seconds) {
    time_counter_ms = 0
    // alert("You could'nt complete the drawing :'(\nPress OK to reload")
    location.reload()
  }
  if(stroke=='black' || stroke=='red'){
    line(30,40,25,50)
  }

}

function clearCanvas() {
  background("white");
  time_counter_ms = 0
}

function classifyCanvas() {
  classifier.classify(canvas, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results);
  document.getElementById('sketch_name').innerHTML = 'Label: ' + results[0].label;

  document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';
  
  drawn_sketch = results[0].label

  if (results[0].label == answer_holder) {
    resetgame()
    alert("Yay! You got this one!")
    score++;
    resetgame()
  }

  // if(document.getElementById("synth").value != "off") {
  //   utterThis = new SpeechSynthesisUtterance(results[0].label);
  //   synth.speak(utterThis);
  // }
  
}

function resetgame() {
  chosen_quick_draw = quick_draw_data_set[randomNumber(0, quick_draw_data_set.length)]
  clearCanvas()
  time_counter_ms = 0
  games_played++;
  document.getElementById("score").innerText = "Score: " + score + "/" + games_played
  console.log("Chosen dataset: "+chosen_quick_draw)
  document.getElementById("sketch_to_draw").innerText = "Sketch to be drawn: " + chosen_quick_draw
}