class Boss {
    constructor(ctx, canvasWidth, canvasHeight) {
        this.ctx = ctx
        this.height = 500
        this.width = 250

        this.canvasHeight = canvasHeight
        this.canvasWidth = canvasWidth


        this.posX = this.canvasWidth - this.width - 300
        this.posY = this.canvasHeight - this.height - 50

        this.lives = 50
    }

    draw(){
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }

    
}