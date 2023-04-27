statuss="";
img="";

function setup(){
    canvas=createCanvas(500, 320);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status - Detecting Objects";
    objectDetector.detect("img", gotResult);
}

function draw(){
}

function preload(){
    img=loadImage("bedroom.png");
}

function modelLoaded(){
    console.log("Model is Loaded");
    statuss="true";
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}