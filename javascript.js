const items = ["rock", "paper", "scissors"];
let computerSelection = getComputerChoice(items);

function getComputerChoice(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function validatePlayerInput(playerInput, items){
    console.log (items.includes(playerInput.toLowerCase()));
    if (items.includes(playerInput.toLowerCase())) {
        return playerInput.toLowerCase();
    } else return ("  Invalid Input !  ");
   }

function playRound(playerSelection, computerSelection) {
    const win = ("You win -> " + playerSelection + " beats " + computerSelection);
    const loose = ("You Loose -> " + playerSelection + " looses to " + computerSelection);
    const tie = ("Its a Tie -> " + playerSelection + " is equal to " + computerSelection); 
    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log(tie); 
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(win); 
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(loose); 
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log(tie); 
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(loose); 
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(win); 
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(loose); 
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(win); 
    } else if (playerSelection === "scissors" && computerSelection === "scissors")
        console.log(tie);
    }