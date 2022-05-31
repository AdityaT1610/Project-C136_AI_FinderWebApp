status = "";

function setup()
{
    canvas = createCanvas(480, 330);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 350);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status - detecting objects";
    video.hide();
}

function start()
{
    
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
}

function draw()
{
    image(video, 0, 0, 480, 350);
}