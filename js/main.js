var birdArray = [];
var topSpeed = 10;
var windV;
var xOff = 0;
var yOff = 1000;
birdW = 100;

//function to pause the sketch on click;
var paused = false;
function mouseClicked(){
	if(!paused){noLoop();paused = true;}
	else{loop();paused = false;}
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	testBird = new Bird();

}
function draw(){
	background(155, 175, 255);

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
	this.bouyancy = createVector(0, -.3);
	
	this.angle = 0;
	this.aVelocity = 0;
	this.aAcceleration = 0;
}
Bird.prototype.applyForce = function(force){
	this.acceleration.add(force);
	this.aAcceleration += .001*force.mag();
};
Bird.prototype.update = function(){
	this.velocity.add(this.acceleration);
	this.velocity.limit(topSpeed);
	this.location.add(this.velocity);
	constrain(this.location.x,0,width-birdW);
	constrain(this.location.y,0,height-birdW);
	
	this.aVelocity += this.aAcceleration;
	this.angle += this.aVelocity;
	
	this.acceleration.mult(0);
};
Bird.prototype.checkEdges = function(){
	if(this.location.y < birdW/2){
		this.velocity.y = .9*abs(this.velocity.y);
		this.acceleration.mult(0);
	}
	if(this.location.x < birdW/2){
		this.velocity.x = .9*abs(this.velocity.x);
		this.acceleration.mult(0);
	}
	if(this.location.x > width-birdW/2){
		this.velocity.x = -.9*abs(this.velocity.x);
		this.acceleration.mult(0);
	}
};
Bird.prototype.display = function(){
	noStroke();
	fill(225,130,130);
	rectMode(CENTER);
	
	push();
		//translate(this.location.x, this.location.y);
		//rotate(this.angle);
		ellipse(this.location.x, this.location.y, birdW, birdW);
		stroke(0); strokeWeight(2);
		line(this.location.x, this.location.y+birdW/2, this.location.x, this.location.y+birdW/2+40);
	pop();
};
