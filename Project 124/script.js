print = console.log

function preload() {

}

function setup() {
  canvas = createCanvas(500, 500)
  canvas.center()
  canvas.position(window.innerWidth - 600, "")

  video = createCapture(VIDEO)
  video.size(500, 500)
  video.center()
  video.position(100, "")
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses)
}

function modelLoaded() {
  print("PoseNet Initialized!")
}

function gotPoses(results) {
  if(results.length > 0) {
    print(`Nose X: ${noseX.toFixed(3)} || Nose Y: ${noseY.toFixed(3)}`)
  }
}

function draw() {

}