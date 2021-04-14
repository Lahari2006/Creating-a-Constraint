class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA : bodyA,  // anything can replace a
            bodyB : bodyB,  // anything can replace b
            stiffness : 0.04,
            length : 10
        }

        this.chain= Constraint.create(options);
        World.add(world,this.chain);
        
    }
      display(){
          var pointA = this.chain.bodyA.position; // to type less
          var pointB = this.chain.bodyB.position; // to type less
          strokeWeight(3);   //thickness of line
          line(pointA.x, pointA.y, pointB.x, pointB.y); //to draw a line to connect 2 bodies
      }

}

