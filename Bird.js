class Bird extends Base{
    constructor(x,y){
        super(x,y,50,50);

        this.image=loadImage("Sprites/bird.png");
        this.trajectory=[];
        this.smokeImage=loadImage("Sprites/smoke.png");
      
    }

    display(){
        if(this.body.position.x>200 && this.body.velocity.x>10){
            var position=[this.body.position.x,this.body.position.y];
             this.trajectory.push(position);
        }
    

    for(var i=0;i<this.trajectory.length;i=i+1){
        image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]);
    }




        super.display();
      
    }
    
}