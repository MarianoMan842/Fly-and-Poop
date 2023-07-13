class Tree {
    constructor(ctx, canvasHeight, canvasWidth){
        this.ctx = ctx
        this.canvasHeight = canvasHeight
        this.canvasWidth = canvasWidth

        this.height = Math.random()*this.canvasHeight-36*2
        this.width = 60

        this.posX = this.canvasWidth
        this.posY = this.canvasHeight - this.height

        this.image = new Image()
        this.image.src = './Tree.png'
    }

    move(){
            this.posX = this.posX - 10
    }


    draw(){
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }
    
}
