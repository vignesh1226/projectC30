class Ballgreen {
  constructor(x,y,radius) {

    var options = {
        density : 2.0,
        restitution : 1.0,
        frictionAir : 0.004
    }

    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world, this.body);
  
  }
  
  display(){

    var pos =this.body.position;
    fill("green");
    circle(pos.x, pos.y, this.radius);
  
  }

};