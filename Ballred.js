class Ballred {
    constructor(x,y,radius) {
  
      var options = {
          density : 1.5,
          restitution : 1.0,
          frictionAir : 0.04
      }
  
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    
    }
    
    display(){
  
      var pos =this.body.position;
      fill("red");
      circle(pos.x, pos.y, this.radius);
    
    }
  
  };