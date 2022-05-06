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
diceEl.classList.add('hidden');

document.querySelector('.btn--roll').addEventListener('click', function () {
  let diceRoll = Math.floor(Math.random() * 6 + 1);
  console.log(diceRoll, activePlayer);
  diceEl.classList.remove('hidden');
  if (diceRoll === 1) {
    diceEl.src = 'dice-1.png';
    activePlayer === 0
      ? ((p0CurScore = 0), (activePlayer = 1))
      : ((p1CurScore = 0), (activePlayer = 0));
    document.querySelector('#current--0').textContent = String(p0CurScore);
    document.querySelector('#current--1').textContent = String(p1CurScore);
  } else if (diceRoll === 2) {
    diceEl.src = 'dice-2.png';
    activePlayer === 0
      ? (p0CurScore = p0CurScore + diceRoll)
      : (p1CurScore = p1CurScore + diceRoll);
    document.querySelector('#current--0').textContent = String(p0CurScore);
    document.querySelector('#current--1').textContent = String(p1CurScore);
  } else if (diceRoll === 3) {
    diceEl.src = 'dice-3.png';
    activePlayer === 0
      ? (p0CurScore = p0CurScore + diceRoll)
      : (p1CurScore = p1CurScore + diceRoll);
    document.querySelector('#current--0').textContent = String(p0CurScore);
    document.querySelector('#current--1').textContent = String(p1CurScore);
  } else if (diceRoll === 4) {
    diceEl.src = 'dice-4.png';
    activePlayer === 0
      ? (p0CurScore = p0CurScore + diceRoll)
      : (p1CurScore = p1CurScore + diceRoll);
    document.querySelector('#current--0').textContent = String(p0CurScore);
    document.querySelector('#current--1').textContent = String(p1CurScore);
  } else if (diceRoll === 5) {
    diceEl.src = 'dice-5.png';
    activePlayer === 0
      ? (p0CurScore = p0CurScore + diceRoll)
      : (p1CurScore = p1CurScore + diceRoll);
    document.querySelector('#current--0').textContent = String(p0CurScore);
    document.querySelector('#current--1').textContent = String(p1CurScore);
  } else if (diceRoll === 6) {
    diceEl.src = 'dice-6.png';
    activePlayer === 0
      ? (p0CurScore = p0CurScore + diceRoll)
      : (p1CurScore = p1CurScore + diceRoll);
    document.querySelector('#current--0').textContent = String(p0CurScore);
    document.querySelector('#current--1').textContent = String(p1CurScore);
  }
});
