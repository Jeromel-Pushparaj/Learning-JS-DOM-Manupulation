var randomInt = Math.floor(Math.random()*3);
console.log(randomInt);

function getComputerChoice(random){
    var choice = ['rock','papper','scissors'];
    return choice[random];
}
let youWin = false;
function playerRound(playerSelection,computerSelection){
    if (playerSelection==='rock' && computerSelection === 'scissors') {
        youWin = true;
    } 
    if(playerSelection=== 'papper' && computerSelection === 'rock'){
        youwin = true;
    }
    if(playerSelection==='scissor' && computerSelection === 'papper'){
        youWin = true;
        
    }
    if (playerSelection!=computerSelection && computerSelection === 'scissors' && computerSelection != 'rock') {
        var result = computerSelection + " Beats " + playerSelection;
        return result;
    }
    if(playerSelection!=computerSelection && computerSelection === 'papper' && computerSelection != 'scissors'){
        result =computerSelection + " Beats " + playerSelection;
        return result;
        
    }
    if(playerSelection!=computerSelection && computerSelection === 'rock' && computerSelection != 'papper'){
        result =computerSelection + " Beats " + playerSelection;
        return result;
        
    }
}

const prompt = require('prompt-sync')({ sigint: true });
let i = 0;
while(i == 0){
    let playerSelection = prompt("Enter you choice: ");
    console.log("Player: " + playerSelection);
    const computerSelection = getComputerChoice(randomInt);
    console.log("Computer: "+ computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    i = prompt("continue = 0, exit = 1: ")
}




// const playerSelection1 = "scissors";
// console.log("Player: " + playerSelection1);
// const computerSelection1 = getComputerChoice(randomInt);
// console.log("Computer: "+ computerSelection1);
// console.log(playRound(playerSelection1, computerSelection1));

// const playerSelection2 = "rock";
// console.log("Player: " + playerSelection2);
// const computerSelection2 = getComputerChoice(randomInt);
// console.log("Computer: "+ computerSelection2);
// console.log(playRound(playerSelection2, computerSelection2));