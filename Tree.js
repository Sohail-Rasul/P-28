class Tree{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
                  }
        var options2={
            friction:1,
            density:1,
            isStatic:false
        }
        this.width = 200;
        this.height = 100;
        this.thickness=20;
        this.image=loadImage("images/tree.png");

        this.bottombody = Bodies.rectangle(x, y,this.width, this.thickness, options);
        this.rightbody = Bodies.rectangle(x+100,y-50,this.thickness,this.height, options2);
        this.leftbody = Bodies.rectangle(x-100,y-50,this.thickness, this.height, options2);
        
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.bottombody);
        World.add(world, this.leftbody);
        World.add(world, this.rightbody);
      }
      display(){

        push();
        translate(this.bottombody.position.x, this.bottombody.position.y);
        //rotate(angle);
        fill(255,0,0);
        noStroke();
        imageMode(CENTER);
        image(this.image, 0, 0, this.width+200, this.thickness+550);
        pop();
        push();
        translate(this.rightbody.position.x, this.rightbody.position.y);
       // rotate(angle);
       fill(255,0,0);
        noStroke();
        rectMode(CENTER);
        //rect( 0, 0, this.thickness, this.height);
        pop();
        push();
        translate(this.leftbody.position.x, this.leftbody.position.y);
        //rotate(angle);
        fill(255,0,0);
        noStroke();
        rectMode(CENTER);
        //rect( 0, 0, this.thickness, this.height);
        pop();
      }
}