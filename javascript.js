const items = ["rock", "paper", "scissors"];

function getComputerChoice(items) {
    return items[Math.floor(Math.random()*items.length)];
}

// FIX THIS SECTION SO THAT IT WONT ALLOW an Undefined value out of the function (you have to type correctly)
function getPlayerInput() {
    let playerInput = prompt("Please Enter: Rock, Paper, or Scissors");
    if (items.includes(playerInput.toLowerCase())) {
     return playerInput.toLowerCase();
    } else alert("NOT A VALID INPUT - TRY AGAIN"); getPlayerInput();
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
    } else return ("Computer");
}


function game() {
    for (let i = 0; i < 5; i ++) {
        console.log ("Game # " + (i+1) + " of 5 ");

        let playerSelection = getPlayerInput();
        
        let computerSelection = getComputerChoice(items);

        let roundWinner = playRound(playerSelection, computerSelection);
       
        scoreBoard(roundWinner);
         }
    }


let playerScore = 0; let computerScore = 0;

    function scoreBoard (roundWinner) {

        if (roundWinner == ("Tie")) {
            console.log("Its a Tie!");
        } else if (roundWinner == ("Player")) {
            playerScore++; console.log("Player Wins! ");
        } else if (roundWinner == ("Computer")) {
            computerScore++; console.log("Computer Wins! ");
        }
        console.log("SCORE: Player[" + playerScore + "] Computer[" + computerScore + "]");
    }