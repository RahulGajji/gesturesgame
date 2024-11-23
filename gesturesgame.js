

let rockContainer = document.getElementById('rockContainer');

let paperContainer = document.getElementById('paperContainer');

let scissorContainer = document.getElementById('scissorContainer');


let computerImage = document.getElementById('computerImage');

let compText  = document.getElementById('comptext');


let resultText = document.getElementById('resultText');


let winsResult = document.getElementById('winsResult');

let losesResult = document.getElementById('losesResult');

let tiesResult = document.getElementById('tiesResult');


let restartButton = document.getElementById('restartButton');


let noOfTimesPlayed = document.getElementById('noOfGamesPlayed');


let playerMove;


let wins = 0;
let loses = 0;
let ties = 0;



let storedData = localStorage.getItem('timesplayed');
noOfTimesPlayed.textContent = storedData;


let noOfTimesPlayedGame = Number(storedData);


function generateComputerMove() {


   let computerGeneratedMove; 


   computerImage.classList.toggle('d-none');
   compText.classList.toggle('d-none');

   
   let randomNumber = Math.ceil(Math.random()*10);

   
   if(randomNumber >= 1 && randomNumber <= 3) {
       
       computerGeneratedMove = 'rock';
       computerImage.src = 'gameImages/rock_hand.png';
     
   }

   else if( randomNumber >= 4 && randomNumber <= 6){

    computerGeneratedMove = 'paper';
    computerImage.src = 'gameImages/paper_hand.png';

   }

   else {

    computerGeneratedMove = 'scissors';
    computerImage.src = 'gameImages/scissors_hand.png';

   }




   return computerGeneratedMove
}



function gameOutCome(playerMove,computerMove){


   let outcome;

   

   resultText.classList.toggle('d-none');

   resultText.textContent = '';

   //rock_choice_outcome

   if(playerMove === 'rock' && computerMove === 'rock'){

        outcome = 'Tie';
        resultText.textContent = "Oops, it's a Tie.";
        ties += 1;
      
       

   }

   else if(playerMove === 'rock' && computerMove === 'paper'){

      outcome = 'Lose';
      resultText.textContent = "Oh no! You lost.";
      loses += 1;
    


   }

   else if(playerMove === 'rock' && computerMove === 'scissors'){

      outcome = 'win';
      resultText.textContent = "Yayy, You Won!";
      wins += 1;
    

   }


   //paper_choice_outcome

   else if(playerMove === 'paper' && computerMove === 'rock'){

    outcome = 'win';
    resultText.textContent = "Yayy, You Won!";
    wins += 1;
    

    }

    else if(playerMove === 'paper' && computerMove === 'paper'){

      outcome = 'Tie';
      resultText.textContent = "Oops, it's a Tie.";
      ties += 1;
     
     


    }

    else if(playerMove === 'paper' && computerMove === 'scissors'){

      outcome = 'Lose';
      resultText.textContent = "Oh no! You lost.";
      loses += 1;
     

    }


     //scissors_choice_outcome

   else if(playerMove === 'scissors' && computerMove === 'rock'){

    outcome = 'Lose';
    resultText.textContent = "Oh no! You lost.";
    loses += 1;
   

    }

    else if(playerMove === 'scissors' && computerMove === 'paper'){

      outcome = 'Win';
      resultText.textContent = "Yayy, You Won!";
      wins += 1;
    

    }

    else if(playerMove === 'scissors' && computerMove === 'scissors'){

      outcome = 'Tie';
      resultText.textContent = "Oops, it's a Tie.";
      ties += 1;
      
    


    }


    else {

      outcome = 'Error Ocuured';

    }

  
    winsResult.textContent = wins;
    tiesResult.textContent = ties;
    losesResult.textContent = loses;
    
    
   
    
   
   
    
    

   return outcome;




}



rockContainer.addEventListener('click',function(){

  

  
  playerMove = 'rock';
  let computerMove = generateComputerMove();
  let result = gameOutCome(playerMove,computerMove);
  noOfTimesPlayedGame = noOfTimesPlayedGame + 1;
  noOfTimesPlayed.textContent = noOfTimesPlayedGame;
  localStorage.setItem('timesplayed',JSON.stringify(noOfTimesPlayedGame));

});



paperContainer.addEventListener('click',function(){

  



  playerMove = 'paper';
  let computerMove = generateComputerMove();
  let result = gameOutCome(playerMove,computerMove);
  noOfTimesPlayedGame = noOfTimesPlayedGame + 1;
  noOfTimesPlayed.textContent = noOfTimesPlayedGame;
  localStorage.setItem('timesplayed',JSON.stringify(noOfTimesPlayedGame));


});



scissorContainer.addEventListener('click',function(){

  



  playerMove = 'scissors';
  let computerMove = generateComputerMove();
  let result = gameOutCome(playerMove,computerMove);
  noOfTimesPlayedGame = noOfTimesPlayedGame + 1;
  noOfTimesPlayed.textContent = noOfTimesPlayedGame;
  localStorage.setItem('timesplayed',JSON.stringify(noOfTimesPlayedGame));

});




restartButton.addEventListener('click',function(){
  wins = 0;
  loses = 0;
  ties = 0;
    winsResult.textContent = wins;
    tiesResult.textContent = ties;
    losesResult.textContent = loses;
  
    computerImage.classList.toggle('d-none');
    resultText.classList.toggle('d-none');
    compText.classList.toggle('d-none');
    

})







