const items = ["rock", "paper", "scissors"];

function getComputerChoice(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function validatePlayerInput(playerInput, items){
    if (items.includes(playerInput.toLowerCase())) {
        return playerInput.toLowerCase();
    } else return ("  INVALID YOU LOOSE THIS ROUND!  "); // Add logic to loose round to computer
   }

  
function playRound(playerSelection, computerSelection) {
    console.log("Computer Picked -> " + computerSelection + " " + items.indexOf(computerSelection));
    console.log("Player Picked -> " + playerSelection + " " + items.indexOf(playerSelection));
    

    const win = (playerSelection + " beats " + computerSelection);
    const loose = (playerSelection + " looses to " + computerSelection);
    const tie = (playerSelection + " is equal to " + computerSelection); 

    let roundResult = items.indexOf(computerSelection) - items.indexOf(playerSelection);

   if (roundResult == 0) {
        console.log(tie); return ("Tie");
    } else if (roundResult == -1) {
        console.log(win); return ("Player");
    } else if (roundResult == 1) {
        console.log(loose); return ("Computer");
    } else if (roundResult == 2) {
        console.log(win); return ("Player");
    } else if (roundResult == -2) {
        console.log(loose); return ("Computer");
    };
    
    }

function game() {
    for (let i = 0; i < 5; i ++) {
        console.log ("Game # " + (i+1) + " of 5 ");

        let playerInput = prompt("Rock, Paper, or Scissors?");
        let playerSelection = validatePlayerInput(playerInput, items);

        let computerSelection = getComputerChoice(items);

        let roundWinner = playRound(playerSelection, computerSelection);
        console.log(roundWinner);
        scoreBoard(roundWinner);
    }
}

let playerScore = 0; let computerScore = 0;

    function scoreBoard (roundWinner) {

        if (roundWinner = ("Tie")) {
            console.log("Its a Tie! " + " Score is: Player [" + playerScore + "] Computer [" + computerScore + "]");
        } else if (roundWinner = ("Player")) {
            playerScore ++; console.log("Player Wins! " + " Score is: Player [" + playerScore + "] Computer [" + computerScore + "]");
        } else if (roundWinner = ("Computer")) {
            computerScore ++; console.log("Computer Wins! " + " Score is: Player [" + playerScore + "] Computer [" + computerScore + "]");
        }
    }




