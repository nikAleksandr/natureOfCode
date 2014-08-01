Mover mover1;
float topspeed = 10;
void setup() {
  size(1000, 1000);
  mover1 = new Mover();
}
void draw() {
  background(255);

  mover1.update();
  mover1.display();
}

class Mover {

  PVector location;
  PVector velocity;
  PVector acceleration;

  Mover() {
    location = new PVector(width/2, height/2);
    velocity = new PVector(0,0);
    acceleration = new PVector(0,0);
  }

  void update() {
    PVector mouse = new PVector(mouseX, mouseY);
    PVector dir = PVector.sub(mouse, location);
    
    float dist = dir.mag();
    float grav = 10/dist;
    
    dir.normalize();
    
    acceleration = dir;
    acceleration.mult(grav);
    
    velocity.add(acceleration);
    //velocity.limit(topspeed);
    location.add(velocity);
  }

  void display() {
    noStroke();
    fill(25,155,200);
    ellipse(location.x, location.y, 16, 16);
  }
}

