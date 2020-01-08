let playerSelection = "";
let computerSelection = "";

function computerPlay() {
    let choiceList = ['ROCK', 'PAPER', 'SCISSORS'];
    return choiceList[Math.floor(Math.random() * 3)];
}

function playRound(e) {
    const playerSelection = document.querySelector(`.inputBtn[id="${e.target.id}"]`).textContent;
    const computerSelection = computerPlay();
    const gameLine1 = document.querySelector("#gt1").textContent = `You selected ${playerSelection}.`;
    const gameLine2 = document.querySelector("#gt2").textContent = `Computer selected ${computerSelection}.`;
    let gameLine3 = document.querySelector("#gt3");
    let roundResult = "";

    if (playerSelection == computerSelection) {
        roundResult = "tie";
    } else {
        switch (playerSelection) {
            case ("ROCK"):
                (computerSelection == "PAPER") ? roundResult = "lose" : roundResult = "win";
                break;
            case ("PAPER"):
                (computerSelection == "SCISSORS") ? roundResult = "lose" : roundResult = "win";
                break;
            case ("SCISSORS"):
                (computerSelection == "ROCK") ? roundResult = "lose" : roundResult = "win";
                break;
            default:
                console.log("Invalid selection.");
                roundResult = "loss";
        }
    }
    
    if (roundResult == "win") {
        gameLine3.textContent = "You win the round! 1 point added to your score!";
    } else if (roundResult == "lose") {
        gameLine3.textContent = "You lost the round! 1 point added to CPU score!";
    } else if (roundResult == "tie") {
        gameLine3.textContent = "It's a tie! No points awarded.";
    }
    game(roundResult);
}

const buttons = document.querySelectorAll(".inputBtn");
buttons.forEach(button => button.addEventListener('click', playRound));

function game(roundResult) {
    const gameContainer = document.querySelector("#gameContainer");
    const gameButtons = document.querySelector("#gameButtons");
    let playerScore = document.querySelector("#scorePlayer");
    let computerScore = document.querySelector("#scoreComputer");

    switch (roundResult){
        case ("win"):
            playerScore.textContent++;
            break;
        case ("lose"):
            computerScore.textContent++;
            break;
        case ("tie"):
            break;
        default:
            console.log("Error. Please review game()");
    }

    if (playerScore.textContent == 5) {
        alert("You WIN!");
        console.log("You WIN!");
        gameContainer.removeChild(gameButtons);
    } else if (computerScore.textContent == 5) {
        alert("You LOSE!");
        console.log("You LOSE!");
        gameContainer.removeChild(gameButtons);
    }
}
