let humanScore = 0, computerScore = 0, humanChoise = "", computerChoise = "", roundGame = 1;

function getComputerChoice(maxFromCom) {
    if ((Math.floor(Math.random() * maxFromCom)) == 0) {
    return "Rock";
    }
    else if ((Math.floor(Math.random() * maxFromCom)) == 1) {
    return "Paper";
    }
    else {
    return "Scissors";
    }
}



function getHumanChoice() {
    humanChoise = prompt("Input your choise: [Rock,Paper,Scissors]", )
    return humanChoise;
}



function playRound() {
    computerChoise = getComputerChoice(3)
    humanChoise = getHumanChoice()
    if (computerChoise == "Rock") {
        if (humanChoise == "Rock") {
            console.log("Draw!!")
        }
        else if (humanChoise == "Paper") {
            console.log("Human win!!")
            humanScore++;
        }
        else if (humanChoise == "Scissors") {
            console.log("Computer win!!")
            computerScore++;
        }
        else {
            console.log("Error!!!")
        }
    }
    else if (computerChoise == "Paper") {
        if (humanChoise == "Rock") {
            console.log("Computer win!!")
            computerScore++;
        }
        else if (humanChoise == "Paper") {
            console.log("Draw!!")
        }
        else if (humanChoise == "Scissors") {
            console.log("Human win!!")
            humanScore++;
        }
        else {
            console.log("Error!!!")
        }
    }
    else if (computerChoise == "Scissors") {
        if (humanChoise == "Rock") {
            console.log("Computer win!!")
            computerScore++;
        }
        else if (humanChoise == "Paper") {
            console.log("Draw!!")
        }
        else if (humanChoise == "Scissors") {
            console.log("Human win!!")
            humanScore++;
        }
        else {
            console.log("Error!!!")
        }
    }
    else {
        return;
    }
}

function playGame() {
    roundGame = prompt("How many rounds do you want to play?: ", 1);
    for (let i = 1; i <= roundGame; i++) {
        console.log("Round " + String(i))
        playRound()
        console.log("Human choice: " + humanChoise)
        console.log("Human score: " + humanScore)
        console.log("Computer choice: " + computerChoise);
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
