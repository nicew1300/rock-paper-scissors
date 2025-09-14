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

const computerSelection = getComputerChoice()
const humanSelection = getHumanChoice().toLowerCase()

let humanScore = 0
let computerScore = 0

function playRound(computerSelection, humanSelection) {
if (humanSelection === "rock" && computerSelection === "rock") {
    console.log("Its a draw!")
}
else if (computerSelection === "paper") {
    console.log("You lose! Paper beats Rock!")
}
else if (computerSelection === "scissors") {
    console.log("You win! Rock beats Scissors!")
}


if (humanSelection === "paper" && computerSelection === "paper") {
    console.log("Its a draw!")
}
else if (computerSelection === "scissors") {
    console.log("You lose! Scissors beat Paper!")
}
else if (computerSelection === "rock") {
    console.log("You win! Paper beats Rock!")
}


if (humanSelection === "scissors" && computerSelection === "scissors") {
    console.log("Its a draw!")
}
else if (computerSelection === "rock") {
    console.log("You lose! Rock beats Scissors!")
}
else if (computerSelection === "paper") {
    console.log("You win! Scissors beat Paper!")
}
}