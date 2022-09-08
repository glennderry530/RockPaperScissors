const items = ["rock", "paper", "scissors"];

function getComputerChoice(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function playRound(playerSelection, computerSelection) {
    const compPick = document.getElementById('compPick');
    compPick.style.color = 'red';
    compPick.textContent = ("Computer Picked -> " + computerSelection);
    gameOutput.appendChild(compPick);

    const playerPick = document.getElementById('playerPick');
    playerPick.style.color = 'blue';
    playerPick.textContent = ("Player Picked -> " + playerSelection);
    gameOutput.appendChild(playerPick);

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
  // for (let i = 0; i < 5; i ++) {
  //     console.log ("Game # " + (i+1) + " of 5 ");

  //      let playerSelection = getPlayerInput();
        
  //      let computerSelection = getComputerChoice(items);

  //      let roundWinner = playRound(playerSelection, computerSelection);
       
  //      scoreBoard(roundWinner);
       //  }
}


let playerScore = 0; let computerScore = 0;

function scoreBoard(roundWinner) {

    const rW = document.getElementById("roundWinner");

    if (roundWinner == ("Tie")) {
        rW.textContent = ("It's a TIE! ");
        gameOutput.appendChild(rW);
    } else if (roundWinner == ("Player")) {
        playerScore++; 
        rW.textContent = ("Player Wins! "); 
        gameOutput.appendChild(rW);
    } else if (roundWinner == ("Computer")) {
         computerScore++; 
         rW.textContent = ("Computer Wins! "); 
         gameOutput.appendChild(rW);
    }
    const sB = document.getElementById ("scoreBoard");
    sB.style.color = 'yellow'; sB.style.backgroundColor = 'black';
    sB.textContent = ("SCORE: Player[" + playerScore + "] Computer[" + computerScore + "]")
    gameOutput.appendChild(sB);

}