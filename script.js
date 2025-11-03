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

// let getHumanChoice = () => prompt("rock, paper or scissors?")

let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

let humanScore = 0
let computerScore = 0

function playRound(humanSelection, computerSelection) {
if (humanSelection === "rock" && computerSelection === "rock") {
    result.textContent = `It's a draw!   You: ${humanScore} | Computer: ${computerScore}`
}
else if (humanSelection === "rock" && computerSelection === "paper") {
    result.textContent = `You lose! ${computerSelection} beats ${humanSelection}!   You: ${humanScore} | Computer: ${computerScore}`
    computerScore++
}
else if (humanSelection === "rock" && computerSelection === "scissors") {
    result.textContent = `You win! ${humanSelection} beats ${computerSelection}!   You: ${humanScore} | Computer: ${computerScore}`
    humanScore++
}


if (humanSelection === "paper" && computerSelection === "paper") {
    result.textContent = `It's a draw!   You: ${humanScore} | Computer: ${computerScore}`
}
else if (humanSelection === "paper" && computerSelection === "scissors") {
    result.textContent = `You lose! ${computerSelection} beats ${humanSelection}!   You: ${humanScore} | Computer: ${computerScore}`
    computerScore++
}
else if (humanSelection === "paper" && computerSelection === "rock") {
    result.textContent = `You win! ${humanSelection} beats ${computerSelection}!   You: ${humanScore} | Computer: ${computerScore}`
    humanScore++
}


if (humanSelection === "scissors" && computerSelection === "scissors") {
    result.textContent = `It's a draw!   You: ${humanScore} | Computer: ${computerScore}`
}
else if (humanSelection === "scissors" && computerSelection === "rock") {
    result.textContent = `You lose! ${computerSelection} beats ${humanSelection}!   You: ${humanScore} | Computer: ${computerScore}`
    computerScore++
}
else if (humanSelection === "scissors" && computerSelection === "paper") {
    result.textContent = `You win! ${humanSelection} beats ${computerSelection}!   You: ${humanScore} | Computer: ${computerScore}`
    humanScore++
}

console.log(humanScore, computerScore);
}

let result = document.querySelector("#result")

// function playGame() {
// let humanSelection = getHumanChoice().toLowerCase()
// let computerSelection = getComputerChoice()
// playRound(humanSelection, computerSelection)
// }


if (humanScore > computerScore) {
    console.log("You won the match!");
} else if (humanScore < computerScore) {
    console.log("Computer won the match!");
} else {
    console.log("It's a tie overall!");
}