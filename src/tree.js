class Tree {
    constructor(ctx, canvasHeight, canvasWidth){
        this.ctx = ctx
        this.canvasHeight = canvasHeight
        this.canvasWidth = canvasWidth

        this.height = Math.random()*this.canvasHeight-60
        this.width = 60

        this.posX = this.canvasWidth
        this.posY = this.canvasHeight - this.height
    }

    move(){
      this.posX = this.posX - 5
    }

    draw(){
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }
}