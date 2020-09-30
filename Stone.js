class Stone{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0,
            density:1.2,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(x,y,this.radius,options);
        this.image=loadImage("images/stone.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
        

    }
}