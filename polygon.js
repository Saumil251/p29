class Polygon{
    constructor(x,y){
        
        var options={
            isStatic:false,
            restiution:0.8,
            friction:1,
            density:1.2
                  }
                  this.body=Bodies.rectangle(x,y,45,45,options)
                  this.width=45;
                  this.height=45;  
                  this.image=loadImage("polygon.png")
                  World.add(world,this.body)
                }
                
            
                display(){
            var pos=this.body.position
          
            push()
            translate(pos.x,pos.y)
            rotate(this.body.angle)
            rectMode(CENTER)
            image(this.image,0,0,30,30)
            pop()
                }
              }
