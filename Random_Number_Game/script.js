'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = Number(document.querySelector('.highscore').textContent);

function changeMessage(message) {
  document.querySelector('.message').textContent = message;
}

function numbersGame() {
  const guess = Number(document.querySelector('.guess').value);

  // No Input
  if (!guess) {
    changeMessage('You gotta type a number dummy!');

    // Score reaches 0
  } else if (score == 0) {
    changeMessage('Aww too bad. Press Again to try once more :)');

    // Guess must be between 1 and 20
  } else if (guess < 1 || guess > 20) {
    changeMessage('Its between 1 and 20 Buddy :)');

    // Wrong guess
  } else if (guess !== secretNumber) {
    guess > secretNumber ? changeMessage('Too high') : changeMessage('Too low');

    document.querySelector('.score').textContent =
      score >= 1 ? score-- : (score = 0);

    document.querySelector('.score').textContent = score;

    // Correct guess
  } else if (guess === secretNumber) {
    changeMessage('ITS THE CORRECT NUMBER!!! WOOHOOO!!!');

    document.querySelector('.number').textContent = secretNumber;

    highscore < score
      ? (highscore = score) &&
        (document.querySelector('.highscore').textContent = highscore)
      : null;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  }
}

document.querySelector('.check').addEventListener('click', numbersGame);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);

  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = null;

  changeMessage('Start guessing...');

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('body').style.backgroundColor = '#222';

  console.log(secretNumber);
});

console.log(secretNumber);
