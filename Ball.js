class Ball {
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius = 10;
      this.color = ("red")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
      
      ellipse(pos.x,pos.y, this.radius);
      pop();
    }
  };