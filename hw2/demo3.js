function setup(){
  let canvas = createCanvas(600,600);
  background(0);
  canvas.parent("canvas");
  
  for(var i=0;i<10;i++){
    var mover = new ball(random(50,150),random(width),random(height));
    movers.push(mover);
    // mover.vel = p5.Vector.random2D();
    
  }
  
  
  center = new attractor(100,width/2,height/2);
}

function draw(){
  background(0);
  for(var i=0;i<movers.length;i++){
    var mover = movers[i];
    mover.update();
    mover.display();
    center.display();
    center.attraction(mover);

  }

  
}

