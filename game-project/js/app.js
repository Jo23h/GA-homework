const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1064
canvas.height = 576

// Create Player template
class Player{
    constructor(){

        // Static position
        this.position = {
            x:50,
            y:50,
        }
        // Acceleration
        this.speed = 5
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

// Background (no collision detectation)
class Background{
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
platformSmall.src = './img/small.png'

let platformMed = new Image()
platformMed.src = './img/medium.png'

let ground = new Image()
ground.src = './img/floor.png'

const platforms = [
    new Platform({x: 300, y:400, image: platformSmall}),
    new Platform({x: 450, y:300, image: platformSmall}),
    new Platform({x: 600, y:200, image: platformSmall}),
    new Platform({x: 800, y:200, image: platformSmall}),
    new Platform({x: 1000, y:200, image: platformMed}),
    new Platform({x:-400, y:500, image: ground}),
]

// Create background image
const backgroundImg = new Image()
backgroundImg.src = './img/background.png'

const background = 
    new Background({
        x: 0,
        y: 0,
        image: backgroundImg
    })

// Audio
const audio = new Audio('./sound/bgm.mp3')

// Establish gravity pull
let gravity = 1.7

// Create win condition
let distanceTravel = 0
let gameOver = false

// Properties that change over time
function animate(){

    audio.play()

    // // Check if game is lost
    if (gameOver){
        return
    }

    // Create gravity: Refresh window by clearing the canvas -> update Player's position 
    requestAnimationFrame(animate)
    
    // Draw background
    background.draw()

    // Draw platforms and player
    platforms.forEach(platform => {
        platform.draw()
    })
    player.refresh()

    // Enable Player left and right movement and stop Player from when key is not pressed
    if (keys.right.pressed === true && player.position.x < 500){
        player.velocity.x = player.speed
    } else if (keys.left.pressed === true && player.position.x > 100){
        player.velocity.x = -player.speed
    } else (player.velocity.x = 0)

    // Scroll map
    if (keys.right.pressed === true){
        distanceTravel += player.speed
        platforms.forEach(platform => {
            platform.position.x -= player.speed
        })
    } if (keys.left.pressed === true){
        distanceTravel -= player.speed
        platforms.forEach(platform => {
            platform.position.x += player.speed
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
    })

    // Win condition: if Player reaches x = 500, Player wins!
    if (distanceTravel >= 700 && !gameOver) {
        console.log('You win!')
        gameOver = true
    }

    // Lose condition: if Player falls off the map, Player loses!
    if (player.position.y > canvas.height){
        console.log('You lose!')
        reset()
    }
}

// Reset game 
function reset() {
    // Reset player position and velocity
    player.position.x = 50
    player.position.y = 50
    player.velocity.x = 0
    player.velocity.y = 1

    // Reset platform positions
    platforms[0].position.x = 300
    platforms[0].position.y = 400
    platforms[1].position.x = 450
    platforms[1].position.y = 300
    platforms[2].position.x = 600
    platforms[2].position.y = 200
    platforms[3].position.x = 800
    platforms[3].position.y = 200
    platforms[4].position.x = 1000
    platforms[4].position.y = 200
    platforms[5].position.x = -400
    platforms[5].position.y = 500

    // Reset game state
    gameOver = false
    distanceTravel = 0
}

animate()
