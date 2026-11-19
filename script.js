let humanScore = 0;
let computerScore = 0;
let roundGame = 1;
const totalRounds = 3;

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const choices = [rock, paper, scissors];

const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");
const playerScoreBoard = document.querySelector("div.scoreBoard-Player");
const computerScoreBoard = document.querySelector("div.scoreBoard-Computer");

playerScoreBoard.textContent = `Player: ${humanScore}`;
computerScoreBoard.textContent = `Computer: ${computerScore}`;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let result;

    if (humanChoice === computerChoice) {
        result = "Draw!";
    } else if (
        (humanChoice === rock && computerChoice === scissors) ||
        (humanChoice === paper && computerChoice === rock) ||
        (humanChoice === scissors && computerChoice === paper)
    ) {
        humanScore++;
        result = "You win!";
    } else {
        computerScore++;
        result = "You lose!";
    }

    console.log(`Round ${roundGame}: Your choice ${humanChoice}, Computer choice ${computerChoice}`);
    console.log(`${result} score: you ${humanScore} - ${computerScore} computer`);
    playerScoreBoard.textContent = `Player: ${humanScore}`;
    computerScoreBoard.textContent = `Computer: ${computerScore}`;

    if (roundGame === totalRounds) {
        if (humanScore > computerScore) {
            console.log("summary: YOU WIN!");
        } else if (computerScore > humanScore) {
            console.log("summary: YOU LOSE!");
        } else {
            console.log("summary: DRAW!");
        }
        console.log(`Last score: you ${humanScore} - ${computerScore} computer`);
        [rockChoice, paperChoice, scissorsChoice].forEach(button => {
            button.disabled = true;
        });
        return;
    }

    roundGame++;
}

rockChoice.addEventListener("click", () => playRound(rock));
paperChoice.addEventListener("click", () => playRound(paper));
scissorsChoice.addEventListener("click", () => playRound(scissors));