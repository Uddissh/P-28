class Stone {
    constructor(x,y,radius) {

        var options = {
            'isStatic':false,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("sprites/stone.png")
        this.radius = radius

        World.add(world, this.body)

    }

    display() {
        var angle = this.body.angle
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius + 25, this.radius + 25);
        pop()
    }

}