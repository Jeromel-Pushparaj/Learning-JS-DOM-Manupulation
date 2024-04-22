function getComputerChoice(){
    var randomInt = Math.floor(Math.random()*3);
    console.log(randomInt);
    var choice = ['rock','papper','scissor'];
    return choice[randomInt];
}

function playerRound(button){
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    let youWin = false;
    if (playerSelection==='rock' && computerSelection === 'scissor') {
        youWin = true;
    } 
    if(playerSelection === 'papper' && computerSelection === 'rock'){
        youWin = true;
    }
    if(playerSelection==='scissor' && computerSelection === 'papper'){
        youWin = true;
    }
    console.log(`p:${playerSelection}: c:${computerSelection}`,youWin);

}


var buttons = document.querySelectorAll('button');
buttons = buttons.forEach(button => button.addEventListener('click', function() {
    playerRound(button)
}));
