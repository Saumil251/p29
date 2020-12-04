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

    }
    display(){
       var pos=this.body.position
        push()
        rectMode(CENTER)
        fill("yellow")
        translate(pos.x,pos.y)
        rect(0,0,this.width,this.height,50,50)
        pop()
    }
}