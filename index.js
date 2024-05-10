let currentPlayer = "X"
let gameStatus = ['-', '-', '-', '-', '-', '-', '-', '-', '-']

const cells = document.querySelectorAll(".cell")
const statusDisplay = document.getElementById("status")

document.getElementById('restart-btn').addEventListener('click', handleRestart);

//adding event listeneres 
cells.forEach(cell => {
    cell.addEventListener('click', handleClick)
})

//taking care of clicking the boxes
function handleClick(event){
    const cellIndex = event.target.id
    if(gameStatus[cellIndex] === '-' && !checkWinner()){
        gameStatus[cellIndex] = currentPlayer
        event.target.textContent = currentPlayer
        if (checkWinner()) {
            statusDisplay.textContent = `Player ${currentPlayer} wins! 🎊🎊🎉`
        } else if (checkTie()) {
            statusDisplay.textContent = 'It\'s a tie!🙁'
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
            statusDisplay.textContent = `Player ${currentPlayer}'s turn`
        }

    }
}
//checking winner
function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], 
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], 
        [0, 4, 8],
        [2, 4, 6]             
    ]

    for (let combo of winningCombos) {
        if (gameStatus[combo[0]] !== '-' &&
            gameStatus[combo[0]] === gameStatus[combo[1]] &&
            gameStatus[combo[1]] === gameStatus[combo[2]]) {
            return true
        }
    }

    return false
}
//checking for a tie
function checkTie() {
    return gameStatus.every(cell => cell !== '-')
}
//restart button
function handleRestart() {
    currentPlayer = 'X'
    gameStatus = ['-', '-', '-', '-', '-', '-', '-', '-', '-']
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`
    cells.forEach(cell => {
        cell.textContent = ''
    })
}
