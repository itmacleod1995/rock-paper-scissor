function computerPlay() {
    //possible choices as an array
    const choices = ["rock", "paper", "scissors"];
    //randomly choose a number between 0 and 2 inclusive; this will be the index position of the choices array
    let choice = Math.floor(Math.random() * 3);
    //return either rock, paper, or scissors
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
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

function game() {

    let computerChoice = computerPlay();
    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");
    rock.addEventListener("click", function (e) {
        if (e.target.classList[0] == "rock") {
            playRound("rock", computerChoice);
        }
    });

    paper.addEventListener("click", function (e) {
        if (e.target.classList[0] == "paper") {
            playRound("paper", computerChoice);
        }
    });

    scissors.addEventListener("click", function (e) {
        if (e.target.classList[0] == "scissors") {
            playRound("scissors", computerChoice);
        }
    });



}



game();