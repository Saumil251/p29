class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:0.3,
            density:1.0
        }
        this.width=width
        this.height=height
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)
this.visibility=255
    }
    display(){
       var pos=this.body.position
        push()
        rectMode(CENTER)
        fill("yellow")
        translate(pos.x,pos.y)
        rect(0,0,this.width,this.height,50,50)
            if(this.body.speed<3){
              super.display()
            }
            else{
              
              push()
              this.visibility=this.visibility-5
              tint(255,this.visibility)
              World.remove(world,this.body)
              pop()
            }
          }
          
        ;
        pop()
    }
