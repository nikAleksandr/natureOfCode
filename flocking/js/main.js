var birdArray = [];

function setup(){
	createCanvas(window.innherWidth, window.innerHeight);
	var windV = createVector(-3,-3);
	testBird = new Bird();
}
function draw(){
	background(125, 155, 255);

	testBird.applyForce(this.bouyancy);
	testBird.display();
}

function Bird(){
	this.location = createVector(width/2, height/2);
	this.velocity = createVector(0,0);
	this.acceleration = createVector(0,0);
	this.bouyancy = createVector(0, 5);
}
Bird.prototype.applyForce = function(force){
	this.acceleration.add(force);
};
Bird.prototype.update = function(){
	this.velocity.add(this.acceleration);
	this.location.add(this.velocity);
	
	this.acceleration.mult(0);
};
Bird.prototype.checkEdges = function(){
	if(this.location.x = 0){
		
	}
};
Bird.prototype.display = function(){
	noStroke();
	fill(125);
	ellipse(this.location.x, this.location.y, 50,50);
};
