class Block {
  constructor(x, y, width, height){
        var r={
          isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,r)
        this.width=width
        this.height=height
        World.add(world,this.body)
      }
      display(){
       var posx = this.body.position.x
       var posy = this.body.position.y
       rectMode(CENTER)
       push()
       translate(posx,posy)
       rotate(this.body.angle)
       fill("blue")
       rect(0,0,this.width,this.height)
       pop()
      }
  }

