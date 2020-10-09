class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic:false,
          restitution: 0.4,
          friction:0.37,
          density:2.7
      }
      this.body = Bodies.circle(x,y,radius,options);    
     this.radius=radius;
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      fill("white");
     ellipseMode(RADIUS);
  ellipse(pos.x, pos.y,this.radius,this.radius)
    }
  };
 