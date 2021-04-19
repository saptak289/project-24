class paper{
    constructor(x,y,radius){
        var options = {
            isStatic: true,
            'restitution':0.3,
            friction:1.2,
            desnsity:0.5
    }
      this.body = Bodies.circle(x,y,radius,options); 
       this.radius = radius;
       World.add(world,this.body);
}
display(){
    var pos = this.body.position;
     fill("white");
     ellipse(pos.x,pos.y,this.radius);
   }
}