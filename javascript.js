let rounds = 1;

while (rounds <= 5) {
    let playerChoice = prompt("Select rock, paper, or scissors. Type q to quit");
    //check to see if player wants to quit
    if (playerChoice.toLowerCase() == "q") {
        console.log("Thanks for playing");
        start = false;
    } else {
        let computerChoice = computerPlay();
        game(playerChoice, computerChoice);
    }

    rounds++;
}

function computerPlay() {
    //possible choices as an array
    const choices = ["rock", "paper", "scissors"];
    //randomly choose a number between 0 and 2 inclusive; this will be the index position of the choices array
    let choice = Math.floor(Math.random() * 3);
    //return either rock, paper, or scissors
    return choices[choice];
}

function game(playerSelection, computerSelection) {
    console.log("Rock paper scissors shoot...")
    console.log("Player played: " + playerSelection);
    console.log("Computer played: " + computerSelection);
    if ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissors")
        || (playerSelection.toLowerCase == "scissors" && computerSelection == "paper") || (playerSelection == "paper" &&
            computerSelection == "rock")) {
        console.log("Player wins!");
    } else if (playerSelection == computerSelection) {
        console.log("Tie!");
    } else {
        console.log("Computer wins!");
    }
    console.log("\n");
}