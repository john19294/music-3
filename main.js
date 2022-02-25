function setup(){
 pixelDensity(1.0)
canvas=createCanvas(600,500)
canvas.center()
video=createCapture(VIDEO)
video.hide()
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on("pose",gotPoses)
}
function preload(){
song1=loadSound("music.mp3")
song2=loadSound("music2.mp3")


}
function draw(){
image(video,0,0,600,500)









}
function modelLoaded(){
    console.log("Posenet is initialized.")
}
function gotPoses(results){
if(results.length>0){
Leftwristx=results[0].pose.leftWrist.X
Rightwristx=results[0].pose.rightWrist.X
Leftwristy=results[0].pose.leftWrist.Y
Rightwristy=results[0].pose.rightWrist.Y
console.log(results)
}


}
Leftwristx=0
Rightwristx=0
Leftwristy=0
Rightwristy=0
