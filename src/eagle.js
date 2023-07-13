class eagle {
    constructor(ctx, canvasWidth, canvasHeight) {
       this.canvasHeight = canvasHeight
       this.canvasWidth = canvasWidth
        this.ctx = ctx
        
        this.height = 50
        this.width = 100

        this.posX = this.canvasWidth + canvasWidth - this.width
        this.posY = Math.random()*this.canvasWidth
        }
        
    draw() {
        this.ctx.fillStyle = "orange"
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }
    move() {
        this.posX = this.posX -20
    }
    }