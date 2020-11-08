let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;



const generateTarget = function () {
    return Math.floor(Math.random()*9)
}

const compareGuesses= function (human,computer,target) {

    humanValue = Math.abs(target-human)
    computerValue = Math.abs(target-computer)

    if (humanValue < computerValue) {
        return true
    } else if (humanValue === computerValue) {
        return true
    } else {
        return false
    }

    

}

const updateScore = function (winner) {
    switch (winner) {
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
    }
}

const advanceRound = function () {
    currentRoundNumber++
}
