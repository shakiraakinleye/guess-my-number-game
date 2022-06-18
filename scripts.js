"use strict";

// Defining the secret number to be guessed
let secretNumber = Math.trunc(Math.random() * 20) +1; 

// Defining the initial value of the Score
let score = 20;

// Definining the initial value of highscore
let highscore = 0;

// Defining the displayMessage function
function displayMessage(message) {
  document.querySelector(".guess-prompt").textContent = message;
}

// Defining the secretNumber function


// Creating the function that is executed when the check button is clicked

document.querySelector(".check").addEventListener('click', function () {
  const userGuess = Number(document.querySelector(".input").value);
  console.log(userGuess, typeof guess);


  // Outcome for when there is no input
  if (!userGuess) {
    displayMessage("⛔ No Number");
  }
   
  // Outcome for when guess is right
  else if (userGuess === secretNumber) {
    displayMessage("🎉 Correct Number!");

    document.querySelector(".guess").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "green";

    document.querySelector(".guess").style.width = "4.5em";

    if (score > highscore) {
      highscore = score;

      document.querySelector(".highScoreValue").textContent = highscore;
    }
  }

  // Outcome for when the guess is wrong
  else if (userGuess !== secretNumber) {
    // Game should only go on when score is above 1
    if (score > 1) {
     displayMessage(userGuess > secretNumber ?  "⬆ Too High!" : "⬇ Too Low");

      // Reduction of Score with each wrong guess
      score--;
      document.querySelector(".scoreValue").textContent = score;
    }
    
    else {
      displayMessage("You lost the game ");
      document.querySelector(".scoreValue").textContent = 0;
    }
  }
})


document.querySelector(".reset").addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".scoreValue").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector(".input").value = '';
  document.querySelector(".guess").textContent = '?';
  document.querySelector("body").style.backgroundColor = "rgb(32, 32, 32)";
  document.querySelector(".guess").style.width = "3em";
})

