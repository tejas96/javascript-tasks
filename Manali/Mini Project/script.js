function startGame() {
    while (true) {
      const number = Math.floor(Math.random() * 11) + 1;
      let attempts = 0;
  
      while (true) {
        attempts++;
        const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
        
  
        if (isNaN(userGuess)) {
          alert("Please enter a valid number.");
        } else if (userGuess === number) {
          alert(`Correct! You guessed the number in ${attempts} attempts.`);
          break;
        } else if (userGuess < number) {
          alert("Your guess is too low.");
        } else {
          alert("Your guess is too high.");
        }
      }
  
      if (!confirm("Do you want to play again?")) {
        alert("Thanks for playing!");
        break;
      }
    }
  }
  
  startGame();
  