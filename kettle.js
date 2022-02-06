STATUS = "";
function preload()
{
    img=loadImage("kettle.jpg");
}

function setup ()
{
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded ()
{
    console.log("model loaded");
    STATUS = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.error("error");
    }
    console.log(results);
}
