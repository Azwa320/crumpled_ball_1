class Paper{
    constructor(x,y,r){
var options={
    isStatic:false,
    restitution:0.3,
	friction:0.5,
	density:1.2
}
    this.x = x;
    this.y = y;
    this.r=r;  
    this.body = Bodies.circle(x,y,r,options);
    
    World.add(world, this.body);
}
  display(){
    var pos =this.body.position;
   // Example showing RADIUS and CENTER ellipsemode with 2 overlaying ellipses
ellipseMode(RADIUS);
fill(255);
ellipse(100, 520, 20, 20); 
  }
}

    
         