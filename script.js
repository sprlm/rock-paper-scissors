function computerPlay() {
    let randNum = Math.floor(Math.random() * 3);

    switch (randNum) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "Something has gone horribly wrong.";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    switch (playerSelection) {
        case "rock":
            if (computerSelection === "rock") {
                return "It's a draw!";
            } else if (computerSelection === "paper") {
                return "You lose! Paper beats rock.";
            } else {
                return "You win! Rock beats scissors.";
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                return "You win! Paper beats rock.";
            } else if (computerSelection === "paper") {
                return "It's a draw!";
            } else {
                return "You lose! Scissors beats paper.";
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                return "You lose! Rock beats scissors.";
            } else if (computerSelection === "paper") {
                return "You win! Scissors beats paper.";
            } else {
                return "It's a draw!";
            }
            break;
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
