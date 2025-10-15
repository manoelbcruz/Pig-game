'use strict';
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewG = document.querySelector('.btn--new');
const players = document.querySelectorAll('.player');
let scores = document.querySelectorAll('.score');
let currentScores = document.querySelectorAll('.current-score');
let currentScore = 0;
let scoreP = [0, 0];
let winner = 0;
diceEl.classList.add('hidden');

function rollDice() {
  if (winner == 0) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (players[0].classList.contains('player--active')) {
      if (dice === 1) {
        currentScore = 0;
        players[0].classList.remove('player--active');
        players[1].classList.add('player--active');
      } else {
        currentScore += dice;
      }
      currentScores[0].textContent = currentScore;
    } else {
      if (dice === 1) {
        currentScore = 0;
        players[1].classList.remove('player--active');
        players[0].classList.add('player--active');
      } else {
        currentScore += dice;
      }
      currentScores[1].textContent = currentScore;
    }
  }
}

function hold() {
  if (players[0].classList.contains('player--active')) {
    scoreP[0] += currentScore;
    scores[0].textContent = scoreP[0];
    currentScores[0].textContent = 0;
    currentScore = 0;
    if (scoreP[0] >= 100) {
      players[0].classList.add('player--winner');
      winner = 1;
      diceEl.classList.add('hidden');
    } else {
      players[0].classList.remove('player--active');
      players[1].classList.add('player--active');
    }
  } else {
    scoreP[1] += currentScore;
    scores[1].textContent = scoreP[1];
    currentScores[1].textContent = 0;
    currentScore = 0;
    if (scoreP[1] >= 100) {
      players[1].classList.add('player--winner');
      winner = 1;
      diceEl.classList.add('hidden');
    } else {
      players[1].classList.remove('player--active');
      players[0].classList.add('player--active');
    }
  }
}

function newG() {
  for (let i = 0; i < scores.length; i++) {
    scores[i].textContent = 0;
    currentScores[i].textContent = 0;
    scoreP[i] = 0;
  }
  currentScore = 0;
  players[1].classList.remove('player--active');
  players[0].classList.add('player--active');
  if (winner) {
    if (players[0].classList.contains('player--winner'))
      players[0].classList.remove('player--winner');
    else players[1].classList.remove('player--winner');
    winner = 0;
  }
  diceEl.classList.add('hidden');
}

btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);
btnNewG.addEventListener('click', newG);
