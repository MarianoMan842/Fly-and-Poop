class Player{
    constructor (ctx, canvasHeight){
        this.ctx = ctx
        this.canvasHeight = canvasHeight

        this.height = 50
        this.width = 100
        this.posX = 200
        this.posY = this.canvasHeight - this.height - 50

        this.lives = 1
        
        this.bullets = []
    }

    draw() {
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }

    setEventListeners(){
        document.addEventListener('keydown', (event) => {
            const key = event.key
            if(key === 'ArrowUp') this.posY = this.posY - 50
            if(key === 'ArrowDown') this.posY = this.posY + 50

        })
    }

}