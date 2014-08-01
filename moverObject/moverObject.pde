Mover mover1;
Mover mover2;
Mover mover3;

void setup() {
  size(500, 500);

  mover1 = new Mover();
  mover2 = new Mover();
  mover3 = new Mover();
}
void draw() {
  background(255);

  mover1.update();
  mover1.checkEdges();
  mover1.display();

  mover2.update();
  mover2.checkEdges();
  mover2.display();

  mover3.update();
  mover3.checkEdges();
  mover3.display();
}

class Mover {

  PVector location;
  PVector velocity;
  PVector acceleration;

  Mover() {
    location = new PVector(random(width), random(height));
    velocity = new PVector(0,0);
    acceleration = new PVector(0,0);
  }

  void update() {
    acceleration = PVector.random2D();
    
    velocity.add(acceleration);
    location.add(velocity);
  }

  void checkEdges() {
    if (location.x<0 | location.x>width) {
      velocity.x *= -1;
    }
    if (location.y<0 | location.y>height) {
      velocity.y *= -1;
    }
  }

  void display() {
    stroke(0);
    fill(175);
    ellipse(location.x, location.y, 16, 16);
  }
}

