function setup() {
  createCanvas(500,500);
  frameRate(1);
  background(255);
}

function draw() {
  background(0);
  strokeWeight(5);
  strokeCap(SQUARE);
  var lpunto = 5;
  

  for(var row = 0; row < 501; row += 10) {
    stroke(0);
    var lineay = random()*500;
    line(0,row,width,row);
    for (var p=0; p<100; p++){
   
   var controllo = random();
    stroke(0,random()*255,0);
    if (controllo >= 0.5){
      //spawna punto
      var incr=lpunto*(p);
      line(incr,row,incr+lpunto, row);
      
     // stroke(255,34,55);
     // line(lineay+lpunto*2,row,lineay+lpunto*4, row);
      
      }
     
    }
  }
}

  
