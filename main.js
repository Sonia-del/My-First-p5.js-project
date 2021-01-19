function preload()
{

}
function setup()
{
    canvas = createCanvas(700, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

  }


function draw()
{
    image(video, 210, 90, 300, 300);
    
    
    fill(250, 194, 0);
    rect(170, 30, 410, 40);
    rect(170, 410, 410, 40);
    rect(530, 50, 40, 410);
    rect(150, 30, 40, 410);
   
    fill(234, 81, 128);
    circle(170, 50, 80, 20);
    circle(170, 430, 80, 20);
    circle(550, 50, 80, 20);
    circle(550, 430, 80, 20);
    
    
    
}

function take_snapshot()
{
    save('MyBirthdayFrameImage.png');
}


