// make a player
// make a computer
// make a result
// make buttons for choices

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener ("click", () => {


    player= button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
} ));
function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;
    switch(randNum){
       case 1: 
       computer ="ROCK";
       break;
       case 2: 
       computer ="PAPER";
       break;
       case 1: 
       computer ="SCISSORS";
       break;
        
    }
}
function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if (player == "ROCK"){
        return (computer == "PAPER") ? "You Lose!" : "You Win!"
    }
    else if (player == "PAPER"){
        return (computer == "SCISSORS") ? "You Lose!" : "You Win!"
    }
    else if (player == "SCISSORS"){
        return (computer == "ROCK") ? "You Lose!" : "You Win!"
    }
}