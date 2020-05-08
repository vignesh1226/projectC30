class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }

    display(){
        if(this.Sling.bodyA){
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke(0,128,0);
        line(pointA.x-20,pointA.y,pointB.x,pointB.y);
        line(pointA.x-20,pointA.y,pointB.x,pointB.y+30);
        }
    }
    fly(){
        this.Sling.bodyA = null;
    }

    attach(ball1){
        this.Sling.bodyA = ball1;
    }
    reattach(ball2){
        this.Sling.bodyA = ball2;
    }
    join(ball3){
        this.Sling.bodyA = ball3;
    }
    rejoin(ball4){
        this.Sling.bodyA = ball4;
    }
}