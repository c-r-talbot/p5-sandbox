
let time = 0;
let wave=[];
let freq = 0.05
function setup(){
    createCanvas(600,400)
}

function draw() {
    background(150);
    translate(200,200)

    ellipse(0,0,3)

    let radius = 50;
    stroke(255);
    noFill();
    ellipse(0,0, radius*2);
    ellipse(0,0,3)
    let x = radius * cos(time);
    let y = radius * sin(time);
    wave.unshift(y)

    fill(255);
    ellipse(x,y,12);
    ellipse(150,y,10)

    for(let i = 0; i < wave.length; i++){
        point(i+150, wave[i]);
    }
    

    // drawText(x,y,wave.length)
    
    time += freq;
    if (wave.length > 100){
        wave.pop();
    }

}

function mousePressed() {
    noLoop();
  }
  
  function mouseReleased() {
    loop();
  }

  function drawText(x,y,l){
    fill(255)
    stroke(255)
    textSize(30)
    text((x),100,100)
    translate(0,30)
    text((y),100,100)
    translate(0,30)
    text(l,100,100)
  }