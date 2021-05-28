class Box {
  constructor(x, y, width, height) {
    var options = {restitution : 0.4,
      friction : 0.1,
  }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility=255;
    
    World.add(world, this.body);
  }

  display(){

    if(this.body.speed<3){
    push();
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }

  }
}