/* randomly selects computer's choice */
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice == 1){
        choice = "Rock"
    } else if (choice == 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

/* runs a round of Rock, Paper, Scissors */
function playRound(e) {
    let playerSelection = e.target.textContent;
    let computerSelection = getComputerChoice();
    if (playerSelection == "Scissors" && computerSelection == "Paper"){
        result.textContent = "You win! Scissors beats Paper!";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        result.textContent = "You lose! Scissors beats paper";
    } else if (playerSelection > computerSelection){
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection < computerSelection) {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        result.textContent = "It's a tie!";
    }
    update();
}

/* runs five rounds of the game */
/* function game() {
    let playCount = 0;
    let computerCount = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("What do you pick? ");
        playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
        if (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors"){
            console.log("Please choose a valid option.");
            i = i - 1;
            continue;
        }
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        let round = playRound(playerSelection, computerSelection);
        console.log(round);
        if (round.slice(4, 7) == "win"){
            playCount++;
        } else if (round.slice(4, 8) == "lose"){
            computerCount++;
        }
    }
    if (playCount > computerCount){
        console.log("You win!")
    } else if (computerCount > playCount){
        console.log("You lose!")
    } else {
        console.log("It's a tie!")
    }
}

/* calls function to play game */
const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const player = document.querySelector('.display1');
const computer = document.querySelector('.display2');

let playerCounter = 0;
let compCouter = 0;



buttons.forEach((button) => {
    button.addEventListener('click', playRound);
}); 
function update(){
    if (result.textContent.slice(4,7) == "win"){
        playerCounter++;
    } else if (result.textContent.slice(4, 8) == "lose"){
        compCouter++;
    }
    if (playerCounter == 5){
        result.textContent == "You win the game!"
        playerCounter = 0;
        compCouter = 0;
    } else if (compCouter == 5){
        result.textContent == "You lose the game!"
        playerCounter = 0;
        compCouter = 0;
    }
    player.textContent = playerCounter;
    computer.textContent = compCouter;
}


