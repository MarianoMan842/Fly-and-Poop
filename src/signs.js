 class Sign {
    constructor(ctx, canvasHeight, canvasWidth){
        this.ctx = ctx
        this.canvasHeight = canvasHeight
        this.canvasWidth = canvasWidth
        
        this.height = 120
        this.width = 100

        this.posX = this.canvasWidth + 120
        this.posY = 0

        this.image = new Image()
        this.image.src = './Tuberia.png'
    }

    move(){
        this.posX = this.posX - 5
      }

      draw(){
         this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)

    }
}