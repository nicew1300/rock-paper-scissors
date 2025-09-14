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

function playRound(computerChoice, humanChoice) {

}