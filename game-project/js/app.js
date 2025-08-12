const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

// Create Player template
class Player{
    constructor(){

        // Static position
        this.position = {
            x:100,
            y:100,
        }
        // Acceleration
        this.velocity = {
            x:0,
            y:1,
        }
        // Player's hitbox
        this.width = 30
        this.height = 30
    }

    // Drawing Player hitbox and position
    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    // Updating Player's position
    refresh(){
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        this.draw()

        // Adding gravity effect
        if (this.position.y + this.height + this.velocity.y <= canvas.height){
            this.velocity.y += gravity
        } 
        // Stops Player from falling off the screen
        // else (this.velocity.y = 0)
    }
}

// Create Platform
class Platform{
    constructor({x,y,image}){
        this.position = {
            x: x,
            y: y,
        }

        this.image = image
        this.width = image.width
        this.height = image.height
        
    }

    draw(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

// Controls
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

document.addEventListener('keyup', event => {
    if (event.key === 'd'){ 
        keys.right.pressed = false
    }

    if (event.key === 'a'){ 
        keys.left.pressed = false
    }
})


document.addEventListener('keydown', event => {
     if (event.key === 'w'){ 
        player.velocity.y -= 20
    }

    if (event.key === 'a'){ 
        keys.left.pressed = true
    }

    if (event.key === 'd'){ 
        keys.right.pressed = true
    }
})


// Create Player (1)
let player = new Player()

// Create Platforms
let platformSmall = new Image()
platformSmall.src = './img/platform.png'

let ground = new Image()
ground.src = './img/testing.png'

let platforms = [
    new Platform({x: 200, y: 300, image: platformSmall}),
    new Platform({x: 500, y: 400, image: platformSmall}),
    new Platform({x:0, y:500, image: ground}),
    new Platform({x:900, y:500, image: ground})
]

// Audio
const audio = new Audio('./sound/victoryFanfare.mp3')

// Establish gravity pull
let gravity = 0.5

// Create win condition
let distanceTravel = 0
let gameWon = false

// Properties that change over time
function animate(){

    // Create gravity: Refresh window by clearing the canvas -> update Player's position 
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0,0, canvas.width, canvas.height)
    platforms.forEach(platform => {
        platform.draw()
    })
    player.refresh()

    // Enable Player left and right movement and stop Player from when key is not pressed
    if (keys.right.pressed === true && player.position.x < 500){
        player.velocity.x = 5
    } else if (keys.left.pressed === true && player.position.x > 100){
        player.velocity.x = -5
    } else (player.velocity.x = 0)

    // Scroll map
    if (keys.right.pressed === true){
        distanceTravel += 5
        platforms.forEach(platform => {
        platform.position.x -= 5
    })
    } if (keys.left.pressed === true){
        distanceTravel -= 5
        platforms.forEach(platform => {
        platform.position.x += 5
        })
    }

    // Collision detection
    platforms.forEach((platform) => {
        if (player.position.y + player.height <= platform.position.y && 
        player.position.y + player.height + player.velocity.y >= platform.position.y &&
        player.position.x + player.width >= platform.position.x &&
        player.position.x <= platform.position.x + platform.width) {
        player.velocity.y = 0
    }
    
    // Win condition: if Player reachers x = 1200, Player wins!
    if (distanceTravel >= 500 && gameWon === false){
        console.log('You win!')
        gameWon = true
        audio.play()
    }
    })  

    // Lose condition: if Player falls off the map, Player loses!
    if (player.position.y > canvas.height){
        console.log('You lose!')
        reset()
        return
    }
}

// Reset game 
function reset() {
    // Reset player position and velocity
    player.position.x = 10
    player.position.y = 10
    player.velocity.x = 0
    player.velocity.y = 1

    // Reset platform positions
    platforms[0].position.x = 200
    platforms[0].position.y = 100
    platforms[1].position.x = 500
    platforms[1].position.y = 200
    platforms[2].position.x = 0
    platforms[2].position.y = 680
    platforms[2].position.x = 900
    platforms[2].position.y = 680

    // Reset distance traveled
    distanceTravel = 0
}

animate()
