function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1){
        choice = "Rock";
    } else if (choice == 2){
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice
}


console.log(getComputerChoice());