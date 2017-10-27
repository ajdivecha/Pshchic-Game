// alert starting game
alert("Press OK to start game");

// the array that holds letters to be guessed
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// setting the wins and losses to 0. setting the guesses and guesses left (to display to user) to 9.
var wins = 0;

var losses = 0;

var guesses = 9;

var guessesLeft = 9;

var guessedLetters = [];

var letterToGuess = "";

// this willl allow the computer to select a random letter from the array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// the user will have 9 guesses or lives
var updateGuessesLeft = function() {
	// innerHTML so the guesses left will be displayed in HTML
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

// this should allow the computer to produce a random letter each time 
var updateLetterToGuess = function () {
	this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

//here the users guesses will be displayed and seperate by a , for ease of use
var updateGuessesSoFar = function () {
	document.querySelector("#let").innerHTMl = "Your Guesses: " + guessedLetters.push("userGuess");
};

updateLetterToGuess();
updateGuessesLeft();


// this function is called when we reset/restart the game
var reset = function () {
	totalGuesses = 9;
	guessesLeft = 9;
	guessedLetters = [];

	updateGuessesLeft();
	updateGuessesSoFar();
}

//onkeyup is used to document the users keystrokes
document.onkeyup = function(event) {
    guessesLeft--;
  	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push("userGuess");
  updateGuessesLeft();
  updateGuessesSoFar();

// this is so the score counter will increase with each letter correct
        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("You really are psychic!");
                reset();
            }

//this is the else if statement, so when you are out of lives and alert will pop up
        }else if(guessesLeft == 0){
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Don't quit your day job.");
            // Then we'll call the reset. 
            reset();
        }


};

































