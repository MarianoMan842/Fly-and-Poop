class Player{
    constructor (ctx, canvasHeight){
        this.ctx = ctx
        this.canvasHeight = canvasHeight

        this.height = 36*2
        this.width = 29*2
        this.posX = 200
        this.posY = this.canvasHeight - this.height - 50

        this.lives = 3
        this.shits = []
        
        this.canMoveUp = false
        this.canMoveDown = false
        this.canShoot = true

        this.image = new Image()
        this.image.src = './Cuervo.png'
    }

    update(){
        this.draw()
        this.move()
        
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    move() {
        if (this.canMoveUp && this.posY > 0) this.posY -= 15
        if (this.canMoveDown && this.posY + this.height < this.canvasHeight) this.posY += 15
    }
    
    setEventListeners(){
        document.addEventListener('keydown', (event) => {
            const key = event.key
            if(key === 'ArrowUp') this.canMoveUp = true   
            if(key === 'ArrowDown') this.canMoveDown = true
            if(key === 'w') this.canMoveUp = true   
            if(key === 's') this.canMoveDown = true
            if(key === "e" && this.canShoot) {
                this.shits.push(new Shits(this.ctx, this.posX, this.posY, this.width, this.height))
                this.canShoot = false
                }
            })
               document.addEventListener("keyup", (event) => {
                const key = event.key
                if (key === "ArrowUp") this.move(), this.canMoveUp = false
                if (key === "ArrowDown")this.move(), this.canMoveDown = false
                if (key === "w") this.move(), this.canMoveUp = false
                if (key === "s")this.move(), this.canMoveDown = false
            })
    }
}