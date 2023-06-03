function preload() {
    // img = loadImage('https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-2sggqq7e434rsm9o7eh1bfoe00-20180608075607.Medi.jpeg');
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {  
    image(video, 100, 100, 200, 200);
    tint(tint_color);
    // strokeWeight(30);
    // stroke(51);
    // fill(255, 255, 255);
    // rect(50, 50, 300, 300);
    fill(0, 255, 255);
    rect(50, 30, 300, 20);
    fill(0, 0, 255);
    rect(350, 50, 20, 300);
    fill(0, 255, 255);
    rect(50, 350, 300, 20);
    fill(0, 0, 255);
    rect(30, 50, 20, 300);
    fill(255, 0, 0);
    stroke(0, 128, 0);
    circle(40, 40, 50);
    fill(255, 255, 0);
    stroke(0, 128, 0);
    circle(360, 40, 50);
    fill(255, 0, 0);
    stroke(0, 128, 0);
    circle(360, 360, 50);
    fill(255, 255, 0);
    stroke(0, 128, 0);
    circle(40, 360, 50);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
