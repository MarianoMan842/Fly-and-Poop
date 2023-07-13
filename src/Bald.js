class Bald{
    constructor(ctx,canvasHeight,canvasWidth ){
        this.ctx = ctx
        this.canvasHeight = canvasHeight
        this.canvasWidth = canvasWidth

        this.height = 100
        this.width = 45

        this.posX = this.canvasHeight + 100
        this.posY = this.canvasHeight - this.height
    }

    update(){
       this.draw()
       this.move() 
    }

    draw(){
        this.ctx.fillStyle = "pink"
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }

    move(){
        this.posX = this.posX - 2
    }
    talk(){
        this.Bald 
        console.log ("Joder")
    }
}