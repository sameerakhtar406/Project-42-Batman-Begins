class Dro{
    constructor(x, y) {
        var options = {
            //'restitution':0.8,
            'friction':1.0,
            'density':0.1
        }
        this.rain = Bodies.circle(x, y, 5, options);
        this.r = 5;
        World.add(world, this.rain);
      }
      updateY(){ 
      if(this.rain.position.y > height){ 
      Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)}) } } 
      showDrop(){
      fill("blue") 
      ellipseMode(CENTER); 
      ellipse(this.rain.position.x,this.rain.position.y,this.r,this.r); 
    } 
}