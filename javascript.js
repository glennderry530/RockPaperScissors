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
    
    const result = document.getElementById('result');
    result.style = "color: orange; weight: bold;";
    


    let roundResult = items.indexOf(computerSelection) - items.indexOf(playerSelection);

    if (roundResult == 0) {
        result.textContent = (tie); gameOutput.appendChild(result); return ("Tie");
    } else if (roundResult == -1) {
        result.textContent = (win); gameOutput.appendChild(result); return ("Player");
    } else if (roundResult == 1) {
        result.textContent = (loose); gameOutput.appendChild(result); return ("Computer");
    } else if (roundResult == 2) {
        result.textContent = (win); gameOutput.appendChild(result); return ("Player");
    } else if (roundResult == -2) {
        result.textContent = (loose); gameOutput.appendChild(result); return ("Computer");
    } else return ("Computer");
}

let playerScore = 0, computerScore = 0, gameNumber = 0;

function updateScoreBoard(roundWinner) {

    const rW = document.getElementById("roundWinner");
    const scoreBoard = document.getElementById ("scoreBoard");

    if (roundWinner == ("Tie")) {
        rW.textContent = ("It's a TIE! ");
        gameNumber++;
        gameOutput.appendChild(rW);
    } else if (roundWinner == ("Player")) {
        playerScore++; 
        gameNumber++;
        rW.textContent = ("Player Wins! ");
        gameOutput.appendChild(rW);
    } else if (roundWinner == ("Computer")) {
         computerScore++; 
         gameNumber++;
         rW.textContent = ("Computer Wins! "); 
         gameOutput.appendChild(rW);
    } else if (roundWinner == "RESET"){
        playerScore = 0; computerScore = 0; gameNumber = 0;
    };
    
    scoreBoard.style.color = 'yellow'; scoreBoard.style.backgroundColor = 'black';
    scoreBoard.textContent = ("GAME NUMBER: " + gameNumber + "  SCORE: Player[" + playerScore + "] Computer[" + computerScore + "]")
    gameOutput.appendChild(scoreBoard);

    function makeResetButton(winner){
        const rB = document.createElement('button');
        rB.textContent = (winner + ' Wins Game --- RESET?');
        scoreBoard.appendChild(rB);
        rB.addEventListener('click', () => {updateScoreBoard('RESET')});
    };


    if (playerScore >= 5) {
        makeResetButton('Player');
    } else if (computerScore >= 5) {
        makeResetButton('Computer');
    }
}


