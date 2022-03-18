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

function getPlayerSelection() {
    let playerSelection; 
    
    do {
        playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();

        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            return playerSelection;
        } else {
            console.log("Incorrect input. Please type rock, paper, or scissors.");
        }
    } while (playerSelection !== "rock" || playerSelection !== "paper" || playerSelection !== "scissors");
}

function game() {
    let playerSelection;
    let computerSelection;
    let gameResult;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerSelection();
        computerSelection = computerPlay();

        gameResult = playRound(playerSelection, computerSelection);
        console.log(gameResult);

        if (gameResult.charAt(4) === "w") {
            playerScore++;
        } else if (gameResult.charAt(4) === "l") {
            computerScore++;
        }
    }

    console.log(`The final score is ${playerScore}-${computerScore}.`);
}

game();
