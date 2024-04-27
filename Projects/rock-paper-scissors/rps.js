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
    displayScore(youWin)
    console.log(`p:${playerSelection}: c:${computerSelection}`,youWin);
    return youWin;

}

let scorePlayer = 0;
let scoreComputer = 0;
function displayScore(youWin){
    let scoreElement = document.getElementsByClassName("score")[0];
    if(youWin==true){
        scorePlayer = scorePlayer + 1;
    }else{
        scoreComputer = scoreComputer + 1;
    }
    scoreElement.innerHTML = `Computer:${scoreComputer} player:${scorePlayer}`;
}

function styleChange(button){
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    let youWin = playerRound(button);
    let instructionsElement = document.getElementsByClassName("instructions")[0];
    // Change the content of the element
    if(playerSelection == computerSelection){
        instructionsElement.innerHTML = `tie! you both picked ${playerSelection}`;
    }
    if(youWin == true){
        instructionsElement.innerHTML = `${playerSelection} beats ${computerSelection},<> you win!`;
    }
    else{
        instructionsElement.innerHTML = `${computerSelection} beats ${playerSelection}, you loosed!`;
    }
    
}
var buttons = document.querySelectorAll('button');
buttons = buttons.forEach(button => button.addEventListener('click', function() {
    styleChange(button);
}));


