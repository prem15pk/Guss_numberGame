'use strict';
const secretNumner =Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){document.querySelector('.message').
textContent=message;}

document.querySelector('.check').addEventListener('click' ,function(){

 const value = Number( document.querySelector('.guess').value);
//no input
 if(!value){
    document.querySelector('.message').textContent='no number';
 }

 //correct answer
 else if(value === secretNumner){
   displayMessage('Correct Answer');
    document.querySelector('.number').textContent=secretNumner;
    document.querySelector('body').style .backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
    
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    }

    else if(value !=secretNumner){
      if(score>1){
         displayMessage(value> secretNumner ?'Too High':'Too Low');
      
      score--;
      document.querySelector('.score').textContent = score;
      }
      else{
         displayMessage('You Lost');
        document.querySelector('.score').textContent=0;
        document.querySelector('body').style.backgroundColor='#FA8072';
      }
    }
    
 // value is to high
 });

   document.querySelector('.again').addEventListener('click',function(){
   document.querySelector('.guess').value='';
   document.querySelector('body').style.backgroundColor='#222';
   document.querySelector('.score').textContent=20;
   displayMessage('Start guessing...');
   
   document.querySelector('.number').style.width='15rem';
   document.querySelector('.number').textContent='?';
   
   score = 20;
   //secretNumner = Math.trunc(Math.random() * 20) + 1;

});







