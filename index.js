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