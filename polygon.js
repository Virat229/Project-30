class poly {
    constructor(x,y){
        var opt = {
            restitution : 0.5,
            friction : 0.7,
            density : 1
        }
        this.image = loadImage("poly2.png");
        this.image2 = loadImage("poly3.png");
        this.body = Bodies.polygon(x,y,6,30,opt);
        World.add(world,this.body);
        this.Visibility = 255;

    }
    display(){
        if(this.body.speed < 5){
        var pos = this.body.position;
        push();
        translate (pos.x,pos.y);
        angleMode(RADIANS);
        rotate (this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,150,100);
        pop();
        }
        else {
            World.remove(world,this.body);
            push ();
        this.Visibility = this.Visibility - 5;
        tint(100,this.Visibility);
        image(this.image2,this.body.position.x,this.body.position.y,30,40);
        pop();
        }

    }

}