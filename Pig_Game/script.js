'use strict';
// declarations
let p0Score = document.querySelector('#score--0');
let p1Score = document.querySelector('#score--1');
let p0CurScoreEl = document.querySelector('#current--0');
let p0CurScore = 0;
let p1CurScoreEl = document.querySelector('#current--1');
let p1CurScore = 0;
let activePlayer = 0;
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
p0Score.textContent = 0;
p1Score.textContent = 0;
diceEl.classList.add('hidden');

// handling a one roll
function rollOne() {
  activePlayer === 0
    ? ((p0CurScore = 0),
      (activePlayer = 1),
      (document.querySelector('#current--0').textContent = p0CurScore))
    : ((p1CurScore = 0),
      (activePlayer = 0),
      (document.querySelector('#current--1').textContent = p1CurScore));
}

// diceRoll functionality
btnRoll.addEventListener('click', function () {
  let diceRoll = Math.floor(Math.random() * 6 + 1);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceRoll}.png`;
  if (diceRoll !== 1) {
    activePlayer === 0 ? (p0CurScore += diceRoll) : (p1CurScore += diceRoll);
  } else if (diceRoll === 1) {
    rollOne();
  }
  p0CurScoreEl.textContent = p0CurScore;
  p1CurScoreEl.textContent = p1CurScore;
});

// the hold functionality
btnHold.addEventListener('click', function () {
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
btnNew.addEventListener('click', function () {
  p0Score.textContent = 0;
  p1Score.textContent = 0;
  p0CurScore = 0;
  p0CurScoreEl.textContent = 0;
  p1CurScore = 0;
  p1CurScoreEl.textContent = 0;
  activePlayer = 0;
  diceEl.classList.add('hidden');
});
