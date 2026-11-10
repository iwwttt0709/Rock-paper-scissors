let humanScore = 0, computerScore = 0, humanChoice = "", computerChoice = "", roundGame = 1;

function getComputerChoice(maxFromCom) {
    if ((Math.floor(Math.random() * maxFromCom)) == 0) {
    return rock;
    }
    else if ((Math.floor(Math.random() * maxFromCom)) == 1) {
    return paper;
    }
    else {
    return scissors;
    }
}


const rockChoice = document.getElementById('rock')
    , paperChoice = document.getElementById('paper')
    , scissorsChoice = document.getElementById('scissors')
    , rock = "rock"
    , paper = "paper"
    , scissors = "scissors";


function getHumanChoice(choice) {
    if (choice === rock) {
        humanChoice = rock;
    }else if (choice === paper) {
        humanChoice = paper;
    }else if (choice === scissors){
        humanChoice = scissors;
    }else {
        return 0;
    }
    console.log(`Human choice is ${humanChoice}`)
    return humanChoice;
}



function playRound() {
    computerChoice = getComputerChoice(3)
    rockChoice.addEventListener("click", () => getHumanChoice(rock));
    paperChoice.addEventListener("click", () => getHumanChoice(paper));
    scissorsChoice.addEventListener("click", () => getHumanChoice(scissors));
    if (computerChoice === rock) {
        if (humanChoice === rock) {
            console.log("Draw!!")
        }
        else if (humanChoice === paper) {
            console.log("Human win!!")
            humanScore++;
        }
        else if (humanChoice === scissors) {
            console.log("Computer win!!")
            computerScore++;
        }
        else {
            console.log("Error!!!")
        }
    }
    else if (computerChoice === paper) {
        if (humanChoice === rock) {
            console.log("Computer win!!")
            computerScore++;
        }
        else if (humanChoice === paper) {
            console.log("Draw!!")
        }
        else if (humanChoice === scissors) {
            console.log("Human win!!")
            humanScore++;
        }
        else {
            console.log("Error!!!")
        }
    }
    else if (computerChoice === scissors) {
        if (humanChoice === rock) {
            console.log("Computer win!!")
            computerScore++;
        }
        else if (humanChoice === paper) {
            console.log("Draw!!")
        }
        else if (humanChoice === scissors) {
            console.log("Human win!!")
            humanScore++;
        }
        else {
            console.log("Error!!!")
        }
    }
    else {
        return 0;
    }
}

function playGame() {
    roundGame = prompt("How many rounds do you want to play?: ", 1);
    for (let i = 1; i <= roundGame; i++) {
        console.log("Round " + String(i))
        playRound()
        console.log("Human choice: " + humanChoice)
        console.log("Human score: " + humanScore)
        console.log("Computer choice: " + computerChoice);
        console.log("Computer score: " + computerScore)
    }
    if (computerScore > humanScore) {
        console.log("Result: Computer Win!")
        console.log(String(computerScore) + " : " + String(humanScore))
    }
    else if (computerScore < humanScore) {
        console.log("Result: Human Win!")
        console.log(String(humanScore) + " : " + String(computerScore))
    }
    else {
        console.log("Result: Draw!")
        console.log(String(humanScore) + " : " + String(computerScore))
    }
}

playGame()
