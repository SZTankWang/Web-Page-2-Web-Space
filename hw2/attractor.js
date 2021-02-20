
class attractor{
  constructor(m,x,y){
    this.mass = m;
    this.radius = sqrt(this.mass) * 2;
    this.X = x;
    this.Y = y;
    this.pos = createVector(x, y);
  }
  
  attraction(mover){
    let force = p5.Vector.sub(this.pos,mover.pos);
    let distSq = force.magSq();
    constrain(distSq,25,2500);
    force.setMag( G*(this.mass * mover.mass) /distSq );

    
    mover.applyForce(force);
    
    
    
  }
  
  display(){
    fill(255, 128, 128);
    ellipse(this.pos.x,this.pos.y,this.radius*2);
  }
}