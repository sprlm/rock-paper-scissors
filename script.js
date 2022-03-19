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
                return "It's a draw! You both picked rock.";
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
                return "It's a draw! You both picked paper.";
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
                return "It's a draw! You both picked scissors.";
            }
            break;
    }
}

function onClickFunction(e) {
    let playerSelection = e.target.textContent.toLowerCase();
    let computerSelection = computerPlay();
    let gameResult;

    gameResult = playRound(playerSelection, computerSelection);
    if (gameResult.charAt(4) === "w") {
        playerScore++;
    } else if (gameResult.charAt(4) === "l") {
        computerScore++;
    }

    if (playerScore >= 5) {
        result.textContent = `${gameResult} You are officially smarter than a computer.`;
        document.querySelectorAll('.choice-button').forEach(button => {
            button.disabled = true;
        });
    } else if (computerScore >= 5) {
        result.textContent = `${gameResult} Through sheer skill, the computer has defeated you.`;
        document.querySelectorAll('.choice-button').forEach(button => {
            button.disabled = true;
        });
    } else {
        result.textContent = `${gameResult} Score: ${playerScore}-${computerScore}`;
    }
}

let playerScore = 0;
let computerScore = 0;

const result = document.querySelector('.result');

const choiceButton = document.querySelectorAll('.choice-button');
choiceButton.forEach(button => {
    button.addEventListener('click', e => onClickFunction(e));
});
