const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 800
canvas.height = 600

class Player{ 
    constructor(){
        this.position = {
            x:0,
            y:0,
            velocity: 0,
        }
        this.velocity = {
            x: 0,
            y: 1,
        }
        this.height = 100;
        this.width = 100;
        }
    

   createPlayer(){
        c.fillStyle = "red"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
        }
    
    update(){
        this.createPlayer()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y + this.height < canvas.height){
            this.velocity.y += 0.5
        } else {
            this.velocity.y = 0
        }
    }
}

const player = new Player()

const keys = {
    d: {
        pressed: false, 
    },
    a: {
        pressed: false,
    }, 
    w: {
        pressed: false,
    }
}

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0,0,canvas.width, canvas.height)
    player.update()

    player.velocity.x = 0
    if(keys.d.pressed === true){
        player.velocity.x = 1
    } if (keys.a.pressed === true){
        player.velocity.x = -1
    } if (keys.w.pressed === true){
        player.velocity.y = -10
    }

}
animate()

document.addEventListener('keydown', event => {
    if (event.key === 'd'){ 
        keys.d.pressed = true
    }

    if (event.key === 'a'){ 
        keys.a.pressed = true
    }

     if (event.key === 'w'){ 
        keys.w.pressed = true
    }

})

document.addEventListener('keyup', event => {
    if (event.key === 'd'){ 
        keys.d.pressed = false
    }

    if (event.key === 'a'){ 
        keys.a.pressed = false
    }

     if (event.key === 'w'){ 
        keys.w.pressed = false
    }

})