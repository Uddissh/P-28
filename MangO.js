class Mango {
    constructor(x,y,radius) {

        var options = {
            'isStatic':true,
            'restitution':0,
            'friction':1
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("sprites/mango.png")
        this.radius = radius;
        World.add(world,this.body);

    }

    display() {

        var pos =this.body.position;
        var angle = this.body.angle;
    push();
    imageMode(CENTER);
    translate(pos.x, pos.y);
    rotate(angle);
    image(this.image, 0, 0, this.radius + 25, this.radius + 25);
    pop();

    }
};