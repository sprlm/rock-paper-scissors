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

let playerSelection;
let computerSelection;

const result = document.querySelector('.result');

const choiceButton = document.querySelectorAll('.choice-button');
choiceButton.forEach(button => {
    button.addEventListener('click', (e) => {
        playerSelection = e.target.textContent.toLowerCase();
        computerSelection = computerPlay();
        result.textContent = playRound(playerSelection, computerSelection);
    });
});
