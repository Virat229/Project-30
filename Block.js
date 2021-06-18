class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.8,
          friction :0.3,
          density : 1.0
      }
      this.image = loadImage("block.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility = 255;
    }
    display(){
      if(this.body.speed < 7){
      var pos= this.body.position;
      push ();
      translate (pos.x,pos.y);
      angleMode(RADIANS)
      rotate (this.body.angle);
      imageMode(CENTER);
      image(this.image,0,0,30,40);
      pop ();
      }
      else {
        World.remove(world,this.body);
        push ();
        this.Visibility = this.Visibility - 5;
        
        tint(100,this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y,30,40);
        pop();
        

      }
    }
}