Mover[] movers = new Mover[9];
float topspeed = 10;
void setup() {
  size(1000, 1000);
  for (int i=0; i<movers.length; i++) {
    movers[i] = new Mover();
  }
}
void draw() {
  background(0);
  fill(#FFCC00);
  ellipse(width/2, height/2, 20, 20);
  
  for (int i=0; i<movers.length; i++) {
    movers[i].update();
    movers[i].display();
  }
}

class Mover {

  PVector location;
  PVector velocity;
  PVector acceleration;
  PVector sun = new PVector(width/2, height/2);
  color pColor = color(random(255), random(255), random(255));
  float pSize = random(16);

  Mover() {
    location = new PVector(width/2, random(0, height/2));
    velocity = new PVector(-3, 0);
    acceleration = new PVector(0, 0);
  }

  void update() {
    PVector dir = PVector.sub(sun, location);

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
    fill(pColor);
    ellipse(location.x, location.y, pSize, pSize);
  }
}


