'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.number').textContent = "?";
console.log(secretNumber);


document.querySelector('.guess').setAttribute('min','1');
document.querySelector('.guess').setAttribute('max', '20');

document.querySelector('.check').addEventListener('click',function(){
     const guess=Number(document.querySelector('.guess').value);
     console.log(guess,typeof guess);
   
    
     if (!guess){
         document.querySelector('.message').textContent = 'No Number!';
        
     }
     if (guess > 20 || guess < 0){
        document.querySelector('.message').textContent = "Invalid number";
        document.querySelector(".guess").value="";
       
     }
     else if (guess === secretNumber){
         document.querySelector('.message').textContent = 'Correct Number!';
         document.querySelector('.number').textContent = secretNumber;

         document.querySelector('body').style.backgroundColor = '#60b347';
         document.querySelector('.number').style.width = '30rem';
    
    if (score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
        }else if (guess > secretNumber){
         if(score > 1){
             document.querySelector('.message').textContent = 'Too High!';
             score--;
             document.querySelector('.score').textContent = score;
           
         }else{
             document.querySelector('.message').textContent = 'Game Over!';
             document.querySelector('.score').textContent = 0;
           
         }
     }else if(guess < secretNumber){
         if (score > 1){
             document.querySelector('.message').textContent = 'Too Low!';
             score--;
             document.querySelector('.score').textContent=score;
           
         }else{
            document.querySelector('.message').textContent = 'Game Over!';
            document.querySelector('.score').textContent = 0;
            
         }
     }
});
document.querySelector('.again').addEventListener('click',function(){
     score = 20;
     secretNumber = Math.trunc(Math.random() * 20) + 1;
    
     document.querySelector('.message').textContent = 'Start guessing...';
     document.querySelector ('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
     document.querySelector(".guess").value="";


});