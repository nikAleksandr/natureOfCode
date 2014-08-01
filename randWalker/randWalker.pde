float monteCarlo() {
  while (true) {
    float r1 = random(1);
    float r2 = random(1);
    if (r2>r1) {
      return r1;
    }
  }
}
class Walker {
  float x;
  float y;

  Walker() {
    x = width/2;
    y= width/2;
  }
  void display() {
    stroke(0);
    point(x, y);
  }
  void step(float tx, float ty) {
    float xStep, yStep;
    float mean = 5;
    float sd = 2;
    float stepSize = randomGaussian() * sd + mean;
    float r = random(1);
    if(r<.01){
      xStep = monteCarlo()*5*int(random(-1,1));
      yStep = monteCarlo()*5*int(random(-1,1));
    }
    else if(r<.02){
      xStep = ((width/2 - x)*.1);
      yStep = ((height/2 - y)*.1);
    }
    else{
      xStep = map(noise(tx),0,1,-1,1);
      yStep = map(noise(ty),0,1,-1,1);
    }
    x += xStep;
    y += yStep;
  }
}


Walker w;
void setup() {
  size(500, 500);
  w = new Walker();
  background(255);
}
float tx = 0;
float ty = 100000;
void draw() {
  w.step(tx, ty);
  w.display();
  tx += 0.01;
  ty += 0.01;
}

