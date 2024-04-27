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
function popCelebration(elementId, showTime) {
    // Get the element by its ID
    let pop = document.querySelector(elementId);


    // Set a timeout to hide the element after the specified show time
    setTimeout(function() {
        pop.style.display = 'block';
    }, showTime);

    // Set a timeout to show the element after the specified hide time

    pop.style.display = 'none';

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
        instructionsElement.innerHTML = `${playerSelection} beats ${computerSelection},<span class = "victory"> you win!</span>`;
        popCelebration('.pop',2000)

    }
    else{
        instructionsElement.innerHTML = `${computerSelection} beats ${playerSelection},<span class = "lost"> you loosed! </span>`;
    }
    
}
var buttons = document.querySelectorAll('button');
buttons = buttons.forEach(button => button.addEventListener('click', function() {
    styleChange(button);
}));


