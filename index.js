function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let choice = prompt("Enter your choice (rock, paper, or scissors):").trim().toLowerCase();

  if (["rock", "paper", "scissors"].includes(choice)) {
    return choice;
  }

  alert("Invalid choice");
  return getHumanChoice();
}

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  console.log("You chose:", humanChoice);
  console.log("Computer chose:", computerChoice);

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
  } else {
    console.log("Computer wins!");
  }
}

playRound();