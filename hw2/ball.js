
class ball{
  constructor(mass,X,Y){
    this.mass = mass;
    this.radius = sqrt(this.mass) * 2;
    this.pos = createVector(X,Y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0,0);
  }
  

  applyForce(f){ 
    let force = p5.Vector.div(f, this.mass);
    this.acc.add(force);
  }
  
  friction(){
    let diff = height - (this.pos.y + this.radius);    
    if(diff <= 1){

      let friction_vector = this.vel.copy();
      friction_vector.normalize();
      friction_vector = friction_vector.mult(-1);
      
      let normal_force = this.mass; 
      friction_vector.setMag(normal_force * mu);
      this.applyForce(friction_vector);
    }
    
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  display(){
    fill('orange');
    ellipse(this.pos.x,this.pos.y,this.radius*2);
  }
  
  checkBoundaries() {
  // x
  if (this.pos.x < 0) {
    this.pos.x = 0;
    this.vel.x = -this.vel.x;
  } else if (this.pos.x > width) {
    this.pos.x = width;
    this.vel.x = -this.vel.x;
  }
  // y
    
    // I think there is something wrong with this condition? But I cannot see how . 
    if (this.pos.y >= height - this.radius) {
      this.pos.y = height - this.radius ;
      this.vel.y *= -1;
    }
}
}
