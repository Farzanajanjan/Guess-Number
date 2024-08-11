'use strict';
document.querySelector('.guess').value='';
document.querySelector('.guess').value='16';
const secretNumber = (Math.floor(Math.random()*20)+1);
let score = 20;
let highscore=0;
document.querySelector('.score').textContent= score;
document.querySelector('.check').addEventListener('click',function () {
    const guessNumber = Number(document.querySelector('.guess').value);
    console.log(guessNumber);
    if(!guessNumber){
        DisplayMessage('No Number');
    }
    else if(secretNumber === guessNumber){
        DisplayMessage('Correct guess,You Win');
document.querySelector('body').style.backgroundColor = 'green';
document.querySelector('.number').style.width = "30rem";
if(score > highscore){
    highscore = score;
    document.querySelector('.highscore').textContent= highscore;
}
    }
    else if (secretNumber !== guessNumber) {
        if (score > 1) {
            DisplayMessage(secretNumber > guessNumber ? 'Low':'highe') ;
           
                score--;
                    document.querySelector('.score').textContent= score;
                } else {
                    DisplayMessage('you lose the game');
                    score =0;
                    document.querySelector('.score').textContent= score;
                }
        }
});
document.querySelector(".again").addEventListener('click',function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    const secretNumber = (Math.floor(Math.random()*20)+1);
    DisplayMessage('Start your guessing');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.guess').value='';
});
function DisplayMessage(message) {
    document.querySelector('.message').textContent= message;
}