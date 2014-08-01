
void setup() {
  size(500, 500);
  background(255,1);
  frameRate(500);
}
void draw() {
  float sd = width/6;
  float mean = width/4;

  float xnum1 = randomGaussian();
  float ynum1 = randomGaussian();
  float x1 = sd * xnum1 + mean;
  float y1 = sd * ynum1 + mean;
  
  float xnum2 = randomGaussian();
  float ynum2 = randomGaussian();
  float x2 = sd * xnum2 + mean + width/2;
  float y2 = sd * ynum2 + mean + width/2;

  noStroke();
  fill(255, 0, 0, 10);
  ellipse(x1, y1, 16, 16);
  fill(0,255,0,10);
  ellipse(x2,y2,16,16);
}

