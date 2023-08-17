      
       
       const randomNumber = Math.floor(Math.random()* 100)+1;
       
       while (true) {
       
       const guessNumber=prompt("Enter number between 1 to 100");

        if (guessNumber==randomNumber) {
          alert("Correct!!! You Won ");
          }
          else if (guessNumber > randomNumber) {
            alert(" your guess is too high");
          } else if(guessNumber < randomNumber ) {
            alert(" your guess is too low");
          }
          else{
            alert("Thats not a number");
          }
        
           if(!confirm("Do you want to play again??")){
           alert("Thank you!!!!!");
           break;
          } 

        }
        
        
        
      