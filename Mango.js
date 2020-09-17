class Mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,options);
        this.image=loadImage("images/mango.png");
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