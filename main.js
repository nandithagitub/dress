//124

function setup(){
    canvas = createCanvas(550,300);
    canvas.position(560,150);
    video = createCapture(VIDEO);
    video.size(550,550);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function draw(){
    background('lightblue');//124
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
