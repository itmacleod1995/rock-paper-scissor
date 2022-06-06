function computerPlay() {
    //possible choices as an array
    const choices = ["rock", "paper", "scissors"];
    //randomly choose a number between 0 and 2 inclusive; this will be the index position of the choices array
    let choice = Math.floor(Math.random() * 3);
    //return either rock, paper, or scissors
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {

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

const points = document.querySelector(".points");
const score = document.querySelector(".score");
let rounds = 1;

const results = document.querySelector(".results");
const playerChoice = document.querySelector(".playerResults");
const compChoice = document.querySelector(".computerResults");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
rock.addEventListener("click", function (e) {
    if (e.target.classList[0] == "rock") {
        let computerChoice = computerPlay();
        playRound("rock", computerChoice);
        rounds++;
        points.textContent = rounds;
        score.appendChild(points);
        playerChoice.textContent = "Player chose rock!";
        compChoice.textContent = "Computer chose " + computerChoice + "!";
        results.appendChild(playerChoice);
        results.appendChild(compChoice);

    }
});

paper.addEventListener("click", function (e) {
    if (e.target.classList[0] == "paper") {
        let computerChoice = computerPlay();
        playRound("paper", computerChoice);
        rounds++;
        points.textContent = rounds;
        score.appendChild(points);
        playerChoice.textContent = "Player chose paper!";
        compChoice.textContent = "Computer chose " + computerChoice + "!";
        results.appendChild(playerChoice);
        results.appendChild(compChoice);
    }
});

scissors.addEventListener("click", function (e) {
    if (e.target.classList[0] == "scissors") {
        let computerChoice = computerPlay();
        playRound("scissors", computerChoice);
        rounds++;
        points.textContent = rounds;
        score.appendChild(points);
        playerChoice.textContent = "Player chose scissors!";
        compChoice.textContent = "Computer chose " + computerChoice + "!";
        results.appendChild(playerChoice);
        results.appendChild(compChoice);
    }
});










