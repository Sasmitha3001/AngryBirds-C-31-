class Ground{

    constructor(x,y,width,height){
        var ground_options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,ground_options);
       
        this.width=width;
        this.height=height;
        


        World.add(world,this.body);

        
    }
    display(){
       fill("brown");
       var place=this.body.position;
       rectMode(CENTER);
       rect(place.x,place.y,this.width,this.height);
    }
}
