class Chain{
    constructor(bodyA, pointB){
        var option={
            bodyA: bodyA,
            pointB:pointB,
             stiffness:0.04,
             length: 10

        }
        this.sling1=loadImage("Sprites/sling1.png");
        this.sling2=loadImage("Sprites/sling2.png");
        this.sling3=loadImage("Sprites/sling3.png");
        this.pointB=pointB
        this.chain=Constraint.create(option);
        World.add(world,this.chain)

    }
    attach(body){
    //     this.chain.bodyA=body;

    }


    fly(){
        this.chain.bodyA=null;
    }


    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);

        if(this.chain.bodyA){
            var pointA=this.chain.bodyA.position;
            var pointB=this.pointB;
            push();
            if(pointA.x<220){
                strokeWeight(7);
                stroke(48,22,8);
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
                image(this.sling3,pointA.x-30,pointA.y-10,15,30)

            }
            else{
                strokeWeight(3);
                stroke(48,22,8);
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30)

            }
            
            pop();

        }
        
    }


}