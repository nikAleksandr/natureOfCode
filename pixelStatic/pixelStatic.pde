
void setup(){
  size(800, 500);
}
  float c = 100000;
void draw() {
  loadPixels();
  float xoff = 0.0;
  for (int x=0; x<width; x++) {
    float yoff=0.0;
    for (int y=0; y<height; y++) {
      float red = map(noise(xoff, yoff, c), 0, 1, 0, 255);
      float green = map(noise(xoff+1000, yoff+1000, c+1000), 0, 1, 0, 255);
      float blue = map(noise(xoff+10000, yoff+10000, c+10000), 0, 1, 0, 255);
      pixels[x+y*width] = color(red, green, blue);
      yoff+=.01;
    } 
    xoff+=.01;
  }
  updatePixels();
  c+=.01;
}

