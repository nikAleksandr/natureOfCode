var birdArray = [];
var topSpeed = 10;
var windV;
var xOff = 0;
var yOff = 1000;
birdW = 100;

function setup(){
	createCanvas(windowWidth, windowHeight);
	testBird = new Bird();
}
function draw(){
	background(125, 155, 255);

	windV =  createVector(noise(xOff)-noise(xOff+50),noise(yOff)-noise(yOff+50));
	xOff+=.01; yOff+=.01;

	testBird.applyForce(testBird.bouyancy);
	testBird.applyForce(windV);
	testBird.checkEdges();
	testBird.update();
	testBird.display();
	
	//for a wind-vane
	translate(width-100, 100);
	windV.mult(100);
	stroke(0); strokeWeight(3);
	line(0,0,windV.x, windV.y);
}

function Bird(){
	this.location = createVector(width/2, height);
	this.velocity = createVector(0,0);
	this.acceleration = createVector(0,0);
	this.bouyancy = createVector(0, -.5);
}
Bird.prototype.applyForce = function(force){
	this.acceleration.add(force);
};
Bird.prototype.update = function(){
	this.velocity.add(this.acceleration);
	this.velocity.limit(topSpeed);
	this.location.add(this.velocity);
	constrain(this.location.x,0,width-birdW);
	constrain(this.location.y,0,height-birdW);
	
	this.acceleration.mult(0);
};
Bird.prototype.checkEdges = function(){
	if(this.location.y < birdW/2){
		this.velocity.y = .9*abs(this.velocity.y);
		this.acceleration.mult(0);
		//this.acceleration.y = .9*abs(this.acceleration.y);
		//console.log(this.acceleration);
	}
	if(this.location.x < birdW/2){
		this.velocity.x = .9*abs(this.velocity.x);
		this.acceleration.mult(0);
		//this.acceleration.x = .9*abs(this.acceleration.x);
	}
	if(this.location.x > width-birdW/2){
		this.velocity.x = -.9*abs(this.velocity.x);
		this.acceleration.mult(0);
		//this.acceleration.x = -.9*abs(this.acceleration.x);
	}
};
Bird.prototype.display = function(){
	noStroke();
	fill(125);
	ellipse(this.location.x, this.location.y, birdW, birdW);
};
