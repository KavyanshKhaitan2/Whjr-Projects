//////////////////////
// Code By Kavyansh //
//////////////////////

function preload() { // Defines a function preload which is meant to load assets before the setup phase

}

function setup() { // Defines a function setup which creates the canvss and sets up everything for use
  canvas = createCanvas(300,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses)
}

function draw() { // Draws, this is a repeat loop which runs infinitely
  image(video, 0, 0, 300, 300)
}

function download_image() { // Onclick: Download Filtered Image button
  save(prompt("Enter filename: ") + ".png")
}

function modelLoaded() {
  console.log("PoseNet is initialised")
}

function gotPoses(results) {
  if(results.length != 0) {
    console.log(results);
    console.log("Pose X: "+results[0].pose.nose.x)
    console.log("Pose Y: "+results[0].pose.nose.y)
  }
}