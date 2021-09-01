class snow{
    constructor(x,y,width,height){
        var options={

        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.image=loadImage("snow4.webp")
        this.width=width
        this.height=height
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}