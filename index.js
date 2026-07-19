const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to the Number Guessing Game!');
console.log('I have chosen a number between 1 and 10.');

const target = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function askGuess() {
  rl.question('Enter your guess: ', (answer) => {
    const guess = Number(answer);
    attempts += 1;

    if (guess === target) {
      console.log(`Correct! You guessed it in ${attempts} attempts.`);
      rl.close();
      return;
    }

    if (guess < target) {
      console.log('Too low! Try again.');
    } else {
      console.log('Too high! Try again.');
    }

    askGuess();
  });
}

askGuess();