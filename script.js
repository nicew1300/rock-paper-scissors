// console.log(Math.floor(Math.random()*3) +1) #Makes the computer pick a random whole number between 1 and 3
// rock = 1
// paper = 2
// scissors = 3

function getComputerChoice() {
let randomNum = Math.floor(Math.random()*3) +1
if (randomNum === 1) {
    return "rock";
}
else if (randomNum === 2) {
    return "paper";
}
else {
    return "scissors";
}}
let getHumanChoice = () => prompt("rock, paper or scissors?")

let humanScore = 0
let computerScore = 0

function playRound(humanSelection, computerSelection) {
if (humanSelection === "rock" && computerSelection === "rock") {
    console.log("Its a draw!")
}
else if (humanSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! Paper beats Rock!")
    computerScore++
}
else if (humanSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock beats Scissors!")
    humanScore++
}


if (humanSelection === "paper" && computerSelection === "paper") {
    console.log("Its a draw!")
}
else if (humanSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors beat Paper!")
    computerScore++
}
else if (humanSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper beats Rock!")
    humanScore++
}


if (humanSelection === "scissors" && computerSelection === "scissors") {
    console.log("Its a draw!")
}
else if (humanSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock beats Scissors!")
    computerScore++
}
else if (humanSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors beat Paper!")
    humanScore++
}

console.log(humanScore, computerScore);
}

function playGame() {
let humanSelection = getHumanChoice().toLowerCase()
let computerSelection = getComputerChoice()
playRound(humanSelection, computerSelection)
}

playGame()
playGame()
playGame()
playGame()
playGame()

if (humanScore > computerScore) {
    console.log("You won the match!");
} else if (humanScore < computerScore) {
    console.log("Computer won the match!");
} else {
    console.log("It's a tie overall!");
}