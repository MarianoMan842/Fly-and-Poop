class House {
    constructor(ctx, canvasHeight, canvasWidth){
        this.ctx = ctx
        this.canvasHeight = canvasHeight
        this.canvasWidth = canvasWidth

        this.height = 400
        this.width = 250

        this.posX = this.canvasWidth
        this.posY = this.canvasHeight - this.height
    }

    draw(){
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }
}