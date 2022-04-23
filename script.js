'use strict';

let secretNumber = Math.trunc(Math.random() * 20 +1);
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('No number!')
    }
    else if (guess === secretNumber) {
        displayMessage('Correct number!');
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.number').textContent = secretNumber;
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('You lost the game!')
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red'
        }
    }
})
  
document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20 +1);
    displayMessage("Start guessing...")
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';
})