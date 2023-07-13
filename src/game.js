 const game = {
    authors: 'Javier, Mariano',
    version: '1.0',
    title: 'Fly & Poop',
    score: 0,
    width: null,
    height: null,

    canvas: null,
    ctx: null,
    
    FPS: 60,
    frames: null,
    interval: null,

    player: null, 
    trees: [],
    signs: [],
    eagles: [],
    balds: [],
   
    init() {
        this.initCanvas()
        this.loadImages()
        this.setDimensions()
        this.generateAll()
        this.start() 
    },

    initCanvas(){
        this.canvas = document.querySelector('#canvas')
        this.ctx = this.canvas.getContext('2d')
    },

    loadImages() {
        this.gameOverScreen = new Image()
        this.gameOverScreen.src = "./GameOver.png"
        
    },

    setDimensions(){
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.canvas.width = this.width
        this.canvas.height = this.height
    },

    generateAll(){
        this.player = new Player(this.ctx, this.height)
        this.house = new House (this.ctx, this.height, this.width)
        this.trees.push(new Tree (this.ctx, this.height, this.width))
        this.signs.push(new Sign (this.ctx, this.height, this.width))
        this.eagles.push(new eagle (this.ctx, this.height, this.width))
        this.balds.push(new Bald (this.ctx, this.height, this.width))
    },

        drawAll(){
            this.player.update()
            this.trees.forEach(tree => tree.draw())
            this.signs.forEach(sign => sign.draw())
            this.eagles.forEach(eagle => eagle.draw())
            this.balds.forEach(bald => bald.draw())
            this.house.draw()
            this.ctx.fillStyle = "black"
            this.ctx.font = "500px,"
            this.ctx.fillText(`SCORE: ${this.score}`,100,100)
        },

        clearAll(){
            this.ctx.clearRect(0,0, this.width, this.height)
        },

        clearItems(){
            this.trees = this.trees.filter(tree => tree.posX > 0)
            this.signs = this.signs.filter(sign => sign.posX > 0)
            this.shits = this.shits.filter(shit => shit.posY > this.height)
            this.eagles = this.eagles.filter(eagle => eagle.posX > 0 )
            this.balds = this.balds.filter(bald => bald.posX > 0)      
        },
            
         checkCollisions() {
             this.trees.forEach((tree, index) => {
                 if (tree.posX < this.player.posX + this.player.width 
                    && this.player.posX < tree.posX + tree.width 
                    && this.player.posY + this.player.height > tree.posY) {
                     this.player.lives--
                     this.trees.splice(index, 1)
                if(this.player.lives <= 0 ) this.gameOver()
                    }
         })
        
             this.signs.forEach((sign, index) => {
                if (sign.posX < this.player.posX + this.player.width 
                   && this.player.posX < sign.posX + sign.width 
                   && this.player.posY + this.player.height < sign.posY + sign.height) {
                    this.player.lives--
                    this.signs.splice(index, 1)
                if(this.player.lives <= 0 ) this.gameOver()
                   }
            })

            this.eagles.forEach((eagle, index) => {
                if (this.player.posX + this.player.width > eagle.posX 
                   && this.player.posX < eagle.posX + eagle.width
                   && this.player.posY + this.player.height > eagle.posY
                   && this.player.posY < eagle.posY + eagle.height) {
                    this.player.lives--
                    this.eagles.splice(index, 1)
               if(this.player.lives === 0 ) this.gameOver()
                   }
            })
            // this.shits.forEach((shit, index) =>{
            //     if(shit.height + shit.posY > this.balds.posY)
            //     this.score ++
            // })
         },
         
         gameOver(){
            this.clearAll()
            clearInterval(this.interval)
            this.ctx.drawImage(this.gameOverScreen, 0, 0, this.width, this.height)
            setTimeout(() => {
                location.reload()
            }, 5000)
         },
         
    start(){
        this.player.setEventListeners()
        this.drawAll()
        this.interval = setInterval(() => {
            this.frames++
            if(this.frames % 600 === 0) {
                this.trees.push(new Tree (this.ctx, this.height, this.width))
            }
            if(this.frames % 360 === 0) {
                this.signs.push(new Sign (this.ctx, this.height, this.width))
            }
            if(this.frames % 210 === 0) {
                this.eagles.push(new eagle (this.ctx, this.height, this.width))
            }
            if(this.frames % 600 === 0) {
                this.balds.push(new Bald (this.ctx, this.height, this.width))
            }
            if(this.frames % 60 === 0){
                this.player.canShoot = true
            }
           
            
            this.clearAll()
            this.drawAll()
            this.checkCollisions()
            this.trees.forEach(tree => tree.move())
            this.signs.forEach(sign => sign.move()) 
            this.eagles.forEach(eagle => eagle.move())
            this.balds.forEach(bald => bald.update())
            this.player.shits.forEach(shit => shit.update())
        },1000 / this.FPS)
        },
} 