function getComputerChoice(){
    const choose = ['rock', 'paper', 'scissors']
    return(choose[Math.floor(Math.random()*choose.length)])
}

function playRound(playerSelection, computerSelection){
    let winner;
    if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper")){
        winner = 'Player';
    }
    else if (playerSelection === computerSelection){
        winner = 'Draw';
    }
    else{
        winner = 'Computer';
    }
    return(winner)
}

function whoWinn(playerScore, computerScore){

    if(playerScore > computerScore){
        console.log('Game win: Player');
    }
    else if(computerScore > playerScore){
        console.log('Game win: Computer');
    }
    else{
        console.log('Draw');
    }
}

function game(){
    const rounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let winner;
    for(let i=0; i < rounds; i++){
        
        let playerSelection = prompt("Rock Paper Scissors");
        
        while(playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
            console.log("Bad choice!!!");
            playerSelection = prompt("Rock Paper Scissors");
        }

        const computerSelection = getComputerChoice();
        winner = playRound(playerSelection.toLowerCase(), computerSelection);
        console.log('Round winner: ' + winner);

        if( winner.localeCompare('Player') == 0){
            playerScore ++;
        }
        else if (winner.localeCompare('Computer') == 0){
            computerScore ++;
        }
        
    }
    
    whoWinn(playerScore, computerScore)
    
}


game()
