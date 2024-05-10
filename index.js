let playerText = document.getElementById("playerText")
let restartBtn = document.getElementById("restart-btn")
let sections = Array.from(document.getElementsByClassName("cell"))

const O_entry = "O"
const X_entry = "X"
let currentPlayer = X_entry
// this will ensure that the sections are not overwritten. it has 9 spaces to be filled in with the 9 sections
let boxes = Array(9).fill(null)

const startGame = function(){
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