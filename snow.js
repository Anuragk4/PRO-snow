class Snow{

    constructor(x,y){
        var options={
            isStatic:false,
         
            'friction':1,
            'density':0.1,
      
        }
        this.image = loadImage("snow4.webp");
        
        this.body=Bodies.rectangle(x,y,15,15,options)
    
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
       
        var angle=this.body.angle
    
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    fill(255)
    image(this.image,pos.x,pos.y,30,30)
   
    pop();
    }
    
}