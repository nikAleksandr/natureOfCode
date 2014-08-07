var numPlanets = 9;
var planets= [];
//var topspeed = 10;
var sunSize = 30;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (i=0; i<numPlanets; i++) {
    planets.push(new Planet(sunSize));
  }
}

function draw() {
  background(0);
  fill(255,204,0);
  
  var sunny = createVector(width/2, height/2);
  ellipse(sunny.x, sunny.y, sunSize, sunSize);
  
  for(i=0; i<planets.length; i++) {
    planets[i].update(sunny, sunSize);
    planets[i].display();
  }
}

function Planet(sunSize) {
  this.location = createVector(width/2, random(sunSize*2.6, height/2));;
  this.velocity = createVector(-3, 0);
  this.acceleration = createVector(0, 0);
  this.pColor = color(random(255), random(255), random(255));
  this.pSize = random(sunSize*.6);
}
Planet.prototype.update = function(sunny, sunSize){
    this.dir = p5.Vector.sub(sunny, this.location);

    this.dist = this.dir.mag();
    this.grav = 10/this.dist;

    this.dir.normalize();

    this.acceleration = this.dir;
    this.acceleration.mult(this.grav);

    this.velocity.add(this.acceleration);
    //velocity.limit(topspeed);
    this.location.add(this.velocity);
};
Planet.prototype.display = function() {
    noStroke();
    fill(this.pColor);
    ellipse(this.location.x, this.location.y, this.pSize, this.pSize);
};