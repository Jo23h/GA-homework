/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

// a. Use a variable named board to represent the state of the squares on the board.
const board = [
    '', '', '',
    '', '', '',
    '', '', '',
]
console.log(board)

// b. Use a variable named turn to track whose turn it is.
let turn = 'X'

// c. Use a variable named winner to represent if anyone has won yet.
let winner = false

// d. Use a variable named tie to represent if the game has ended in a tie.
let tie = false 

// In a constant called winningCombos, define the eight possible winning combinations as an array of arrays.
const winningCombos = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]



/*------------------------ Cached Element References ------------------------*/
//  In a constant called squareEls, store the nine elements representing the squares on the page.
const squareEls = document.querySelectorAll('.sqr')

// In a constant called messageEl, store the element that displays the game’s status on the page.
const messageEl = document.querySelector('#message')

/*-------------------------------- Functions --------------------------------*/
function init(){
    render()
}

init()

function render(){
   updateBoard()
   updateMessage()
}


function updateBoard(){
    board.forEach((square, index) => {
        squareEls[index].textContent = square
    })
}

function updateMessage(){
    if(winner === false && tie === false){
        messageEl.textContent = `It's ${turn}'s turn`
    }
    else if(winner === false && tie === true){
        messageEl.textContent = 'Tie!'
    }
    else{
        messageEl.textContent = `Congrats Player ${turn}`
    }
}


function handleClick(event){
    // Why is this needed
    const index = parseInt(event.target.id)
   
    if (board[index] !== '' || winner) return
    placePiece(index)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()
}

function placePiece(index){
    board[index] = turn
}

function checkForWinner(){
    if(board[0] !== '' && board[0] === board[1] && board[0]===board[2]){
        winner = true
    }
}

function checkForTie(){
    if(winner === true){
        return
    } else if (board.includes('') === true){
        tie = false 
    } else if (board.includes('') === false){
        tie = true
}}

function switchPlayerTurn(){
    if (winner === true){
        return
    } 

    if (turn === 'X'){
        turn = 'O'
    } else {
        turn = 'X'
    }
}

/*----------------------------- Event Listeners -----------------------------*/
 squareEls.forEach(square => {
        square.addEventListener('click', handleClick)
    })

