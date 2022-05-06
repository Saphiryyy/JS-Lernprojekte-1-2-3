'use strict';
// declarations
let p0Score = document.querySelector('#score--0');
let p1Score = document.querySelector('#score--1');
let p0CurScore = 0;
let p1CurScore = 0;
let diceEl = document.querySelector('.dice');
let activePlayer = 0;

// Starting conditions
p0Score.textContent = 0;
p1Score.textContent = 0;
console.log(p0Score.textContent, p1Score.textContent);
diceEl.classList.add('hidden');

// handling a one roll
function rollOne() {
  activePlayer === 0
    ? ((p0CurScore = 0),
      (activePlayer = 1),
      (document.querySelector('#current--0').textContent = String(p0CurScore)))
    : ((p1CurScore = 0),
      (activePlayer = 0),
      (document.querySelector('#current--1').textContent = String(p1CurScore)));
}

// rolling the dice
document.querySelector('.btn--roll').addEventListener('click', function () {
  let diceRoll = Math.floor(Math.random() * 6 + 1);
  // calculating current score
  function adjustCurScore() {
    activePlayer === 0
      ? ((p0CurScore = p0CurScore + diceRoll),
        (document.querySelector('#current--0').textContent =
          String(p0CurScore)))
      : ((p1CurScore = p1CurScore + diceRoll),
        (document.querySelector('#current--1').textContent =
          String(p1CurScore)));
  }
  console.log(diceRoll, activePlayer);
  diceEl.classList.remove('hidden');
  if (diceRoll === 1) {
    diceEl.src = 'dice-1.png';

    rollOne();
  } else if (diceRoll === 2) {
    diceEl.src = 'dice-2.png';

    adjustCurScore();
  } else if (diceRoll === 3) {
    diceEl.src = 'dice-3.png';

    adjustCurScore();
  } else if (diceRoll === 4) {
    diceEl.src = 'dice-4.png';

    adjustCurScore();
  } else if (diceRoll === 5) {
    diceEl.src = 'dice-5.png';

    adjustCurScore();
  } else if (diceRoll === 6) {
    diceEl.src = 'dice-6.png';

    adjustCurScore();
  }
});

// the hold functionality
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (activePlayer === 0) {
    p0Score.textContent = Number(p0Score.textContent) + p0CurScore;
    document.querySelector('#current--0').textContent = 0;
    activePlayer = 1;
    p0CurScore = 0;
  } else if (activePlayer === 1) {
    p1Score.textContent = Number(p1Score.textContent) + p1CurScore;
    document.querySelector('#current--1').textContent = 0;
    activePlayer = 0;
    p1CurScore = 0;
  }
});

// the new game functionality
document.querySelector('.btn--new').addEventListener('click', function () {
  p0Score.textContent = 0;
  p1Score.textContent = 0;
  p0CurScore = 0;
  document.querySelector('#current--0').textContent = 0;
  p1CurScore = 0;
  document.querySelector('#current--1').textContent = 0;
  activePlayer = 0;
  diceEl.classList.add('hidden');
});
