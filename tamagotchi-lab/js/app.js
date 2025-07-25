/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
}

// const timer
const gameOver = false

/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepinessStatEl = document.querySelector('#sleepiness-stat')

const playBtnEl = document.querySelector('#play')
const eatBtnEl = document.querySelector('#feed')
const sleepBtnEl = document.querySelector('#sleep')

const gameMessageEl = document.querySelector('#message')
const restartBtnEl = document.querySelector('#restart')

/*-------------------------------- Functions --------------------------------*/
const init = () => {
    let timer = setInterval(runGame,2000)
    function runGame() {
        updateStates()
        render()
        } 
}

const render = () => {
    console.log('rendering')
    boredomStatEl.textContent = state.boredom
    console.dir(boredomStatEl)
    hungerStatEl.textContent = state.hunger
    sleepinessStatEl.textContent = state.sleepiness
    if (gameOver === true) {
        clearInterval(timer)
        restartBtnEl.classList.remove('hidden')
        gameMessageEl.classList.remove('hidden')
    }
}

// Does const updateStates have to be above const init due to hoisting? I declared the function
// instead of creating the function?/ using the function keyword 
const updateStates = () => {

    state.boredom = Math.floor(Math.random () * 4)
    state.hunger = Math.floor(Math.random () * 4)
    state.sleepiness = Math.floor(Math.random () * 4)
    
}

const playBtnClick = () => {
    state.boredom = 0 
    render()
}

const eatBtnClick = () => {
    state.hunger = 0 
    render()
}

const sleepBtnClick = () => {
    state.sleepiness = 0 
    render()
}

// Why declare a function instead of using the function keyword?

const checkGameOver = () => {
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
        gameOver = true
        clearInterval(timer)
    }
}

/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener('click', playBtnClick)
eatBtnEl.addEventListener('click', eatBtnClick)
sleepBtnEl.addEventListener('click', sleepBtnClick)
restartBtnEl.addEventListener('click', init)

// init()