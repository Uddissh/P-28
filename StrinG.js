class Rope {
    constructor(bodyA, pointB) {

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness : 0.04,
            length : 1
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.Rope = Constraint.create(options);
        World.add(world,this.Rope);
    }

    fly() {
        this.Rope.bodyA = null;
    }

    display() {
        if(this.Rope.bodyA) {
        var pointA = this.bodyA.position
        var pointB = this.pointB
        console.log(pointA);
        
        strokeWeight(2)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
      }
      attach(body)
    {
     this.Rope.bodyA = body;
    }
};
