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
}
}

restartBtn.addEventListener("cllick", restart)

function restart(){
    currentPlayer = X_entry
    boxes.fill(null)
    sections.forEach(function(sec){ 
        sec.innerText=""
    })

}

startGame()