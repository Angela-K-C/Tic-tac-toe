let playerText = document.getElementById("playerText")
let restartBtn = document.getElementById("restart-btn")
//creates an array from the table elements
let sections = Array.from(document.getElementsByClassName("cell"))

//assigns X and O to constants
const O_entry = "O"
const X_entry = "X"
let currentPlayer = X_entry
// this will ensure that the sections are not overwritten. it has 9 spaces to be filled in with the 9 sections
let boxes = Array(9).fill(null)

const startGame = function(){
//Automates the process of adding event listeners to each and every cell of that table
sections.forEach(function(sec){
    sec.addEventListener("click", sectionClicked)
})
}

function sectionClicked(e) {
    const id = e.target.id


if(!boxes[id]){
    boxes[id] = currentPlayer
    e.target.innerText = currentPlayer

    currentPlayer = currentPlayer === X_entry? O_entry : X_entry
    if(currentPlayerWon() {
        playerText.textContent = `${currentPlayer} has won! Yay.`
    })
}
}

    const toWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

function currentPlayerWon() {
    
}    

restartBtn.addEventListener("click", restart)

function restart(){
    boxes.fill(null)
    sections.forEach(function(sec){ 
        sec.innerText = ""
    })
    currentPlayer = X_entry
    playerText.innerText= "Tic Tac Toe"

}

startGame()