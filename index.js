let playerText = document.getElementById("playerText")
let restartBtn = document.getElelmentById("restart-btn")
let sections = Array.from(document.getElementsByClassName("cell"))

const O_entry = "O"
const X_entry = "X"
let currentPlayer = X_entry
// this will ensure that the sections are not overwritten. it has 9 spaces to be filled in with the 9 sections
let boxes = Array(9).fill(null)

const startGame = function(){
    
}