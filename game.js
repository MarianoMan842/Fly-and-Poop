const game = {
    authors: 'Javier, Joyce, Blanca, Laura, Mariano',
    version: '1.0',
    title: 'Vuela y Caga',
    
    width: null,
    height: null,

    canvas: null,
    ctx: null,
    
    FPS: 60,

    player: null,
    boss: null,

    setDimensions(){
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.canvas.width = this.width
        this.canvas.height = this.height
    },

    initCanvas(){
        this.canvas = document.querySelector('#canvas')
        this.ctx = this.canvas.getContext('2d')
    },

    generateAll(){
        this.player = new Player(this.ctx, this.height)
        this.boss = new Boss(this.ctx, this.width, this.height)
    },

    drawAll(){
        this.player.draw()
        this.boss.draw()
    },

    clearAll(){
        this.ctx.clearRect(0,0, this.width, this.height)
    },


    start(){
        this.player.setEventListeners()
        this.drawAll()

        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 1000 / this.FPS)
    },

    init() {
        this.initCanvas()
        this.setDimensions()
        this.generateAll()
        this.start()
    }

}