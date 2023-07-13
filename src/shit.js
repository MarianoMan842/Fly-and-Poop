class Shits {
    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx
        
        this.width = 10
        this.height = 30

        this.posX = playerPosX + playerWidth / 2 - this.width / 2
        this.posY = playerPosY + playerHeight 
    }

    update() {
        this.draw()
        this.move()
    }

    draw() {
        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }

    move() {
        this.posY += 10
    }
}