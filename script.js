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


function getHumanChoice(maxFromHuman) {
    if ((Math.floor(Math.random() * maxFromHuman)) == 0) {
    return "Rock";
    }
    else if ((Math.floor(Math.random() * maxFromHuman)) == 1) {
    return "Paper";
    }
    else {
    return "Scissors";
    }
}

console.log("Computer choice: " + getComputerChoice(3));
console.log("Human choice: " + prompt("Input your choise: ", ))