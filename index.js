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
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win this round!");
    return "human";
  } else {
    console.log("Computer wins this round!");
    return "computer";
  }
}

function playBestOfFive() {
  let humanWins = 0;
  let computerWins = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`\nRound ${round}`);
    const result = playRound();

    if (result === "human") {
      humanWins++;
    } else if (result === "computer") {
      computerWins++;
    }

    console.log(`Score: You ${humanWins} - ${computerWins} Computer`);
  }

  if (humanWins > computerWins) {
    console.log("You win the best-of-5 series!");
  } else if (computerWins > humanWins) {
    console.log("Computer wins the best-of-5 series!");
  } else {
    console.log("The series is tied!");
  }
}

playBestOfFive();