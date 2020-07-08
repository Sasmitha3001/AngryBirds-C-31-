class Base{
    constructor(x,y,width,height,angle){

        var option={
            restitution:0.8,
            friction:1.0,
            density:1.0
        }

        this.body=Bodies.rectangle(x,y,width,height,option);
        this.height=height;
        this.width=width;
       this.image=loadImage("Sprites/base.png");

        World.add(world,this.body);
    
    }
    display(){
         var angle=this.body.angle
         var place=this.body.position;
        
        push();
        translate(place.x,place.y);
        rotate(angle);

        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    



        


    }
   
}