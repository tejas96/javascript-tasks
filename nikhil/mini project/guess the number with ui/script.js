
//remvoing and assigning randomly generated value to the computer logo
let computervalue = document.getElementById("computervalue");

document.getElementById("check").addEventListener( "click" , function(){
 
// user value 
let uservalue = document.getElementById("uservalue").value ;

// this code gets randomly generated values
let randomvalue = Math.floor(Math.random() * 10 );
computervalue.innerText = randomvalue;

        if ( +uservalue == randomvalue ) {
          alert("correct, you won this game !")
        } else if ( +uservalue > 10 ) {
          alert("your guess is to high")
        } else if ( +uservalue < 0 ) {
          alert("your guess is to low ")
        } else {
          alert("you loose this game")
        }

   })


