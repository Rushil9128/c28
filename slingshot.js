class Slingshot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=bodyB;
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }

    display(){
        if(this.Sling.bodyA!==null){
            var pointA = this.Sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }
    fly(){
        this.Sling.bodyA=null;
    }
}