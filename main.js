difference=0;
right=0;
left=0;
noseX=0;
noseY=0;
function setup(){
canvas=createCanvas(400, 400)
canvas.center()
video=createCapture(VIDEO)
video.size(500, 500)
poseNet=ml5.poseNet(video, modelloaded)
poseNet.on("pose", gotPoses);
}
function draw(){
    background("lightblue")
    textSize(difference)
text("Ashvika", noseX, noseY)
document.getElementById("squareside").innerHTML="Width And Height Of A Square Will Be =" + Math.floor(difference) + "px"
}
function modelloaded(){
    console.log("posenet is initialized")
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = "+ noseX +" noseY "+noseY)
        left=results[0].pose.leftWrist.x;
        right=results[0].pose.rightWrist.y;
        difference=right-left

    }
}