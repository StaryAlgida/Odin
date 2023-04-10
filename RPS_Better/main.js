const playerChoose = document.querySelectorAll('.choose');
const player = document.querySelector('#player')

const round = document.querySelector("#round");

const ai = document.querySelector('#ai')

const choose = ['rock', 'paper', 'scissors']

let playerPionts = 0;
let computerPoints = 0;
let rounds = 1;

function computer(){
    const ai = choose[Math.floor(Math.random()*choose.length)];
    
    const aiPrint = document.querySelector('#aiChoose');
    aiPrint.innerHTML = ai;
    
    return(ai)
}

function updateScore(){
    const playerScore = document.querySelector('#playerScore');
    const aiScore = document.querySelector('#aiScore');

    playerScore.innerHTML = playerPionts;
    aiScore.innerHTML = computerPoints;
}

function checkWinnerRound(playerChoose, computerChoose){

    if(playerChoose === choose[0] && computerChoose === choose[2] || 
        playerChoose === choose[1] && computerChoose === choose[0] ||
        playerChoose === choose[2] && computerChoose === choose[1])
    {
        playerPionts++;
        console.log("Player Win");
    }
    else if(playerChoose === computerChoose)
    {
        console.log("Draw");
    }
    else{
        computerPoints++;
        console.log("AI Win");
    }
}

function checkGameWinner(){
    
    if(playerPionts>computerPoints)
    {
        return "Player Win"
    }
    else if(playerPionts<computerPoints)
    {
        return "AI Win"
    }
    else
    {
        return "Draw"
    }
    
}

function game(player, computerChoose){
    
    checkWinnerRound(player, computerChoose);
    
    updateScore();
    
    rounds++;
    
    if(rounds === 5)
    {
        playerChoose.forEach(element => element.disabled = true);
        document.querySelector("#winner").innerHTML = checkGameWinner();
    }

    round.innerHTML= rounds;
    
}

playerChoose[0].onclick = () => {
    console.log(choose[0]);
    game(choose[0], computer());
}

playerChoose[1].onclick = () => {
    console.log(choose[1]);
    game(choose[1], computer());
}

playerChoose[2].onclick = () => {
    console.log(choose[2]);
    game(choose[2], computer());
}
