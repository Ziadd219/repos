function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const humanChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    if (["rock", "paper", "scissors"].includes(humanChoice)) {
        return humanChoice;
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("Computer wins this round!");
        computerScore++;
    }
}
}