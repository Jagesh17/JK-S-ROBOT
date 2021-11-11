
jagesh ="";
objects = [];



function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,380);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("jagesh").innerHTML = ("Status : Detecting Objects");
}
function draw()
{
    image(video,0,0,380,380);
      if(jagesh != "")
      {
          r = random(255);
          g = random(255);
          b = random(255);
        objectDetector.detect(video , gotResult);
      for (i =0; i < objects.length; i++)
      {
          document.getElementById("jagesh").innerHTML = "Status : Object Detected";
          document.getElementById("number_of_object").innerHTML = "No of objects detected are" + objects.length;
          fill(r,g,b);
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + "" + percent +"%", objects[i].x ,objects[i].y);
          nofill();
          stroke(r,g,b);
          rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
      }
      }
    
}

function modelLoaded()
{
    console.log("ModelLoaded!");
    jagesh = true;
   
}

function gotResult(error,results) 
{
if (error){
    console.log(error)
   
}
else{
    objects = results;
    console.log(results);
}

}