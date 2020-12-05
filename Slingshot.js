class Slingshot{
    constructor(bodyA,bodyB){
        var Options = {
            length : 50,
            stiffness:0.05,
            bodyA: bodyA,
            bodyB: bodyB
        }
        this.chain = Constraint.create(Options);
        World.add(world,this.chain)
    }
    display(){
        var pointA =null
        var pointB = this.chain.bodyB.position;
        strokeWeight(2)
        stroke('black')
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }